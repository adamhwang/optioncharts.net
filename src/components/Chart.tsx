import { FunctionComponent, useContext } from "react";
import OptionPayoffChart, { OptionStrategyValue } from "react-option-charts";
import { OptionLegs } from "../contexts/OptionLegs";
import { IOptionLeg, toChartOptionLeg } from "../optionLeg";

type ChartProps = {
  title: string;
};

const Chart: FunctionComponent<ChartProps> = (props) => {
  const { title } = props;

  const { underlying, rfr, optionLegs } = useContext(OptionLegs);

  const strategies = [
    {
      name: title,
      color: "#FF5959",
      payoffColor: "#676FA3",
      optionLegs: optionLegs.map((o) => toChartOptionLeg(o)),
    },
  ];

  let payoffTitle = undefined;
  const dtes = new Set(optionLegs.map((o) => o.dte));
  if (dtes.size > 1) {
    payoffTitle = `{0} payoff in ${Math.min(...dtes)} days`;
  }

  return (
    <div>
      <OptionPayoffChart
        seriesName={title}
        showPayoff
        payoffTitle={payoffTitle}
        s={underlying}
        r={rfr}
        strategies={strategies}
      ></OptionPayoffChart>
    </div>
  );
};

export default Chart;
