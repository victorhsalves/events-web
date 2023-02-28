import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../../shared/Typography';
import AppForm from '../../shared/views/AppForm';
import { email, required } from '../../shared/form/validation';
import RFTextField from '../../shared/form/RFTextField';
import FormButton from '../../shared/form/FormButton';
import FormFeedback from '../../shared/form/FormFeedback';
import withRoot from '../../modules/withRoot';

function SignUp() {
  const [sent, setSent] = React.useState(false);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/sign-in/" underline="always">
              Já possui cadastro?
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
              {/* <Grid container spacing={2}>
                <Grid item xs={12} sm={12}> */}
              <Field
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="given-name"
                fullWidth
                label="Nome Completo"
                name="name"
                required
              />
              {/* </Grid>
              </Grid> */}
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    component={RFTextField}
                    disabled={submitting || sent}
                    required
                    name="password"
                    autoComplete="new-password"
                    label="Senha"
                    type="password"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    component={RFTextField}
                    disabled={submitting || sent}
                    required
                    name="password"
                    autoComplete="new-password"
                    label="Confirme a Senha"
                    type="password"
                    margin="normal"
                  />
                </Grid>
              </Grid>
                  <Field
                    fullWidth
                    component={RFTextField}
                    disabled={submitting || sent}
                    required
                    name="address"
                    autoComplete="address"
                    label="Endereço"
                    margin="normal"
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        component={RFTextField}
                        disabled={submitting || sent}
                        required
                        name="zip_code"
                        autoComplete="zip-code"
                        label="CEP"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        fullWidth
                        component={RFTextField}
                        disabled={submitting || sent}
                        required
                        name="district"
                        autoComplete="district"
                        label="Bairro"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                      <Field
                        fullWidth
                        component={RFTextField}
                        disabled={submitting || sent}
                        required
                        name="city"
                        autoComplete="city"
                        label="Cidade"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Field
                        fullWidth
                        component={RFTextField}
                        disabled={submitting || sent}
                        required
                        name="state"
                        autoComplete="state"
                        label="UF"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                      <Field
                        fullWidth
                        component={RFTextField}
                        disabled={submitting || sent}
                        required
                        name="country"
                        autoComplete="country"
                        label="País"
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
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
    </React.Fragment>
  );
}

export default withRoot(SignUp);