const porta = 8090;
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();


const ARDUINO_IP = "192.168.0.10"; // Ajustar conforme o IP obtido no serial do Arduino

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router.get("/logging", async (req, res) => {
  try {
    const response = await fetch(`http://${ARDUINO_IP}/logging`);
    if (!response.ok) {
      const errText = await response.text();
      console.error("Erro ao obter dados do Arduino:", errText);
      return res.status(500).json({ error: "Erro ao obter dados do sensor." });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro ao buscar dados do sensor:", error);
    res.status(500).json({ error: "Erro ao processar a requisição para o sensor." });
  }
});

app.use("/", router);

app.listen(porta, () => {
  console.log("Servidor LOGGING em execução na porta: " + porta);
});