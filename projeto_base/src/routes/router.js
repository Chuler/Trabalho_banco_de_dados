const { Router } = require("express");
const router = new Router();

router.get('/', (req, res) => {
  res.status(200).render("index")
})

router.get('/login', (req, res) => {
  res.status(200).render("login")
})

router.get('/cadastro', (req, res) => {
  res.status(200).render("cadastro")
})

router.get('/post', (req, res) => {
  res.status(200).render("post")
})

module.exports = router;
