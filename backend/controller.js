const porta = 8080;
const express = require("express");
const app = express();

app.listen(porta, () => {
  console.log("Servidor em execução na porta: " + porta);
});

const bodyParser = require("body-parser");

const mandarDadosParaEmbarcado = (value) => {
  console.log("Valor enviado ao sistema embarcado:", value);
};

const router = express.Router();

router.post("/controller", (req, res) => {
  const { value } = req.body;

  if (typeof value !== "number" || isNaN(value)) {
    return res.status(400).json({ error: "O valor enviado deve ser um número válido." });
  }

  try {
    mandarDadosParaEmbarcado(value);

    res.status(200).json({ message: "Valor enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar valor para o sistema embarcado:", error);
    res.status(500).json({ error: "Erro ao processar a requisição." });
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
