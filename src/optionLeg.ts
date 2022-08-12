import { OptionLeg } from "react-option-charts";

export interface IOptionLeg extends Omit<OptionLeg, "t" | "quantity"> {
  dte: number;
  longShort: "long" | "short";
}

export const toChartOptionLeg = (o: IOptionLeg): OptionLeg => {
  const quantity = o.longShort === "long" ? 1 : -1;
  return {
    k: o.k,
    t: o.dte / 365.25,
    v: o.v,
    callPut: o.callPut,
    quantity,
  };
};
