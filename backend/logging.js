// logging.js
const express = require("express");
const { SerialPort, ReadlineParser } = require("serialport");

const app = express();
const porta = 8090;

const port = new SerialPort({ path: "COM5", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

let lastData = {}; 

parser.on("data", (data) => {
  try {
    const jsonData = JSON.parse(data);
    if (jsonData.temperature !== undefined && jsonData.limite !== undefined) {
      lastData = jsonData;
      console.log("Dados recebidos do Arduino:", lastData);
    }
  } catch (err) {
    console.error("Erro ao processar dados da Serial:", err);
  }
});

app.get("/logging", (req, res) => {
  if (Object.keys(lastData).length > 0) {
    res.status(200).json(lastData);
  } else {
    res.status(500).json({ error: "Nenhum dado disponível do Arduino." });
  }
});

app.listen(porta, () => {
  console.log(`Servidor LOGGING em execução na porta ${porta}`);
});