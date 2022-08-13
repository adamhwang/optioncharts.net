import React, { useEffect, useState } from "react";
import { OptionStrategy } from "react-option-charts";
import { useImmer } from "use-immer";
import { IOptionLeg } from "../optionLeg";

export const getStrategy = (title: string) => {
  return {
    name: `${title} Today`,
    color: "#FF5959",
    showPayoff: true,
    payoffTitle: "At Expiry",
    payoffColor: "#676FA3",
  };
};

export const OptionLegs = React.createContext(
  {} as ReturnType<typeof SetupProvider>
);

export const OptionLegsProvider: React.FunctionComponent<{
  title: string;
  optionLegs: IOptionLeg[];
}> = ({ children, optionLegs, title }) => {
  const providerValue = SetupProvider(title);
  const { setOptionLegs, setStrategy } = providerValue;

  useEffect(() => {
    setOptionLegs(optionLegs);
  }, [optionLegs]);

  useEffect(() => {
    setStrategy(getStrategy(title));
  }, [title]);

  return (
    <OptionLegs.Provider value={providerValue}>{children}</OptionLegs.Provider>
  );
};

const SetupProvider = (title: string) => {
  const [underlying, setUnderlying] = useState(100);
  const [rfr, setRfr] = useState(0.01);
  const [optionLegs, setOptionLegs] = useImmer<IOptionLeg[]>([]);
  const [strategy, setStrategy] = useState<Omit<OptionStrategy, "optionLegs">>(
    getStrategy(title)
  );

  return React.useMemo(
    () => ({
      underlying,
      setUnderlying,
      rfr,
      setRfr,
      optionLegs,
      setOptionLegs,
      strategy,
      setStrategy,
    }),
    [
      underlying,
      setUnderlying,
      rfr,
      setRfr,
      optionLegs,
      setOptionLegs,
      strategy,
      setStrategy,
    ]
  );
};
