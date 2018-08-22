const http = require("http");
const app = require("./api/app");

const PORT = process.env.PORT || 4200;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
