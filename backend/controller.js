// controller.js
const express = require("express");
const bodyParser = require("body-parser");
const { SerialPort, ReadlineParser } = require("serialport");

const app = express();
const porta = 8080;

const port = new SerialPort({ path: "COM5", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

app.use(bodyParser.json());

let pendingResponse = null;

parser.on("data", (data) => {
  data = data.trim();
  try {
    const jsonData = JSON.parse(data);
    if (jsonData.status && pendingResponse) {
      pendingResponse.status(200).json(jsonData);
      pendingResponse = null;
    }
  } catch (error) {
    console.error("Erro ao processar resposta do Arduino:", error.message);
  }
});

app.post("/controller", (req, res) => {
  const { value } = req.body;

  if (typeof value !== "number" || isNaN(value) || value < 0 || value > 50) {
    return res.status(400).json({ error: "O valor deve ser um número entre 0 e 50." });
  }

  const comando = `POST /controller:${value}\n`;
  console.log("Enviando comando para Arduino:", comando);

  port.write(comando, (err) => {
    if (err) {
      console.error("Erro ao enviar comando:", err.message);
      return res.status(500).json({ error: "Erro na comunicação com o Arduino." });
    }

    pendingResponse = res;

    setTimeout(() => {
      if (pendingResponse) {
        pendingResponse.status(500).json({ error: "Timeout: Sem resposta do Arduino." });
        pendingResponse = null;
      }
    }, 3000);
  });
});

app.listen(porta, () => {
  console.log("Servidor CONTROLLER em execução na porta: " + porta);
});