import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import { useCookies } from "react-cookie";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../../shared/Typography';
import AppForm from '../../shared/views/AppForm';
import { email, required } from '../../shared/form/validation';
import RFTextField from '../../shared/form/RFTextField';
import FormButton from '../../shared/form/FormButton';
import FormFeedback from '../../shared/form/FormFeedback';
import withRoot from '../../modules/withRoot';
import api from '../../../providers/api';
import jwt from 'jwt-decode';
import { UserContext, UserType } from '../../../context/UserContext';

function SignIn() {
  const [sent, setSent] = React.useState(false);
  const {user, signIn} = React.useContext(UserContext);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  async function handleSubmit(values : {email: string, password: string}) {
    const result = await api.post('/signin', {
      email: values.email,
      password: values.password
    }).then(data => {
      signIn(data.data.token);
    }).catch((error) => {
      console.log('Error: ', error)
    })
  }

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Não possui cadastro? '}
            <Link
              href="/sign-up/"
              align="center"
              underline="always"
            >
              Registre-se aqui
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Senha"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="/sign-up/">
            Esqueceu sua senha?
          </Link>
        </Typography>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignIn);