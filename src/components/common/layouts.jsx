import { colorsTable } from "../../common/color/color";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const PaperLayout = ({ children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "61px 51px 64px 27px",
        display: "flex",
        flexDirection: "row",
        height: "auto",
        background: colorsTable.white,
        mb: "125px",
        border: `1px solid ${colorsTable.borderColor}`,
      }}
    >
      {children}
    </Paper>
  );
};

export const BackdropCustom = ({ open }) => {
  return (
    <Backdrop
      sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
