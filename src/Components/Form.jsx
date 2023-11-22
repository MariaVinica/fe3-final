
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Gracias ${data.name}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            {...register("name", {
              required: "Este campo es requerido",
              minLength: {
                value: 5,
                message: "El nombre debe tener al menos 5 caracteres",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            {...register("email", {
              required: "Este campo es requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de correo electrónico incorrecto",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      {errors._form && <p>{errors._form.message}</p>}
    </div>
  );
};

export default Form;