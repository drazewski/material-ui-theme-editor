import { ThemeActionTypes, ThemeActions } from "./actions"

export interface InitialState {
  importedTheme: Record<'string', unknown> | {};
  defaultTheme: Record<'string', unknown> | {};
  initialState: boolean;
}

const initialState: InitialState = {
  importedTheme: {},
  defaultTheme: {},
  initialState: true,
}

export default function appReducer(state = initialState, action: ThemeActions) {
  switch (action.type) {
    case ThemeActionTypes.SET_IMPORTED_THEME:
      return {
        ...state,
        importedTheme: action.importedTheme,
        initialState: false,
      }
    case ThemeActionTypes.SET_DEFAULT_THEME:
      return {
        ...state,
        defaultTheme: action.defaultTheme,
        initialState: false,
      }
    default:
      return state
  }
}