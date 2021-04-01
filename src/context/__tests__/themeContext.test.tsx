import React, { useContext, Component } from 'react';
import ThemeProvider, { ThemeContext } from '../themeContext';
import { mount, ReactWrapper } from 'enzyme';
import SwitchButton from '../../shared/components/switchButton';
import { useTheme } from '@material-ui/core/styles';
import { Theme } from '../../shared/enums/Theme';

const TestComponent = (): JSX.Element => {
  const { themeName, handleSetThemeName } = useContext(ThemeContext);
  const theme = useTheme();
  const handleThemeChange = (): void => {
    themeName === 'darkTheme' ? handleSetThemeName(Theme.LightTheme) : handleSetThemeName(Theme.DarkTheme)
  }

  return (
    <div data-test="theme-switch" onClick={handleThemeChange} >
      <span data-test="palette-type">{theme.palette.type}</span>
      <SwitchButton checked={themeName === 'darkTheme'} />
    </div>
  )
}

describe('Theme change with theme context', () => {
  let wrapper: ReactWrapper<unknown, Readonly<{}>, Component<{}, {}, unknown>>;

  beforeEach(() => {
    wrapper = mount(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
  });

  it('tests if the switch button changes its state according to the theme change', () => {
    expect(wrapper.find('input[type="checkbox"]').props()['checked']).toBe(false);
    wrapper.find('[data-test="theme-switch"]').simulate('click');
    expect(wrapper.find('input[type="checkbox"]').props()['checked']).toBe(true);
    wrapper.find('[data-test="theme-switch"]').simulate('click');
    expect(wrapper.find('input[type="checkbox"]').props()['checked']).toBe(false);
  });

  it('tests if palette type changes', () => {
    expect(wrapper.find('[data-test="palette-type"]').text()).toEqual('light');
    wrapper.find('[data-test="theme-switch"]').simulate('click');
    expect(wrapper.find('[data-test="palette-type"]').text()).toEqual('dark');
  });
})
