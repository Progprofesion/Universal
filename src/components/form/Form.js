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
      {errors.login ? (
        <p className="form__form-errorMessage">{errors.login.message}</p>
      ) : null}
      Почта
      <input
        className="form__input"
        {...register("email", {
          required: "Поле обязательно к заполнению",
        })}
        type="text"
        placeholder="Почта"
      />
      {errors.password ? (
        <p className="form__errorMessage">{errors.password.message}</p>
      ) : null}
      <button
        onClick={(e) => handleSubmit(e)}
        className="form__submit"
        type="submit"
      >
        Войти
      </button>
      <p>{errorAuth ? "Что-то пошло не так" : null}</p>
    </form>
  );
};

export default Form;
