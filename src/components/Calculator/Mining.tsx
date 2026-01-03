import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Slider } from "./ui/slider";
import { X } from "lucide-react";

export function SignumMiningLanding() {
  const [plotSize, setPlotSize] = useState(100);
  const [commitment, setCommitment] = useState(1000);
  const [signaPrice, setSignaPrice] = useState(0.0014);
  const [simulatedPricePercentage, setSimulatedPricePercentage] = useState(100);
  const [baseTarget, setBaseTarget] = useState(300);
  const blockReward = 100;
  const [tbCommitment, setTbCommitment] = useState(30000);
  const [incomeRange, setIncomeRange] = useState(1); // 1 = daily, 2 = monthly, 3 = yearly
  const [income, setIncome] = useState({ signa: "0", usd: "0" });
  const [commitmentFactor, setCommitmentFactor] = useState(1);

  useEffect(() => {
    fetchSignaPrice();
    fetchMiningInfo();
  }, []);

  useEffect(() => {
    calculateIncome();
  }, [
    plotSize,
    commitment,
    signaPrice,
    baseTarget,
    blockReward,
    tbCommitment,
    incomeRange,
    simulatedPricePercentage,
  ]);

  const fetchSignaPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=signum&vs_currencies=usd"
      );
      const data = await response.json();
      setSignaPrice(parseFloat(data.signum.usd.toFixed(6)));
    } catch (error) {
      console.error("Error fetching Signa price:", error);
    }
  };

  const fetchMiningInfo = async () => {
    try {
      const response = await fetch(
        "https://europe.signum.network/burst?requestType=getMiningInfo"
      );
      const data = await response.json();
      setBaseTarget(parseInt(data.baseTarget));
      const averageCommitment = (
        parseInt(data.averageCommitmentNQT) / parseInt("100000000")
      ).toFixed(0);
      setTbCommitment(parseInt(averageCommitment));
    } catch (error) {
      console.error("Error fetching mining info:", error);
    }
  };

  const calculateIncome = () => {
    const ratio = commitment / plotSize / tbCommitment;
    let factor = Math.pow(ratio, 0.4515449935);
    factor = Math.min(8.0, Math.max(0.125, factor));
    setCommitmentFactor(factor);

    const networkTbs = 18325193796.0 / baseTarget / 1.83;
    const burstPerDay =
      (360.0 / (networkTbs + plotSize * factor)) * blockReward;
    const myDaily = (burstPerDay * factor * plotSize).toFixed(3);

    let signaIncome = myDaily;
    if (incomeRange === 2) signaIncome = (parseFloat(myDaily) * 30).toFixed(2);
    if (incomeRange === 3) signaIncome = (parseFloat(myDaily) * 360).toFixed(2);

    const simulatedPrice = signaPrice * (simulatedPricePercentage / 100);
    const usdIncome = (parseFloat(signaIncome) * simulatedPrice).toFixed(2);

    setIncome({ signa: signaIncome, usd: usdIncome });
  };

  const resetPriceSimulation = () => {
    setSimulatedPricePercentage(100);
  };

  return (
    <div className="bg-gradient-to-b from-white to-signum-acqua/40 text-signum-midnight">
      <section className="w-full py-16 sm:py-20">
        <div className="mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <p className="kicker text-sm tracking-widest text-signum-midnight/90">
            MINING CALCULATOR
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Estimate your Signa mining income
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px]">
            Simple inputs. Instant results. Storage first, hype later.
          </p>
        </div>

        <Card className="mx-auto mt-10 md:max-w-2xl card xl:max-w-3xl card ">
          <CardContent className="p-4 xl:p-8">
            <div className="grid gap-6 xl:grid-cols-2">
              {/* Left controls */}
              <div className="space-y-5">
                <div className="space-y-2 ">
                  <Label htmlFor="plot-size">Plot size (TB)</Label>
                  <Input
                    id="plot-size"
                    type="number"
                    value={plotSize}
                    onChange={(e) => setPlotSize(Number(e.target.value))}
                    className="bg-white border-neutral-200 focus:border-signum-blue focus:ring-1 focus:ring-signum-blue/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="commitment">Commitment (SIGNA)</Label>
                  <Input
                    id="commitment"
                    type="number"
                    value={commitment}
                    onChange={(e) => setCommitment(Number(e.target.value))}
                    className="bg-white border-neutral-200 focus:border-signum-blue focus:ring-1 focus:ring-signum-blue/40"
                  />
                  <p className="text-sm text-neutral-500">
                    Commitment factor:{" "}
                    <span className="font-medium text-signum-midnight">
                      {commitmentFactor.toFixed(3)}
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Income period</Label>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setIncomeRange(1)}
                      className={`px-4 ${
                        incomeRange === 1
                          ? "bg-signum-blue text-white hover:bg-signum-darkblue"
                          : "bg-white text-signum-midnight ring-1 ring-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      Daily
                    </Button>
                    <Button
                      onClick={() => setIncomeRange(2)}
                      className={`px-4 ${
                        incomeRange === 2
                          ? "bg-signum-blue text-white hover:bg-signum-darkblue"
                          : "bg-white text-signum-midnight ring-1 ring-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      Monthly
                    </Button>
                    <Button
                      onClick={() => setIncomeRange(3)}
                      className={`px-4 ${
                        incomeRange === 3
                          ? "bg-signum-blue text-white hover:bg-signum-darkblue"
                          : "bg-white text-signum-midnight ring-1 ring-neutral-200 hover:bg-neutral-50"
                      }`}
                    >
                      Yearly
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="price-simulation">Price simulation</Label>
                    <Button
                      onClick={resetPriceSimulation}
                      size="sm"
                      className="bg-white text-signum-midnight ring-1 ring-neutral-200 hover:bg-neutral-50"
                      aria-label="Reset price simulation"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <Slider
                    id="price-simulation"
                    min={50}
                    max={1100}
                    step={1}
                    value={[simulatedPricePercentage]}
                    onValueChange={(v) => setSimulatedPricePercentage(v[0])}
                    className="w-full"
                  />
                  <p className="text-sm text-neutral-500">
                    Price: $
                    {(signaPrice * (simulatedPricePercentage / 100)).toFixed(6)}
                    {simulatedPricePercentage !== 100 &&
                      ` (${simulatedPricePercentage}% of current)`}
                  </p>
                </div>
              </div>

              {/* Right summary */}
              <div className="space-y-5">
                <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-5 shadow-[var(--shadow-card)]">
                  <p className="text-sm font-medium ">Estimated income</p>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">
                    {income.signa}{" "}
                    <span className="text-xl font-normal">SIGNA</span>
                  </div>
                  <div className="mt-1 text-neutral-500">${income.usd} USD</div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-xl bg-signum-acqua/60 p-3">
                      <div className="font-bold">Block reward without fees</div>
                      <div className="font-medium text-signum-midnight">
                        {blockReward} SIGNA
                      </div>
                    </div>
                    <div className="rounded-xl bg-signum-acqua/60 p-3">
                      <div className="font-bold">Network Commitment</div>
                      <div className="font-medium text-signum-midnight">
                        {tbCommitment} SIGNA/TB
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-500">
                  Estimates are illustrative and based on current network data.
                  Actual results may vary.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
