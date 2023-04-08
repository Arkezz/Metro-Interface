import { render, fireEvent } from '@testing-library/svelte';
import Login from './Login.svelte';
import { describe, it, expect, jest } from 'vitest';

describe('Login component', () => {
  it('should show error message if user is already logged in', async () => {
    const { getByText } = render(Login, {
      data: { session: 'test-session' },
      store: {
        isLoggedIn: true,
      },
    });

    const loginButton = getByText('Login');
    await fireEvent.click(loginButton);

    const errorMessage = getByText('You are already logged in!');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should call handleLogin function with form data when login button is clicked', async () => {
    const handleLoginMock = jest.fn();

    const { getByLabelText, getByText } = render(Login, {
      data: { session: 'test-session' },
      store: {
        isLoggedIn: false,
      },
      enhance: handleLoginMock,
    });

    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const loginButton = getByText('Login');

    await fireEvent.input(emailInput, {
      target: { value: 'test@example.com' },
    });
    await fireEvent.input(passwordInput, {
      target: { value: 'test-password' },
    });
    await fireEvent.click(loginButton);

    expect(handleLoginMock).toHaveBeenCalledWith({
      form: expect.any(Object),
      data: expect.any(Object),
      action: expect.any(Function),
      cancel: expect.any(Function),
    });
  });
});
