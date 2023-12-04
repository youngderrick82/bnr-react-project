require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.set("trust proxy", true);
const PORT = 3001;

const TWITCH_CLIENT_ID = process.env.TTV_CLIENT_ID;
const TWITCH_CLIENT_SECRET = process.env.TTV_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = null;

const getToken = async () => {
  try {
    const response = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      null,
      {
        params: {
          client_id: TWITCH_CLIENT_ID,
          client_secret: TWITCH_CLIENT_SECRET,
          grant_type: "client_credentials",
        },
      }
    );

    console.log("token:", response.data.access_token);
    accessToken = response.data.access_token;
    const expiresIn = response.data.expires_in;
    tokenExpiry = Date.now() + expiresIn * 1000; // Convert to milliseconds
    console.log("success my guy");
  } catch (error) {
    console.error("Error fetching Twitch token:", error);
    throw error;
  }
};

app.get("/get-twitch-token", async (req, res) => {
  if (!accessToken || Date.now() >= tokenExpiry) {
    await getToken();
  }

  res.json({ access_token: accessToken });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
