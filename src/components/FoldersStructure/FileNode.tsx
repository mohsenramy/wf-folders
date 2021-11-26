import { Box, Typography } from "@mui/material";
import utils from "../../utils";
import DescriptionIcon from "@mui/icons-material/Description";

export type FileNodeProps = { fileName: string; size: number | undefined };
export const FileNode = ({ fileName, size }: FileNodeProps) => {
  return (
    <Box
      sx={{
        flexDirection: "row",
        display: "flex",
        alignContent: "flex-start",
        alignItems: "center",
      }}>
      <DescriptionIcon color='action' />
      <Typography variant='body1' style={{ margin: "0.3rem 0.6rem 0.3rem 0.6rem" }}>
        {utils.format.fileWithoutExtension(fileName)}
      </Typography>
      <Typography variant='subtitle2'>{utils.format.formatBytes(Number(size ?? 0))}</Typography>
    </Box>
  );
};

export default FileNode;
