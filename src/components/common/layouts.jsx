import { colorsTable } from "../../common/color/color";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid } from "@mui/x-data-grid";

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

export const BoxTableLayout = ({ children }) => {
  return (
    <Box
      component={"div"}
      sx={{
        height: 737,
        mb: "40px",
        width: "100%",
        "& .super-app-theme--header2": {
          backgroundColor: colorsTable.colorCellHeader,
          pl: "39px",
        },
        "& .super-app-theme--header": {
          backgroundColor: colorsTable.colorCellHeader,
        },
      }}
    >
      {children}
    </Box>
  );
};

export const DataGridLayout = ({ data, columns, quickSearchToolbar }) => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      disableColumnMenu
      initialState={{
        pagination: { paginationModel: { pageSize: 10 } },
      }}
      pageSizeOptions={[5, 10, 25]}
      slots={{ toolbar: quickSearchToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      style={{
        background: colorsTable.colorFondo,
      }}
    />
  );
};
