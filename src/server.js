//import logo from "./assets/images/logo-ucacue-geoportal.png";
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importa el módulo cors

const app = express();
const port = 3001;

app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

const corsOptions = {
  origin: "*",
  methods: "POST",
};

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pruebaside23@gmail.com",
    pass: "ccsjqdkrfotonwye",
  },
});

// Ruta para enviar correos electrónicos
app.post("/send-email", async (req, res) => {
  const { nombre, email, institucion, asunto, mensaje } = req.body;

  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).send("Todos los campos son obligatorios.");
  }


  // Configura el correo electrónico
  const mailOptions = {
    from: "pruebaside23@gmail.com",
    to: "pruebaside23@gmail.com", // Coloca la dirección del destinatario
    subject: asunto,
    html: `
    <div className="p-4 bg-gray-100">
      <img src={logo}/>
      <p className="text-lg font-bold mb-2">Nombre: ${nombre}</p>
      <p className="mb-2">Correo electrónico: ${email}</p>
      <p className="mb-2">Institución: ${institucion}</p>
      
      <div className="mt-4">
        <p className="font-semibold">Mensaje:</p>
        <p>${mensaje}</p>
      </div>
    </div>
  `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info);

    // Modifica la respuesta para incluir información sobre el éxito del envío
    res.status(200).send({
      message: "Correo electrónico enviado con éxito",
      success: true,
    });
  } catch (error) {
    console.error("Error al enviar el correo", error);

    // Modifica la respuesta para incluir información sobre el error
    res.status(500).send({
      message: "Error al enviar el correo electrónico",
      success: false,
    });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor de correo escuchando en http://localhost:${port}`);
});
