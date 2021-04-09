import { Theme } from "@material-ui/core";

export enum ThemeActionTypes {
  SET_IMPORTED_THEME = 'SET_IMPORTED_THEME',
  SET_DEFAULT_THEME = 'SET_DEFAULT_THEME',
} 

export interface SetImportedTheme {
  type: ThemeActionTypes.SET_IMPORTED_THEME,
  importedTheme: Theme
}

export interface SetDefaultTheme {
  type: ThemeActionTypes.SET_DEFAULT_THEME,
  defaultTheme: Theme
}

export type ThemeActions = SetImportedTheme | SetDefaultTheme;

export const setImportedTheme = (theme: Theme): SetImportedTheme => ({
    type: ThemeActionTypes.SET_IMPORTED_THEME,
    importedTheme: theme
});

export const setDefaultTheme = (theme: Theme): SetDefaultTheme => ({
  type: ThemeActionTypes.SET_DEFAULT_THEME,
  defaultTheme: theme
})
