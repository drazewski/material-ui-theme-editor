import { createMuiTheme } from '@material-ui/core';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
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
