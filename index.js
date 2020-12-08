const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.info("[success] listening on port " + PORT);
});
