import type { NextPage } from "next";
import { useState } from "react";
import OptionPayoffChart from "react-option-charts";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useImmer } from "use-immer";
import { IOptionLeg, toChartOptionLeg } from "../optionLeg";

const Home: NextPage = () => {
  const [underlying, setUnderlying] = useState(100);
  const [rfr, setRfr] = useState(0.01);
  const [optionLegs, setOptionLegs] = useImmer<IOptionLeg[]>([
    {
      k: 95,
      dte: 45,
      v: 0.15,
      callPut: "put",
      longShort: "long",
    },
    {
      k: 105,
      dte: 45,
      v: 0.15,
      callPut: "put",
      longShort: "short",
    },
    {
      k: 115,
      dte: 45,
      v: 0.15,
      callPut: "call",
      longShort: "short",
    },
    {
      k: 125,
      dte: 45,
      v: 0.15,
      callPut: "call",
      longShort: "long",
    },
  ]);

  const renderStrategy = (legs: IOptionLeg[]) =>
    legs.map((o, i) => (
      <div key={`leg-${i}`} className="row">
        <div className="col-2">
          <select
            className="form-select form-select-sm"
            aria-label={`leg ${i + 1} long or short`}
            value={o.longShort}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].longShort = e.target.value as "long" | "short";
              })
            }
          >
            <option>long</option>
            <option>short</option>
          </select>
        </div>
        <div className="col-2">
          <input
            className="form-control form-control-sm"
            aria-label={`leg ${i + 1} strike`}
            type="number"
            value={o.k}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].k = +e.target.value;
              })
            }
          />
        </div>
        <div className="col-2">
          <input
            className="form-control form-control-sm"
            aria-label={`leg ${i + 1} DTE`}
            type="number"
            value={o.dte}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].dte = +e.target.value;
              })
            }
          />
        </div>
        <div className="col-2">
          <input
            className="form-control form-control-sm"
            aria-label={`leg ${i + 1} volatility`}
            type="number"
            value={o.v}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].v = +e.target.value;
              })
            }
            step=".05"
          />
        </div>
        <div className="col-2">
          <select
            className="form-select form-select-sm"
            aria-label={`leg ${i + 1} put call`}
            value={o.callPut}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].callPut = e.target.value as "call" | "put";
              })
            }
          >
            <option>call</option>
            <option>put</option>
          </select>
        </div>
        <div className="col-2">
          <a
            role="button"
            className="me-2 text-dark"
            onClick={() =>
              setOptionLegs((draft) => {
                draft.splice(i, 0, o);
              })
            }
          >
            <FaPlus />
          </a>
          {legs.length > 1 ? (
            <a
              role="button"
              className="text-dark"
              onClick={() =>
                setOptionLegs((draft) => {
                  draft.splice(i, 1);
                })
              }
            >
              <FaMinus />
            </a>
          ) : null}
        </div>
      </div>
    ));

  const strategies = [
    {
      name: "Strategy 1",
      color: "#FF5959",
      payoffColor: "#676FA3",
      optionLegs,
    },
  ];

  return (
    <div>
      <div>
        <OptionPayoffChart
          seriesName="OptionCharts.net"
          showPayoff
          s={underlying}
          r={rfr}
          strategies={strategies.map((s) => {
            return {
              ...s,
              optionLegs: s.optionLegs.map((o) => toChartOptionLeg(o)),
            };
          })}
        ></OptionPayoffChart>
      </div>
      <div className="container">
        <div className="row mb-2">
          <small className="col-2">stock</small>
          <small className="col-2">
            <input
              className="form-control form-control-sm"
              aria-label="stock price"
              type="number"
              value={underlying}
              onChange={(e) => setUnderlying(+e.target.value)}
            />
          </small>
          <small className="col-2 offset-2">rate</small>
          <small className="col-2">
            <input
              className="form-control form-control-sm"
              aria-label={`risk free rate`}
              type="number"
              value={rfr}
              onChange={(e) => setRfr(+e.target.value)}
              step=".01"
            />
          </small>
        </div>
        <div className="row">
          <small className="col-2">long/short</small>
          <small className="col-2">strike</small>
          <small className="col-2">dte</small>
          <small className="col-2">iv</small>
          <small className="col-2">put/call</small>
        </div>
        {strategies.map((s) => renderStrategy(s.optionLegs))}
      </div>
    </div>
  );
};

export default Home;
