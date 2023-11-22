import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/users/userSlice';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <div>
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="example@gmail.com"
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label>
          Password
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password at least 7 characters"
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <button type="submit">Sing in</button>
      </form>
    </div>
  );
};

export default LoginPage;
