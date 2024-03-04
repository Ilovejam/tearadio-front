const express = require('express');
const bodyParser = require('body-parser');
const { Vonage } = require('@vonage/server-sdk');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
});

app.use(cors());
app.use(bodyParser.json());

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
