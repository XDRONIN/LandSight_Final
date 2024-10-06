const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
const app = express();

//Twilio credentials
const accountSid = 'AC7dc844f9f544f0fb90c3b81e0e1835d9'; //Account SID
const authToken = 'b3ff473faae08b33ab30f2fbb3c69562'; //Auth Token
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

app.post('/send-sms', async (req, res) => {
    const { to, message } = req.body;
    
    try {
        await client.messages.create({
            body: message,
            to: to,
            from: '+15204472656' // Twilio number
        });
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
