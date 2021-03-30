const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

async function loadPostsCollection() {
  const mongoUser = 'JamesUser1';
  const mongoPassword = 'au4a83';
  const mongoUri = `mongodb+srv://${mongoUser}:${mongoPassword}@jamescluster1.lekmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const mongoClient = await mongodb.MongoClient.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const mongoData = mongoClient.db("JamesDatabase1").collection("JamesCollection1");
  return mongoData;
}

module.exports = router;
