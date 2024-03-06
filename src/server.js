const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser"); // Solo necesario para versiones de Express < 4.16

const app = express();
const port = 3000;

// Configuración para Express >= 4.16
app.use(express.json()); // Para parsing de application/json
app.use(express.urlencoded({ extended: true })); // Para parsing de application/x-www-form-urlencoded

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "sigdata@ucacue.edu.ec",
    pass: "Cac16196",
  },
});

// Ruta para manejar POST request
app.post("/send-email", (req, res) => {
  const {
    nombre,
    apellido,
    email,
    telefono,
    consulta,
    institucion,
    nuevaInstitucion,
  } = req.body;

  // Verificar que todos los campos están llenos y que se ha seleccionado una institución
  if (
    !nombre ||
    !apellido ||
    !email ||
    !telefono ||
    !consulta ||
    !institucion ||
    (institucion === "otra" && !nuevaInstitucion)
  ) {
    return res
      .status(400)
      .send(
        "Todos los campos son obligatorios y se debe seleccionar una institución."
      );
  }

  let institucionNombre =
    institucion === "otra" ? nuevaInstitucion : institucion;

  const mailOptions = {
    from: "sigdata@ucacue.edu.ec",
    to: email, // O cualquier otro destinatario
    subject: "Confirmación de consulta",
    text: `Hola ${nombre} ${apellido}, hemos recibido tu consulta sobre "${consulta}". Te contactaremos en breve al número ${telefono}. Institución: ${institucionNombre}.`,
    // Aquí puedes usar también HTML para estructurar mejor el mensaje
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el email");
    } else {
      console.log("Email enviado: " + info.response);
      res.status(200).send("Email enviado correctamente");
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
