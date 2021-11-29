import React, { PropsWithChildren } from "react";
import { UseQueryResult } from "react-query";
import ErrorMessageWithReload from "../common/ErrorMessageWithReload";
import Loading from "../common/Loading";

// type DataPresentationComponenets = {
//   ComponentProps:{FoldersTreeProps: TreeNodeType[]}
//   Component:
// }
export type DataPresenter<T> = { serverData: T[] | undefined };

type DataFetcherProps<T> = {
  queryName: string;
  queryFunc: () => UseQueryResult;
  // component: FunctionComponent<DataPresenter<T>>;
  // component: <T extends DataPresenter<T>>(props: T) => React.ReactNode;
  component: (props: PropsWithChildren<DataPresenter<T>>) => JSX.Element;
  // component: ({_data: TreeNodeType[] | undefined}) => JSX.Element;
};

// const DataFetcher = ({ queryName, queryFunc, component }: DataFetcherProps) => {
const DataFetcher = <T,>({ queryName, queryFunc, component }: DataFetcherProps<T>) => {
  const { isLoading, isError, data } = queryFunc();

  if (isLoading) {
    return <Loading loadingMessage='Fetching Data ...' />;
  }
  if (isError) {
    return <ErrorMessageWithReload message={"Unable to fetch folders data"} />;
  }
  return React.createElement(component, { serverData: data as T[] });
};

export default DataFetcher;
