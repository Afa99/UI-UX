import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography.ts";

const theme = createTheme({
  palette,
  typography,
  shape: { borderRadius: 12 },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 }
      }
    }
  }
});

export default theme;
