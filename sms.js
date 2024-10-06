import express from "express";
import twilio from "twilio";
import cors from "cors";
const app = express();

//Twilio credentials
const accountSid = "AC035656119bb814c070996cb79acdab20"; //Account SID
const authToken = "d3ed0f55ff27492068e22a9c6bdcd557"; //Auth Token
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

app.post("/send-sms", async (req, res) => {
  const { to, message } = req.body;

  try {
    await client.messages.create({
      body: message,
      to: to,
      from: "+19259564244", // Twilio number
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
