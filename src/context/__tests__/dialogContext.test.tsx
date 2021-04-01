import React, { useContext } from 'react';
import DialogProvider, { DialogContext } from '../dialogContext';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

const TestDialogContent = (): JSX.Element => <span>Dialog content</span>;

describe('Showing dialog with content', () => {
  it('tests if the dialog appears with passed content', () => {
    const TestComponent = (): JSX.Element => {
      const { setDialog } = useContext(DialogContext);
      const handleShowLogoutDialog = (): void => setDialog(<TestDialogContent />)
    
      return <div data-test="dialog-handler" onClick={handleShowLogoutDialog} />
    }
    
    const wrapper = mount(
      <MemoryRouter>
        <DialogProvider>
          <TestComponent />
        </DialogProvider>
      </MemoryRouter>
    );

    wrapper.find('[data-test="dialog-handler"]').simulate('click');
    expect(wrapper.find('[aria-labelledby="dialog"]').exists()).toEqual(true);
    expect(wrapper.find('span').text()).toEqual('Dialog content')
  });

  it('tests if the dialogue will not appear if there is no content', () => {
    const TestComponent = (): JSX.Element => {
      const { setDialog } = useContext(DialogContext);
      const handleShowLogoutDialog = (): void => setDialog()
    
      return <div data-test="dialog-handler" onClick={handleShowLogoutDialog} />
    }
    
    const wrapper = mount(
      <MemoryRouter>
        <DialogProvider>
          <TestComponent />
        </DialogProvider>
      </MemoryRouter>
    );

    wrapper.find('[data-test="dialog-handler"]').simulate('click');
    expect(wrapper.find('[aria-labelledby="dialog"]').exists()).toEqual(false);
  });
})
