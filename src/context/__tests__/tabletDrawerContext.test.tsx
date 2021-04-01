import React, { useContext, Component } from 'react';
import { Route, Link, MemoryRouter } from 'react-router-dom';
import TabletDrawerProvider, { TabletDrawerContext } from '../tabletDrawerContext';
import { mount, ReactWrapper } from 'enzyme';
import { IconButton, SwipeableDrawer } from '@material-ui/core';


const TestComponent = (): JSX.Element => {
  const { isNavBarOpen, toggleNavBar } = useContext(TabletDrawerContext);

  return (
    <MemoryRouter initialEntries={['/']}>
      <IconButton
        onClick={toggleNavBar}
        data-test="icon"
      />
      <SwipeableDrawer
        open={isNavBarOpen}
        onOpen={toggleNavBar}
        onClose={toggleNavBar}
        data-test="drawer"
      >
        <Route exact path="/">
          <Link data-test="link" to={'/other'} onClick={toggleNavBar}>Change route</Link>
        </Route>
      </SwipeableDrawer>
    </MemoryRouter>
  )
}

describe('Tablet drawer', () => {
  let wrapper: ReactWrapper<unknown, Readonly<{}>, Component<{}, {}, unknown>>;

  beforeEach(() => {
    wrapper = mount(
      <TabletDrawerProvider>
        <TestComponent />
      </TabletDrawerProvider>
    );
  });


  it('tests if the tablet drawer appears after click on button', () => {
    wrapper.find('button[data-test="icon"]').simulate('click');
    expect(wrapper.find('[data-test="drawer"]').first().props()['open']).toBe(true);
  });

  it('tests if the tablet drawer hides after click on backdrop', () => {
    wrapper.find('button[data-test="icon"]').simulate('click');
    wrapper.find('.MuiBackdrop-root').simulate('click');
    expect(wrapper.find('[data-test="drawer"]').first().props()['open']).toBe(false);
  });

  it('tests if the tablet drawer hides after click the link nav item', () => {
    wrapper.find('button[data-test="icon"]').simulate('click');
    wrapper.find('a[data-test="link"]').simulate('click');
    expect(wrapper.find('[data-test="drawer"]').first().props()['open']).toBe(false);
  });

})
