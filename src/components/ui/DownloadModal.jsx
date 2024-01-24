import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Necesario para que react-modal funcione correctamente

const DownloadModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Define los campos del formulario aquí
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para guardar y descargar el archivo
    // Por ejemplo, puedes enviar los datos del formulario al servidor y obtener el archivo en respuesta
    // Luego, puedes cerrar el modal
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Descargar Archivo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring"
          >
            Descargar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default DownloadModal;
