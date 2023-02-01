'use client';

import React, { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yup
  .object({ email: yup.string().email().required(), password: yup.string().required() })
  .required();

type LoginInput = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInput>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginInput> = useCallback((formData) => {
    // TODO: api call
    alert(JSON.stringify(formData));
  }, []);

  return (
    <div>
      <form
        className="w-96 bg-gray-100 mx-auto mt-16 p-4 flex flex-col items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-2xl font-bold">Temp Login</h3>
        <fieldset className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="이메일"
            className="py-[14px] px-[13px] border rounded"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호"
            className="py-[14px] px-[13px] border rounded"
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </fieldset>

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
