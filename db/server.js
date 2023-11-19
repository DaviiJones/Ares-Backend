const app = require("../App.js");

const PORT = process.env.PORT || 1313;

app.listen(PORT, () => {
    console.log(`NASA Data live on port: ${PORT}`)
});

