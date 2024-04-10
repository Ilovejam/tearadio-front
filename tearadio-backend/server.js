const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Eğer PORT çevre değişkeni tanımlıysa onu kullan, değilse 3000 portunu kullan

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

app.use(cors());
app.use(bodyParser.json());
let posts = []; // Bu array postlarımızı saklayacak.

// SMS gönderme işlemi için Promise tabanlı bir fonksiyon
function sendSms(from, to, text) {
  return new Promise((resolve, reject) => {
    vonage.sms.send({ from, to, text }, (err, responseData) => {
      if (err) {
        reject(err);
      } else {
        if (responseData.messages[0].status === "0") {
          resolve(responseData);
        } else {
          reject(new Error(`Message failed with error: ${responseData.messages[0]['error-text']}`));
        }
      }
    });
  });
}

app.post('/send-sms', async (req, res) => {
  const { phone, name, notes } = req.body;
  const from = "Vonage APIs";
  const text = `Hello ${name}, ${notes}`;

  try {
    await sendSms(from, phone, text); // SMS gönderme işlemini bekler
    console.log("Message sent successfully.");
    res.send({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('SMS gönderimi sırasında hata oluştu:', error);
    res.status(500).send({ success: false, message: 'Failed to send SMS', error: error.message });
  }
});


// Postları getirme endpoint'i
app.get('/posts', (req, res) => {
  res.status(200).json(posts);
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


// Vercel için özel olarak ayarlanmış bir dinleyici gerekli değildir, bu yüzden bu kodu kaldırabilirsiniz.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


module.exports = app; // Vercel'in uygulamayı tanıyabilmesi için bu satırı ekleyin
