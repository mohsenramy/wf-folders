import React, { PropsWithChildren } from "react";
import { UseQueryResult } from "react-query";
import ErrorMessageWithReload from "../common/ErrorMessageWithReload";
import Loading from "../common/Loading";

export type DataPresenter<T> = { serverData: T[] | undefined };

type DataFetcherProps<T> = {
  queryName: string;
  queryFunc: (...args: any[]) => UseQueryResult<T[], unknown>; //| {() => UseQueryResult<T[], unknown>};
  queryFuncArgs?: any[];
  component: (props: PropsWithChildren<DataPresenter<T>>) => JSX.Element;
};

// const DataFetcher = ({ queryName, queryFunc, component }: DataFetcherProps) => {
const DataFetcher = <T,>({
  queryName,
  queryFunc,
  queryFuncArgs,
  component,
}: DataFetcherProps<T>) => {
  const { isLoading, isError, data } = queryFuncArgs ? queryFunc(...queryFuncArgs) : queryFunc();

  if (isLoading) {
    return <Loading loadingMessage='Fetching Data ...' />;
  }
  if (isError) {
    return <ErrorMessageWithReload message={"Unable to fetch folders data"} />;
  }
  return React.createElement(component, { serverData: data as T[] });
};

export default DataFetcher;
