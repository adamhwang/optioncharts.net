import React from "react";
import { FunctionComponent, useContext } from "react";
import OptionPayoffChart, {
  OptionPayoffChartProps,
  OptionStrategy,
} from "react-option-charts";
import { OptionLegs } from "../contexts/OptionLegs";
import { toChartOptionLeg } from "../optionLeg";

type ChartProps = {
  title: string;
  onCurrentValueChanged: OptionPayoffChartProps["onCurrentValueChanged"];
};

const Chart: FunctionComponent<ChartProps> = React.memo((props) => {
  const { title, onCurrentValueChanged } = props;

  const { underlying, rfr, optionLegs, strategy } = useContext(OptionLegs);

  const strategies: OptionStrategy[] = [
    {
      ...strategy,
      optionLegs: optionLegs.map((o) => toChartOptionLeg(o)),
    },
  ];

  return (
    <div>
      <OptionPayoffChart
        seriesName={title}
        s={underlying}
        r={rfr}
        strategies={strategies}
        onCurrentValueChanged={onCurrentValueChanged}
      ></OptionPayoffChart>
    </div>
  );
});

export default Chart;
