import { useMemo, useState, useEffect } from "react";
import { useAccount } from "@lib/hooks/useAccount";
import { useAppSelector } from "@lib/hooks/useAppSelector";
import { selectWalletState } from "@lib/states/walletState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
import hashicon from "hashicon";
import { Amount } from "@signumjs/util";
import { src44 } from "@signumjs/standards";
import { useAppContext } from "@lib/hooks/useAppContext.ts";

export const AccountCard = (): JSX.Element | null => {
  const { accountId, accountRS, isWatchOnlyMode, accountInfo } = useAccount();
  const {
    Ipfs: { getUrlByCid },
  } = useAppContext();
  const { isWalletConnected } = useAppSelector(selectWalletState);
  const [iconUrl, setIconUrl] = useState("");

  const hashIconUrl = useMemo(() => {
    return accountId ? hashicon(accountId, { size: 36 }).toDataURL() : "";
  }, [accountId]);

  useEffect(() => {
    setIconUrl(hashIconUrl);
  }, [hashIconUrl]);

  const info = useMemo(() => {
    if (!accountInfo) return null;

    const balanceSigna = Amount.fromPlanck(accountInfo.balanceNQT);
    const name = accountInfo?.name ?? "Account";
    try {
      const descriptor = src44.DescriptorData.parse(
        accountInfo.description,
        false
      );
      const avatarCID = descriptor.avatar ? descriptor.avatar.ipfsCid : null;
      if (avatarCID) {
        setIconUrl(getUrlByCid(avatarCID));
      }
    } catch {
      console.error("Error parsing SRC44 data", accountInfo.description);
      // ignore of no SRC44 data
    }
    return {
      balanceSigna,
      name,
    };
  }, [accountInfo, getUrlByCid]);

  const fmtSigna = (a?: Amount, fraction = 2) => {
    if (!a) return "";
    const n = Number((a as any).getSigna()); // <- String -> Number
    return n.toLocaleString(undefined, {
      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction,
    });
  };

  if (!isWalletConnected) return null;

  return (
    <div className="max-w-full">
      <div
        className="
        flex items-center gap-3
        rounded-2xl bg-transparent backdrop-blur-0
        ring-0 shadow-none
        px-2 py-1 md:px-3 md:py-2
        min-w-[240px] max-w-[520px]
      "
      >
        {/* ⬅️ linke Spalte: Balance */}
        {info?.balanceSigna && (
          <div
            className="flex flex-col items-end justify-center text-signum-midnight
                        min-w-[92px] pr-1"
          >
            <span className="text-[10px] uppercase tracking-wide opacity-60 leading-tight">
              SIGNA
            </span>
            <span className="text-sm font-semibold tabular-nums leading-tight text-[12px]">
              {fmtSigna(info.balanceSigna, 2)}
            </span>
          </div>
        )}

        {/* Avatar */}
        <img
          src={iconUrl}
          alt="Account avatar"
          className="h-10 w-10 rounded-xl object-cover"
          onError={() => setIconUrl(hashIconUrl)}
        />

        {/* Name + Badge + RS */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[12px]">
            <span className="font-semibold text-signum-midnight truncate">
              {info?.name}
            </span>

            {isWatchOnlyMode ? (
              <span
                className="inline-flex items-center gap-1 rounded-full
                             bg-amber-50 text-amber-800
                             px-2 py-0.5 text-[10px]"
              >
                <FontAwesomeIcon icon={faUserSecret} className="h-3.5 w-3.5" />
                Watch-only
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-1 rounded-full
                             bg-emerald-50 text-emerald-700
                             px-2 py-0.5 text-[10px]"
              >
                <FontAwesomeIcon icon={faCircleCheck} className="h-3.5 w-3.5" />
                Full Access
              </span>
            )}
          </div>

          {accountRS && (
            <div className="text-[10px] text-neutral-500 font-mono truncate">
              {accountRS}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
