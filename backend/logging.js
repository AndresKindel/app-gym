const porta = 8090;
const express = require("express");
const app = express();

app.listen(porta, () => {
  console.log("Servidor em execução na porta: " + porta);
});

const bodyParser = require("body-parser");

const teste = 35;

const getSensorData = () => {
  console.log("Dados lidos do sensor:" + teste);
  return teste;
};

const router = express.Router();

router.get("/logging", (req, res) => {
  try {
    const data = getSensorData();

    res.status(200).json({ sensorData: data });
  } catch (error) {
    console.error("Erro ao buscar dados do sensor:", error);
    res.status(500).json({ error: "Erro ao processar a requisição para o sensor." });
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
