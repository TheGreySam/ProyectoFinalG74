const express = require("express");
const authR = require("./routes/authRoutes");
const marketplaceRouters = require("./routes/marketplaceRoutes");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(authR);
app.use(marketplaceRouters);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
} );