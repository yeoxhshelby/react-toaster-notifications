import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import { SnackbarProvider, useSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Response {
  id: string;
  type: string;
  read: boolean;
  content: string;
  author: string;
  sentAt: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const response: Response = {
  id: '365',
  type: 'message',
  read: false,
  content:
    'Hello! What price point would you be comfortable with paying? If a good price is offered, we can deal.',
  author: 'Emilia Gates',
  sentAt: '2023-01-12T06:11:49.43002+00:00',
};

export default function CustomizedSnackbars() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:767px)');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    setOpen(true);
    const snackbar = enqueueSnackbar('', {
      anchorOrigin: {
        vertical: isMobile ? 'top' : 'bottom',
        horizontal: 'right',
      },
      autoHideDuration: 10000,
      variant: 'info',
      action: (key) => (
        <React.Fragment>
          <Button
            color='info'
            size='small'
            onClick={() => {
              closeSnackbar(key);
              setOpen(false);
            }}
          >
            REPLY
          </Button>
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={() => {
              closeSnackbar(key);
              setOpen(false);
            }}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        </React.Fragment>
      ),
      content: (key, message) => (
        <Alert
          onClose={() => {
            closeSnackbar(key);
            setOpen(false);
          }}
          severity='info'
          iconMapping={{
            info: (
              <Avatar
                alt='Profile Picture'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
              />
            ),
          }}
          sx={{ width: '400px' }}
        >
          <p>
            <b>{response.author}</b>
          </p>
          <p>{response.content}</p>
        </Alert>
      ),
    });
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <main>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Button variant='outlined' onClick={handleClick}>
            Show Toaster for Chat
          </Button>
        </Stack>
      </main>
    </SnackbarProvider>
  );
}
