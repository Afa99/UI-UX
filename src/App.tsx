import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Showcase from "./pages/Showcase/Showcase";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
