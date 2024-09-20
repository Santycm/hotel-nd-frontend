import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Register.css";
//install npm i react-hook-form

export const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <section className="background flex items-center justify-center p-24">
      <div className="flex flex-col justify-center items-center p-6 border-2 shadow-xl bg-white rounded-lg">
        <h1 className="font-bold text-2xl">Registration</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center p-8"
        >
          <input
            {...register("name", { 
              required: {
                value: true,
                message: 'Nombre requerido'
              },
              minLength: {
                value: 2,
                message: 'El nombre debe contener al menos 2 caracteres'
              },
              maxLength: 20,
             })}
            placeholder="Name"
            className="w-96 p-2 m-2 border-2"
          />
          {errors.name && 
            <span className="errorsMessage">{errors.name.message}</span>
          }
          <input
            type="email"
            {...register("email", { 
            required:{
              value: true,
              message: 'Email requerido'
             },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: 'Email invalido'
            },
            })}
            placeholder="Email"
            className="w-96 p-2 m-2 border-2"
          />
          {errors.email &&
            <span className="errorsMessage">{errors.email.message}</span>
          }
          <input
            type="date"
            {...register("date", { 
            required:{
              value: true,
              message: 'Fecha de nacimiento requerida'
            },
            validate: (value) => {
              const birthDate = new Date(value);
              const currentDate = new Date();
              const age = currentDate.getFullYear() - birthDate.getFullYear();
              if (age > 18) {
                return true;
              } else {
                return 'Debes ser mayor de 18 años';
            }
            }
           })}
            placeholder="Fecha nacimiento"
            className="w-96 p-2 m-2 border-2"
          />
           {errors.date && 
            <span className="errorsMessage">{errors.date.message}</span>
          }
          <input
            type="password"
            {...register("password", {
            required: {
              value: true,
              message: 'Contraseña requerida'
            },
            minLength: {
              value: 6,
              message: 'La contraseña debe contener al menos 6 caracteres'
            },
            })}
            placeholder="Password"
            className="w-96 p-2 m-2 border-2"
          />
          {errors.password && 
            <span className="errorsMessage">{errors.password.message}</span>
          }

          <input
            type="password"
            {...register("passwordValidate",{
            required: {
              value: true,
              message: 'Confirmar contraseña requerida'
            },
            validate: (value) => value === watch('password') || 'Las contraseñas no coinciden'
            })}
            placeholder="Confirm Password"
            className="w-96 p-2 m-2 border-2"
          />
          {errors.passwordValidate && 
            <span className="errorsMessage">{errors.passwordValidate.message}</span>
          }
          <label htmlFor="terminos">
            Acepto terminos y condiciones
            <input
              type="checkbox"
              {...register("terminos", { required: true })}
              className="p-2 m-2 border-2"
            />
          </label>
          <button className="buttonRegister" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </section>
  );
};
