import React, { useState, createContext } from 'react';

interface ContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const TabletDrawerContext = createContext({} as ContextProps);

type Props = {
  children: React.ReactNode;
};

const TabletDrawerProvider = ({children}: Props): JSX.Element => {
  const [ isDrawerOpen, setDrawerOpen ] = useState(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
  ): void => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(!isDrawerOpen);
  }

  return (
    <TabletDrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }} >
      {children}
    </TabletDrawerContext.Provider>
  );
}

export default TabletDrawerProvider;
