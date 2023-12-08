require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

// Initialize your Express app
const app = express();

// Use CORS - adjust as needed for your deployment environment
app.use(
  cors({
    origin: "http://localhost:3000", // You might need to update this for your production environment
  })
);

app.set("trust proxy", true);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '..', 'build')));

// API routes
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

    accessToken = response.data.access_token;
    const expiresIn = response.data.expires_in;
    tokenExpiry = Date.now() + expiresIn * 1000; // Convert to milliseconds
    console.log("Twitch token fetched successfully");
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

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





/* require("dotenv").config();
const express = require("express");
const path = require("path")
const axios = require("axios");
const cors = require("cors");

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

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
 */