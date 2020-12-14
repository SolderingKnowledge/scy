const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./graphQL/schema');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.2rogm.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("MongoDB connected");
})


// integration express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, ()=> {
    console.log(`App is running on http://localhost:${port}`);
})