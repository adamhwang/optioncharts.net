import type { GetStaticProps } from "next";

import StratPage, { OptionStrat } from "./[strat]";

import options from "../options.json";

export default StratPage;

export const getStaticProps: GetStaticProps<OptionStrat> = async (context) => {
  const strategy = "Iron Condor";
  const props = (options as OptionStrat[]).find((o) => o.title === strategy);
  if (!props) throw `${strategy} not found`;
  return {
    props,
  };
};
