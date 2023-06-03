var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/atualizarGrafico", function (req, res) {
    usuarioController.atualizarGrafico(req, res);
});

router.get("/atualizarDashboard", function (req, res) {
    usuarioController.atualizarDashboard(req, res);
});

router.post("/verificaremail", function (req, res) {
    usuarioController.verificaremail(req, res);
});

router.post("/insertregistro", function (req, res) {
    usuarioController.insertregistro(req, res);
});

router.post("/verificarAdmin", function (req, res) {
    usuarioController.verificarAdmin(req, res);
});

router.post("/atualizarDados", function (req, res) {
    usuarioController.atualizarDados(req, res);
});

router.post("/atualizarsenha", function (req, res) {
    usuarioController.atualizarsenha(req, res);
});

router.post("/verificarsenha", function (req, res) {
    usuarioController.verificarsenha(req, res);
});

router.post("/atualizarlocal", function (req, res) {
    usuarioController.atualizarLocal(req, res);
});
  



module.exports = router;