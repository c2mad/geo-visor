const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pruebaside23@gmail.com",
    pass: "ccsjqdkrfotonwye",
  },
});

app.post("/send-email", async (req, res) => {
  const { nombre, apellido, email, institucion, sectorpertenece } =
    req.body;

  if (
    !nombre ||
    !apellido ||
    !email ||
    !institucion ||
    //!motivodescarga ||
    !sectorpertenece
  ) {
    return res
      .status(400)
      .send({ message: "Todos los campos son obligatorios.", success: false });
  }

  const mailOptions = {
    from: "pruebaside23@gmail.com",
    to: "pruebaside23@gmail.com",
    subject: "Asunto del correo", // Define un asunto para el correo
    html: `
      <div>
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Correo electrónico: ${email}</p>
        <p>Institución: ${institucion}</p>
        <p>Sector que pertenece: ${sectorpertenece}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .send({ message: "Correo electrónico enviado con éxito", success: true });
  } catch (error) {
    console.error("Error al enviar el correo", error);
    res
      .status(500)
      .send({
        message: "Error al enviar el correo electrónico",
        success: false,
        error: error.message,
      });
  }
});

app.listen(port, () => {
  console.log(`Servidor de correo escuchando en http://localhost:${port}`);
});
