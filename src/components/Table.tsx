import { FunctionComponent, useContext } from "react";
import { formatUSD, OptionStrategyValue } from "react-option-charts";

import { OptionLegs } from "../contexts/OptionLegs";

export type TableProps = {
  name: string;
  x: number;
  start: OptionStrategyValue;
  current: OptionStrategyValue;
};

const Table: FunctionComponent<TableProps> = ({ name, x, start, current }) => {
  const { strategy, underlying } = useContext(OptionLegs);

  if (!x || !start || !current) return <></>;

  const rows = start.optionLegValues.map((o, i) => {
    return (
      <tr key={`row-${i}`}>
        <td scope="row">{i + 1}</td>
        <td>{formatUSD(start.optionLegValues[i])}</td>
        <td>{formatUSD(current.optionLegValues[i])}</td>
        <td>
          {formatUSD(current.optionLegValues[i] - start.optionLegValues[i])}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div
        style={{
          color:
            name !== strategy.payoffTitle
              ? strategy.color
              : strategy.payoffColor,
        }}
      >
        {name}
      </div>
      <table className="table small">
        <thead>
          <tr>
            <td scope="col">#</td>
            <td scope="col">@{formatUSD(underlying)}</td>
            <td scope="col">@{formatUSD(x)}</td>
            <td scope="col">Δ</td>
          </tr>
        </thead>
        <tbody>
          {rows}
          <tr>
            <td style={bottomRowTopBorder}></td>
            <td style={bottomRowTopBorder}>{formatUSD(start.total)}</td>
            <td style={bottomRowTopBorder}>{formatUSD(current.total)}</td>
            <td style={bottomRowTopBorder}>
              {formatUSD(current.total - start.total)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;

const bottomRowTopBorder = { borderTopWidth: "2px" };
