
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "justmega12@gmail.com",
    pass: "scuadraalfa",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone; 
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "justmega12@gmail.com",
    subject: "Informazioni contattaci",
    html: `<p>Nome: ${name}</p>
           <p>Email: ${email}</p>
           <p>Messaggio: ${message}</p>
           <p>Telefono: ${phone}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});