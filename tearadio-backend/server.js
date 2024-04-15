const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const mailjetTransport = require('nodemailer-mailjet-transport');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://tearadio-front-e9ulx7qj4-ilovejams-projects.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let posts = [];
let nextId = 1; // Otomatik artan bir id değeri için bir sayaç

// Yeni post ekleme ve e-posta gönderme endpoint'i
app.post('/posts', (req, res) => {
  const post = { id: nextId.toString(), ...req.body }; // id değeri ekleniyor
  nextId++; // Her post eklendiğinde id artırılıyor
  posts.push(post);

  const transporter = nodemailer.createTransport(mailjetTransport({
    auth: {
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET
    }
  }));

  const emailData = {
    Messages: [{
      From: {
        Email: "gunnerwinniaird@gmail.com",
        Name: "Henk De Vries"
      },
      To: [{
        Email: "omelihtolunay@gmail.com",
        Name: "Osman"
      }],
      Subject: "Check tearadio.co!",
      TextPart: "You've got a new notification at tearadio.co: " + post.title,
      HTMLPart: "<h3>You've got a new notification at tearadio.co</h3><p>" + post.content + "</p>"
    }]
  };

  transporter.sendMail(emailData, (err, info) => {
    if (err) {
      console.error('E-posta gönderilirken hata oluştu:', err);
      return res.status(500).send({ message: 'E-posta gönderilirken hata oluştu' });
    } else {
      console.log('E-posta başarıyla gönderildi:', info);
    }
  });

  res.status(201).send(post);
});

// Post silme endpoint'i
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id !== id); // `!==` operatörü kullanılarak düzeltme yapıldı
  res.status(200).send({ message: 'Post deleted', postId: id });
});

// Basit bir test endpoint'i
app.get('/test', (req, res) => {
  res.send('Yeah');
});

// Postları getirme endpoint'i
app.get('/posts', (req, res) => {
  res.status(200).send(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
