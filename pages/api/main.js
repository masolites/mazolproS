// Same as above, but add NFT/social actions as needed
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "mazolpro";
let client, db;
async function connect() {
  if (!client) {
    client = await MongoClient.connect(uri);
    db = client.db(dbName);
  }
  return db;
}
export default async function handler(req, res) {
  const db = await connect();
  const { action, payload } = req.body || {};
  if (action === "signup") {
    /* ...same as above... */
  }
  if (action === "signin") {
    /* ...same as above... */
  }
  if (action === "ico") {
    /* ...same as above... */
  }
  if (action === "mining") {
    /* ...same as above... */
  }
  if (action === "wallet") {
    /* ...same as above... */
  }
  if (action === "nftgift") {
    // Example: send NFT gift
    return res.json({ ok: true });
  }
  if (action === "socialfeed") {
    // Example: return social feed
    return res.json({
      posts: [
        {
          id: 1,
          video: "https://mazolpro.com/video1.mp4",
          user: "user1",
        },
      ],
    });
  }
  return res.status(404).json({ error: "Not found" });
}
