import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/home.css";

export const ContactPage = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bblma2u",
        "template_wfwrk9m",
        form.current,
        "aw99XBOV0VN_OI3jm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          form.current.reset(); //Restablecer el form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="background-contact justify-center p-4">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-8 max-w-md rounded p-4 shadow-lg"
      >
        {isSuccess && (
          <div
            className="relative mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
            role="alert"
          >
            <strong className="font-bold">Éxito!</strong>
            <span className="block sm:inline">
              {" "}
              Su mensaje ha sido enviado con éxito!.
            </span>
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="mb-2 block text-sm font-bold text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="mb-2 block text-sm font-bold text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="mb-2 block text-sm font-bold text-white"
          >
            Contacto
          </label>
          <input
            type="email"
            name="user_contacto"
            id="user_contacto"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="mb-2 block text-sm font-bold text-white"
          >
            Institución a la que pertenece
          </label>
          <input
            type="text"
            name="institucion"
            id="institucion"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="mb-2 block text-sm font-bold text-white"
          >
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            id="asunto"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold text-white"
          >
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
