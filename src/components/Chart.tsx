import React from "react";
import { FunctionComponent, useContext } from "react";
import OptionPayoffChart, { OptionPayoffChartProps } from "react-option-charts";
import { OptionLegs } from "../contexts/OptionLegs";
import { toChartOptionLeg } from "../optionLeg";
import { colors } from "../utils";

type ChartProps = {
  title: string;
  onCurrentValueChanged: OptionPayoffChartProps["onCurrentValueChanged"];
};

const Chart: FunctionComponent<ChartProps> = React.memo((props) => {
  const { title, onCurrentValueChanged } = props;

  const { underlying, rfr, optionLegs } = useContext(OptionLegs);

  const strategies = [
    {
      name: title,
      color: colors.lineChart,
      payoffColor: colors.payoffLineChart,
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
        onCurrentValueChanged={onCurrentValueChanged}
      ></OptionPayoffChart>
    </div>
  );
});

export default Chart;
