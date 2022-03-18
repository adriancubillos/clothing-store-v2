import React, { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-Input/form-input.component';
import { ButtonsContainer, SignUpContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/user-not-found') alert('USER NOT FOUND');
      console.log({ error });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsContainer>
          <Button type='submit'> Sign in </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
