import React from 'react';

const Form = ({ handleSubmit, setRequest }) => {
  //Aqui deberan implementar el form completo con sus validacione
  return (
    <div class="form-container">
      <form class="contact-form" onSubmit={handleSubmit}>
        <label class="form-label">Ingrese su nombre</label>
        <input
          class="form-input"
          type="text"
          onBlur={(e) =>
            setRequest((state) => ({ ...state, name: e.target.value }))
          }
        />
        <label class="form-label">Ingrese su correo electrónico</label>
        <input
          class="form-input"
          type="text"
          onBlur={(e) =>
            setRequest((state) => ({ ...state, email: e.target.value }))
          }
        />
        <button class="form-button">enviar</button>
      </form>
    </div>
  );
};

export default Form;
