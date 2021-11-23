import { useState } from "react";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

export type FolderProps = {
  name: string;
  children?: React.ReactNode | undefined;
};

export const FolderNode = ({ name, children }: FolderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onFolderNodeClick = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // flexDirection: { xs: "row", md: "row" },
          alignItems: "center",
          alignContent: "center",

          // overflow: "hidden",
          // borderRadius: "2",
          // boxShadow: 1,
          cursor: "pointer",
          // fontWeight: "bold",
          "&:hover": {
            // backgroundColor: "primary.low",
            // color: "primary.main",
            opacity: [0.7, 0.7, 0.7],
          },
        }}
        // flexDirection={"row"}
        // style={{ cursor: "pointer" }}
        onClick={onFolderNodeClick}>
        {isCollapsed ? (
          <>
            <KeyboardArrowRightTwoToneIcon />
            <FolderTwoToneIcon />
          </>
        ) : (
          <>
            <KeyboardArrowDownTwoToneIcon />
            <FolderOpenTwoToneIcon />
          </>
        )}
        <Typography
          variant='body1'
          fontWeight='500'
          style={{ padding: "5px 10px 5px 10px" }}>
          {name}
        </Typography>
      </Box>
      <Box>
        {!isCollapsed ? (
          <Box
            sx={{
              marginLeft: "60px",
              height: isCollapsed ? 0 : "auto",
              boxShadow: "1",
            }}>
            {children}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default FolderNode;
