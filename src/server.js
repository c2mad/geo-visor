const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3005;

// Configuración para Express >= 4.16
app.use(express.json()); // Para parsing de application/json
app.use(express.urlencoded({ extended: true })); // Para parsing de application/x-www-form-urlencoded
app.use(cors()); // Habilita CORS en todas las peticiones a la API
// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pruebaside23@gmail.com",
    pass: "ccsjqdkrfotonwye",
  },
});

// Ruta para manejar POST request
app.post("/send-email", (req, res) => {
  const {
    nombre,
    apellido,
    consultadescarga,
    email,
    telefono,
    institucion,

    nuevaInstitucion,
  } = req.body;

  // Verificar que todos los campos están llenos y que se ha seleccionado una institución
  if (
    !nombre ||
    !apellido ||
    !email ||
    !telefono ||
    !consultadescarga ||
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
    from: "pruebaside23@gmail.com",
    to: "pruebaside23@gmail.com", // O cualquier otro destinatario
    subject: "Confirmación de consulta",
    html: `
    <div style="background-color: #f0f0f0; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; font-family: Arial, sans-serif; color: #333; border-radius: 8px;">
            <h2 style="color: #4F8A10;">Hola ${nombre} ${apellido},</h2>
            <p>Hemos recibido tu consulta sobre "<strong>${consultadescarga}</strong>". Te contactaremos en breve al número <strong>${telefono}</strong> o al correo <strong>${email}</strong>.</p>
            <p><strong>Institución:</strong> ${institucionNombre}</p>
            <hr>
            <p>Gracias por contactarnos.</p>
        </div>
    </div>
    `,
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
