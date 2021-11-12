import React, { createContext } from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

export const TemplateContext = createContext(null);
const TemplateProvider = ({ children }) => {

    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    height: "92vh",
                    top: "10vh",
                    left: "4.1vw",
                    borderRadius: "7px",
                    width: "30vw",
                },
            },
            MuiBackdrop: {
                root: {
                    backgroundColor: "unset",
                }
            }
        }
    })



    return (
        <>
            <TemplateContext.Provider>
                <ThemeProvider
                    theme={theme}
                >
                    {children}
                </ThemeProvider>
            </TemplateContext.Provider>
        </>
    )
}

export default TemplateProvider
