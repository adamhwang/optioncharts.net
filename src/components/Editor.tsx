import { FunctionComponent, useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import { OptionLegs } from "../contexts/OptionLegs";
import { IOptionLeg } from "../optionLeg";

const Editor: FunctionComponent = () => {
  const { underlying, setUnderlying, rfr, setRfr, optionLegs, setOptionLegs } =
    useContext(OptionLegs);

  const renderStrategy = (legs: IOptionLeg[]) =>
    legs.map((o, i) => (
      <div key={`leg-${i}`} className="row">
        <div className="col-2 px-1 px-sm-2">
          <select
            className="form-select form-select-sm pe-0 pe-sm-4"
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
        <div className="col-2 px-1 px-sm-2">
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
        <div className="col-2 px-1 px-sm-2">
          {o.callPut !== "underlying" ? (
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
          ) : null}
        </div>
        <div className="col-2 px-1 px-sm-2">
          {o.callPut !== "underlying" ? (
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
          ) : null}
        </div>
        <div className="col-2 px-1 px-sm-2">
          <select
            className="form-select form-select-sm pe-0 pe-sm-4"
            aria-label={`leg ${i + 1} put call`}
            value={o.callPut}
            onChange={(e) =>
              setOptionLegs((draft) => {
                draft[i].callPut = e.target.value as
                  | "call"
                  | "put"
                  | "underlying";
              })
            }
          >
            <option>call</option>
            <option>put</option>
            <option>underlying</option>
          </select>
        </div>
        <div className="col-2 px-1 px-sm-2 text-center text-sm-start">
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

  return (
    <div className="container">
      <div className="row mb-2">
        <small className="col-2 text-truncate">stock</small>
        <small className="col-2 px-1 px-sm-2">
          <input
            className="form-control form-control-sm"
            aria-label="stock price"
            type="number"
            value={underlying}
            onChange={(e) => setUnderlying(+e.target.value)}
          />
        </small>
        <small className="col-2 offset-2 text-truncate">rate</small>
        <small className="col-2 px-1 px-sm-2">
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
        <small className="col-2 text-truncate">long/short</small>
        <small className="col-2 text-truncate">strike</small>
        <small className="col-2 text-truncate">dte</small>
        <small className="col-2 text-truncate">iv</small>
        <small className="col-2 text-truncate">put/call</small>
      </div>
      {renderStrategy(optionLegs)}
    </div>
  );
};

export default Editor;
