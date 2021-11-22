import { Box, Typography } from "@mui/material";
import helpers from "../utils";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

export type FileProps = { name: string; size: number | undefined };
export const FileNode: React.FC<FileProps> = ({ name, size }) => {
  console.log({ name, size });
  return (
    <Box sx={{ flexDirection: "row", display: "flex", alignContent: "flex-start", alignItems: "center" }}>
      <DescriptionTwoToneIcon />
      <Typography variant='subtitle1' noWrap>
        {name}
      </Typography>
      <Typography variant='subtitle2' noWrap>
        {helpers.format.formatBytes(Number(size))}
      </Typography>
    </Box>
  );
};

export default FileNode;
