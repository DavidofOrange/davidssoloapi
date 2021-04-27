const express = require("express");
const knex = require('./knex.js');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const setupServer = () => {
app.get("/deckofcards", async (req, res) => {
  try{ 
  const data = await knex.select().table("cards");
  res.status(200);
  res.send(data);
  } catch(error){
      console.log(error)
  }
});

app.patch("/deckofcards", (req, res) => {
      res.status(206).end("Here are your selected cards");
    });

app.post("/deckofcards", (req, res) => {
    res.status(201).end("Here are all the cards");
  });

app.delete("/deckofcards", (req, res) => {
      res.status(410).end("cards deleted from deck");
    });

const port = process.env.PORT || 9999;

app.listen(9999, () => {
  console.log("Server running at " + port);
});

return app
}
setupServer();

module.exports = { setupServer };