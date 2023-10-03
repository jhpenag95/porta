const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { usuario, correo, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587, // Cambia el puerto a 587
    secure: false, // Habilita el uso de TLS
    auth: {
      user: "pruebasWebHj@outlook.com",
      pass: "mcf2023**",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const mailOptions = {
    from: usuario,
    to: "helver248@hotmail.es",
    subject: `Mensaje de ${usuario}`,
    text: mensaje,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado.");
      res.status(200).jsonp(req.body);
    }
  });
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
