import { Box, Typography } from "@mui/material";
import utils from "../utils";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

export type FileProps = { name: string; size: number | undefined };
export const FileNode: React.FC<FileProps> = ({ name, size }) => {
  console.log({ name, size });
  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        alignContent: "flex-start",
        alignItems: "center",
      }}>
      <DescriptionTwoToneIcon />
      <Typography
        variant='body1'
        noWrap
        style={{ padding: "5px 10px 5px 10px" }}>
        {utils.format.fileWithoutExtension(name)}
      </Typography>
      <Typography variant='subtitle2' noWrap>
        {utils.format.formatBytes(Number(size))}
      </Typography>
    </Box>
  );
};

export default FileNode;
