export type TreeNodeType = {
  type: string;
  name: string;
  size?: number;
  children?: TreeNodeType[];
};

export type FilesDataType = {
  count: number;
  size: number;
};
