import { useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

export type FolderProps = {
  folderName: string;
  children?: React.ReactNode | undefined;
};

export const FolderNode = ({ folderName, children }: FolderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onFolderNodeClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <Box
        data-testid='FolderNodeBox'
        sx={{
          display: "flex",
          // flexDirection: { xs: "row", md: "row" },
          alignItems: "center",
          alignContent: "center",

          // overflow: "hidden",
          // borderRadius: "2",
          // boxShadow: 1,
          cursor: "pointer",

          "&:hover": {
            // backgroundColor: "primary.low",
            // color: "primary.main",
            opacity: [1.0, 1.0, 0.7],
          },
        }}
        // flexDirection={"row"}
        // style={{ cursor: "pointer" }}
        onClick={onFolderNodeClick}>
        {isCollapsed ? (
          <>
            <KeyboardArrowRightIcon color='action' />
            <FolderIcon color='action' />
          </>
        ) : (
          <>
            <KeyboardArrowDownIcon color='action' />
            <FolderOpenIcon color='action' />
          </>
        )}
        <Typography
          variant='body1'
          fontWeight='500'
          style={{ margin: "0.3rem 0.6rem 0.3rem 0.6rem" }}>
          {folderName}
        </Typography>
      </Box>
      <Box>
        {!isCollapsed ? (
          <Box
            sx={{
              marginLeft: "3.75rem",
              height: isCollapsed ? 0 : "auto",
              // boxShadow: "1",
            }}>
            {children}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default FolderNode;
