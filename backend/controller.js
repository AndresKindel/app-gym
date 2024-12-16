const porta = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const ARDUINO_IP = "192.168.0.10"; // Ajustar conforme o IP obtido no serial do Arduino

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router.post("/controller", async (req, res) => {
  const { value } = req.body;

  if (typeof value !== "number" || isNaN(value)) {
    return res.status(400).json({ error: "O valor enviado deve ser um número válido." });
  }

  try {
    const response = await fetch(`http://${ARDUINO_IP}/controller`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Erro ao enviar valor para Arduino:", errText);
      return res.status(response.status).json({ error: "Falha ao enviar valor para Arduino." });
    }

    const jsonResp = await response.json();
    return res.status(200).json({ message: jsonResp.message || "Valor enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao comunicar com o Arduino:", error);
    res.status(500).json({ error: "Erro ao processar a requisição." });
  }
});

app.use("/", router);

app.listen(porta, () => {
  console.log("Servidor CONTROLLER em execução na porta: " + porta);
});