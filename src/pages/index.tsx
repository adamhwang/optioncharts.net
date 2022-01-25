import type { GetStaticProps, NextPage } from "next";

import Chart, { ChartProps } from "../components/Chart";

import options from "../options.json";

const Home: NextPage<ChartProps> = (props) => {
  return <Chart {...props}></Chart>;
};

export default Home;

export const getStaticProps: GetStaticProps<ChartProps> = async (context) => {
  const strategy = "Iron Condor";
  const props = (options as ChartProps[]).find((o) => o.title === strategy);
  if (!props) throw `${strategy} not found`;
  return {
    props,
  };
};
