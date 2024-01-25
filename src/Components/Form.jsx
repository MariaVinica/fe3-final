
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
    alert(`Thank you ${data.name}! We'll contact you via email as soon as possible`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> Full Name:</label>
          <input
            {...register("name", {
              required: "*This field is required",
              minLength: {
                value: 5,
                message: "*The name needs to have at least 5 characters",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            {...register("email", {
              required: "*This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "*Incorrect email format",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>

      {errors._form && <p>{errors._form.message}</p>}
    </div>
  );
};

export default Form;