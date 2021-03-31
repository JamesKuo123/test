const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("this is get api");
  const data = await getMongoDBData();
  res.send(await data.find({}).toArray());
});

router.post("/", (req, res) => {
  console.log("this is post api");
  res.send("this is post api result");
});

router.delete("/:id", (req, res) => {
  console.log("this is delete api");
  res.send("this is delete api result");
});

const getMongoDBData = async () => {
  const user = 'JamesUser1';
  const password = 'au4a83';
  const uri =
    `mongodb+srv://${user}:${password}@jamescluster1.lekmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const data = client.db('JamesDatabase1').collection('JamesCollection1');
  return data;
};

module.exports = router;
