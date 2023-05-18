import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import { SnackbarProvider, useSnackbar, enqueueSnackbar } from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

let response = {
  id: '365',
  type: 'message',
  read: false,
  content:
    'Hello! What price point would you be comfortable with paying? If a good price is offered, we can deal.',
  author: 'Emilia Gates',
  sentAt: '2023-01-12T06:11:49.43002+00:00',
};

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState('');

  const isMobile = useMediaQuery('(max-width:767px)');

  //   let count = 0;

  const handleClick = (e: any) => {
    // const { enqueueSnackbar } = useSnackbar();
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color='info' size='small' onClick={handleClose}>
        REPLY
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <SnackbarProvider maxSnack={3}>
      <main>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <form onSubmit={handleClick}>
            <TextField
              value={messages}
              type='text'
              placeholder='Start typing your message...'
              sx={{ mx: 20, mt: 10, width: '70%' }}
              onChange={(e) => {
                setMessages(e.target.value);
              }}
            />
            <div>
              <Button variant='outlined' type='submit' sx={{ mx: 20, mt: 5 }}>
                Submit
              </Button>
            </div>
          </form>

          <Snackbar
            open={open}
            autoHideDuration={8000}
            onClose={handleClose}
            anchorOrigin={{
              vertical: isMobile ? 'top' : 'bottom',
              horizontal: isMobile ? 'center' : 'right',
            }}
          >
            <Alert
              onClose={handleClose}
              severity='info'
              variant='outlined'
              action={action}
              iconMapping={{
                info: (
                  <Avatar
                    alt='Profile Picture'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                  />
                ),
              }}
              sx={{ width: '400px', background: '#fff' }}
            >
              <p>
                <b>{response.author}</b>
              </p>
              <p>{messages}</p>
            </Alert>
          </Snackbar>
        </Stack>
      </main>
    </SnackbarProvider>
  );
}
