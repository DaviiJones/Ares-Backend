const app = require(`./App`)

const PORT = process.env.PORT || 1313;

app.listen(PORT, () => {
    console.log(`Ares Data live on port: ${PORT}`)
});

