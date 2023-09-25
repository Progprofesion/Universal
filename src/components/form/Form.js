import { useState } from "react";
import { useForm } from "react-hook-form";

import "./form.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const [errorAuth, setErrorAuth] = useState(false);

  const onSubmit = (e) => {
    if (e) {
      alert(`Отправлено
____________________
Имя: ${e.name}
Почта: ${e.email} 
          `);
      reset();
    } else {
      setErrorAuth(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" action="">
      Имя
      <input
        className="form__input"
        {...register("name", {
          required: "Поле обязательно к заполнению",
        })}
        type="text"
        placeholder="Имя"
      />
      {errors.name ? (
        <p className="form__nameErrorMessage">{errors.name.message}</p>
      ) : null}
      Почта
      <input
        className="form__input"
        {...register("email", {
          required: "Поле обязательно к заполнению",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неправильный адрес почты",
          },
        })}
        type="text"
        placeholder="Почта"
      />
      {errors.email ? (
        <p className="form__emailErrorMessage">{errors.email.message}</p>
      ) : null}
      <button
        onClick={(e) => handleSubmit(e)}
        className="form__submit"
        type="submit"
      >
        Отправить
      </button>
      <p>{errorAuth ? "Что-то пошло не так" : null}</p>
    </form>
  );
};

export default Form;
