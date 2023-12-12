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
  origin: "http://localhost:3001", // Reemplaza con la URL de tu aplicación React en producción
  methods: "POST",
};

// Configura el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pruebaside23@gmail.com',
    pass: 'ciitt-server23',
  },
});


// Ruta para enviar correos electrónicos
app.post("/send-email", async (req, res) => {
  const { nombre, email, institucion, asunto, mensaje } = req.body;

  if (!nombre || !email || !asunto || !mensaje) {
    return res.status(400).send("Todos los campos son obligatorios.");
  }

  // Resto del código...

  // Configura el correo electrónico
  const mailOptions = {
    from: "pruebaside23@gmail.com",
    to: "bcsebas1998@gmail.com", // Coloca la dirección del destinatario
    subject: asunto,
    text: `Nombre: ${nombre}\nCorreo Electrónico: ${email}\nInstitución: ${institucion}\n\nMensaje: ${mensaje}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info);

    res.status(200).send("Correo electrónico enviado con éxito");
  } catch (error) {
    console.error("Error al enviar el correo electrónico", error);

    // Manejo de errores específicos
    if (error.code === "EAUTH") {
      res
        .status(401)
        .send("Error de autenticación. Verifica las credenciales SMTP.");
    } else {
      res.status(500).send("Error al enviar el correo electrónico");
    }
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor de correo escuchando en http://localhost:${port}`);
});
