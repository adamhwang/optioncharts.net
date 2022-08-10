import React, { useState } from "react";
import { useImmer } from "use-immer";
import { IOptionLeg } from "../optionLeg";

export const OptionLegs = React.createContext(
  {} as ReturnType<typeof SetupProvider>
);

export const OptionLegsProvider: React.FunctionComponent = (props) => {
  const providerValue = SetupProvider();

  return (
    <OptionLegs.Provider value={providerValue}>
      {props.children}
    </OptionLegs.Provider>
  );
};

const SetupProvider = () => {
  const [underlying, setUnderlying] = useState(100);
  const [rfr, setRfr] = useState(0.01);
  const [optionLegs, setOptionLegs] = useImmer<IOptionLeg[]>([]);

  return React.useMemo(
    () => ({
      underlying,
      setUnderlying,
      rfr,
      setRfr,
      optionLegs,
      setOptionLegs,
    }),
    [underlying, setUnderlying, rfr, setRfr, optionLegs, setOptionLegs]
  );
};
