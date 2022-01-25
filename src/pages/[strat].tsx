import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";

import Chart, { ChartProps } from "../components/Chart";
import { toSlug } from "../utils";

import options from "../options.json";

type StratParsedUrlQuery = ParsedUrlQuery & {
  strat: string;
};

const Home: NextPage<ChartProps> = (props) => {
  const { title } = props;
  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <Chart {...props}></Chart>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<
  ChartProps,
  StratParsedUrlQuery
> = async (context) => {
  if (!context.params) throw "Invalid path";

  const { strat } = context.params;
  const props = (options as ChartProps[]).find(
    (o) => toSlug(o.title) === strat
  );
  if (!props) throw `${strat} not found`;
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths<StratParsedUrlQuery> = async () => {
  const paths = options.map((o) => {
    return {
      params: {
        strat: toSlug(o.title),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
