import React from "react";
import { BrowserRouter } from "react-router-dom"
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { version } from 'react';


const theme = createTheme({
    status: {
      danger: 'red',
    },
  });

export default () => {
    return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <div>
                <div>React: {version}</div>
                <Header/>
                <MarketingApp/>
            </div>
        </ThemeProvider>
    </BrowserRouter>)
    
}