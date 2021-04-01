import React, { useState, createContext } from 'react';

interface ContextProps {
  isNavBarOpen: boolean;
  toggleNavBar: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const TabletDrawerContext = createContext({} as ContextProps);

type Props = {
  children: React.ReactNode;
};

const TabletDrawerProvider = ({children}: Props): JSX.Element => {
  const [ isNavBarOpen, setNavBarOpen ] = useState(false);

  const toggleNavBar = (
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

    setNavBarOpen(!isNavBarOpen);
  }

  return (
    <TabletDrawerContext.Provider value={{ isNavBarOpen, toggleNavBar }} >
      {children}
    </TabletDrawerContext.Provider>
  );
}

export default TabletDrawerProvider;
