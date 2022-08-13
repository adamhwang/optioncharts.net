import { useMemo, useState } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { OptionPayoffChartProps } from "react-option-charts";
import { ParsedUrlQuery } from "querystring";

import Chart from "../components/Chart";
import Editor from "../components/Editor";
import Table, { TableProps } from "../components/Table";
import { OptionLegsProvider } from "../contexts/OptionLegs";
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

  const [tableValues, setTableValues] = useState<{
    [key: string]: TableProps;
  }>({});

  const onCurrentValueChanged = useMemo<
    OptionPayoffChartProps["onCurrentValueChanged"]
  >(
    () => (x, start, current) => {
      setTableValues(
        Object.keys(start).reduce((acc, key) => {
          acc[key] = {
            x,
            start: start[key],
            current: current[key],
            name: key,
          };
          return acc;
        }, {} as typeof tableValues)
      );
    },
    []
  );

  const tables = Object.keys(tableValues).map((key, i) => (
    <div key={`table-${i}`} className="pt-3 col-sm-6">
      <Table {...tableValues[key]}></Table>
    </div>
  ));

  return (
    <OptionLegsProvider title={title} optionLegs={optionLegs}>
      <NextSeo title={title} openGraph={{ title }} />
      <Chart
        title={title}
        onCurrentValueChanged={onCurrentValueChanged}
      ></Chart>
      <Editor></Editor>
      <div className="row">{tables}</div>
    </OptionLegsProvider>
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
