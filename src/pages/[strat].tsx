import { useContext, useEffect } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";

import Chart from "../components/Chart";
import Editor from "../components/Editor";
import { OptionLegs } from "../contexts/OptionLegs";
import { IOptionLeg } from "../optionLeg";
import { toSlug } from "../utils";

import options from "../options.json";

export type OptionStrat = {
  title: string;
  aliases?: string[];
  optionLegs: IOptionLeg[];
};

type StratParsedUrlQuery = ParsedUrlQuery & {
  strat: string;
};

const StratPage: NextPage<OptionStrat> = (props) => {
  const { title, optionLegs } = props;

  const { setOptionLegs } = useContext(OptionLegs);

  useEffect(() => {
    setOptionLegs(optionLegs);
  }, [optionLegs, setOptionLegs]);

  return (
    <>
      <NextSeo title={title} openGraph={{ title }} />
      <Chart {...props}></Chart>
      <Editor></Editor>
    </>
  );
};

export default StratPage;

export const getStaticProps: GetStaticProps<
  OptionStrat,
  StratParsedUrlQuery
> = async (context) => {
  if (!context.params) throw "Invalid path";

  const { strat } = context.params;
  const props = (options as OptionStrat[]).find(
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
