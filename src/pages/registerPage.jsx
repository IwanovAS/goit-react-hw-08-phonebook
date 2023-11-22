import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/users/userSlice';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <div>
      <h2>User registeration</h2>
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
          Name
          <input
            {...register('name', { required: true })}
            type="text"
            placeholder="Kurt Cobain"
          />
          {errors.name && <span>This field is required</span>}
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
        <button type="submit">Sing up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
