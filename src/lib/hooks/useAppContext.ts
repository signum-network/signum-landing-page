import { useContext } from "react";
import { AppContext } from "@lib/contexts/AppContext";

export const useAppContext = () => {
  return useContext(AppContext);
};
