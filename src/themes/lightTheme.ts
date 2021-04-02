import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 64
      }
    }
  },
});
