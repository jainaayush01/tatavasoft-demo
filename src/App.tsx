import { ThemeProvider, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/styles.css";
import MainNavigation from "./component/MainNavigation";
import { theme } from "./utils/theme";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" color="primary">
                React Application
            </Typography>
            <React.Suspense fallback={<></>}>
                <BrowserRouter>
                    <MainNavigation />
                </BrowserRouter>
            </React.Suspense>
        </ThemeProvider>
    );
};
export default App;
