import React, { useState, createContext } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { getThemeByName } from '../themes/themeSelector';
import { Theme } from '../themes/Theme';

interface ContextProps {
  themeName: string;
  handleSetThemeName: (name: Theme) => void;
}

const localTheme = localStorage.getItem('appTheme');

export const ThemeContext = createContext({} as ContextProps);

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({children}: Props): JSX.Element => {
  const [themeName, setThemeName] = useState(localTheme || 'lightTheme');
  const theme = getThemeByName(themeName);

  const handleSetThemeName = (name: Theme): void => {
      let theme;
      name === Theme.LightTheme ? theme = 'lightTheme' : theme = 'darkTheme';
      localStorage.setItem('appTheme', theme);
      setThemeName(theme);
  }

  return (
    <ThemeContext.Provider value={{ themeName, handleSetThemeName }} >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
