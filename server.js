const app = require("./src/app")
const port = process.env.new_port || 3000;

app.listen(port, function() {
  console.log(`app está rodando na porta ${port}`)
})
