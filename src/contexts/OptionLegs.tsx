import React, { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { IOptionLeg } from "../optionLeg";

export const OptionLegs = React.createContext(
  {} as ReturnType<typeof SetupProvider>
);

export const OptionLegsProvider: React.FunctionComponent<{
  optionLegs: IOptionLeg[];
}> = (props) => {
  const providerValue = SetupProvider();

  useEffect(() => {
    providerValue.setOptionLegs(props.optionLegs);
  }, [props.optionLegs]);

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
