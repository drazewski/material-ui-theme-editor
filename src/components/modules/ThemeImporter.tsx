import {Button, createStyles, makeStyles, TextareaAutosize, Theme, Typography, useTheme} from '@material-ui/core';
import React, {ChangeEvent, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setImportedTheme } from '../../actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      margin: theme.spacing(2, 0, 2, 2),
    },
    text: {
      textTransform: 'uppercase',
      padding: 10,
      fontSize: 'smaller'
    },
  })
);

interface ThemeImporterProps {
  toggleDrawer: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleSetDefaultTheme: () => void;
}

const ThemeKeys = [
  'breakpoints',
  'direction',
  'mixins',
  'overrides',
  'palette',
  'shadows',
  'typography',
  'shape',
  'transitions',
  'zIndex',
];

const ThemeImporter = ({toggleDrawer, handleSetDefaultTheme}: ThemeImporterProps) => {
  const Theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [theme, setTheme] = useState<Theme | ''>();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const checkTheme = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const pasted = e.target.value;

    if (!pasted.trim()) {
      setTheme('');

      return;
    }
    // check for JSON
    if (
      /^[\],:{}\s]*$/.test(
        pasted
          .replace(/\\["\\\/bfnrtu]/g, '@')
          .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
      )
    ) {
      const themeObj = JSON.parse(pasted);
      const objectKeys = Object.keys(themeObj);

      if (
        (objectKeys.includes('palette') || objectKeys.includes('typography')) &&
        objectKeys.find(x => !ThemeKeys.includes(x))
      )
        setTheme(themeObj);
    } else {
      setTheme('');
    }
  };

  const saveTheme = (e: React.MouseEvent<HTMLElement>) => {
    if (theme) {
      dispatch(setImportedTheme(theme))
      toggleDrawer(e);
    }
  }

  const handlePasteDefaultTheme = () => {
    setTheme(Theme);
  }

  return (
    <>
      <Typography variant='body2'>Paste and load Material-UI theme object:</Typography>
      <TextareaAutosize
        aria-label='theme loader textarea'
        placeholder='Empty'
        rowsMin={20}
        rowsMax={40}
        onChange={checkTheme}
        value={typeof theme === 'string' ? theme : JSON.stringify(theme)}
      />
      <div className={classes.buttonGroup}>
        <div>
          <Button className={classes.text} onClick={handlePasteDefaultTheme} color="primary" size="small">
            Default theme
          </Button>
        </div>
        <div>
          <Button onClick={toggleDrawer} color='default' variant='contained' className={classes.button}>
            Cancel
          </Button>
          <Button onClick={saveTheme} color='primary' variant='contained' className={classes.button} disabled={!theme}>
            Load
          </Button>
        </div>
      </div>
    </>
  );
};

export default ThemeImporter;
