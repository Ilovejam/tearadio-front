const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Eğer PORT çevre değişkeni tanımlıysa onu kullan, değilse 3000 portunu kullan
const mailjetTransport = require('nodemailer-mailjet-transport');


const corsOptions = {
  origin: 'https://tearadio-front-e9ulx7qj4-ilovejams-projects.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // İzin verilen HTTP metodları
  credentials: true, // Eğer response'un `Access-Control-Allow-Credentials` header'ını true olarak ayarlamak istiyorsanız
  optionsSuccessStatus: 200 // Bazı eski tarayıcılar için
};

app.use(cors(corsOptions));


const transporter = nodemailer.createTransport(mailjetTransport({
  auth: {
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret:  process.env.MAILJET_API_KEY,

  }
}));
const post = req.body;
  posts.push(post);
  res.status(201).send(post);

const mailjet = require('node-mailjet').connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);



app.use(cors());
app.use(bodyParser.json());
let posts = []; // Bu array postlarımızı saklayacak.






// Postları getirme endpoint'i
app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);

  const emailData = {
    "Messages": [
      {
        "From": {
          "Email": "gunnerwinniaird@gmail.com", // Burada gerçek gönderici e-posta adresinizi kullanın
          "Name": "Henk De Vries"
        },
        "To": [
          {
            "Email": "omelihtolunay@gmail.com", // Gerçek alıcı e-posta adresini kullanın
            "Name": "Osman"
          }
        ],
        "Subject": "Check tearadio.co!",
        "TextPart": "You've got a new notification at tearadio.co: " + post.title,
        "HTMLPart": "<h3>You've got a new notification at tearadio.co</h3><p>" + post.content + "</p>"
      }
    ]
  };

  mailjet
    .post("send", { 'version': 'v3.1' })
    .request(emailData)
    .then((result) => {
      console.log('E-posta gönderildi:', result.body);
    })
    .catch((err) => {
      console.error('E-posta gönderilirken hata oluştu:', err.statusCode);
    });

  res.status(201).send(post);
});

// Yeni post ekleme endpoint'i
app.post('/posts', (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).send(post);
});

// Post silme endpoint'i
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  posts = posts.filter(post => post.id !== id);
  res.status(200).send('Post deleted');
});
app.get('/test', (req, res) => {
  res.send('Yeah');
});


// Vercel için özel olarak ayarlanmış bir dinleyici gerekli değildir, bu yüzden bu kodu kaldırabilirsiniz.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


module.exports = app; // Vercel'in uygulamayı tanıyabilmesi için bu satırı ekleyin
