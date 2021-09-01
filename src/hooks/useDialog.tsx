/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Dialog } from '@material-ui/core';

export interface DialogContextProps {
  isDialog: boolean;
  setDialog: (content?: JSX.Element) => void;
  dialogComponent: JSX.Element | null
}

export const useDialog = (): DialogContextProps => {
  const [isDialog, setIsDialog] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<JSX.Element | null>();
  const [dialogComponent, setDialogComponent] = useState<JSX.Element | null>(null);

  const hideDialog = () => {
    setIsDialog(!isDialog);
  }

  const setDialog = (content?: JSX.Element): void => {
    if (!content) {
      setIsDialog(false);
      setDialogContent(null);
    } else {
      setIsDialog(true);
      setDialogContent(content);
    }
  };

  useEffect(() => {
    setDialogComponent(
      <Dialog open={isDialog} onClose={hideDialog}>
        {dialogContent}
      </Dialog>
    );
  }, [dialogContent]);

  return { isDialog, setDialog, dialogComponent };
};

export default useDialog;
