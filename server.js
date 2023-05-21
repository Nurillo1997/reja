const http = require("http");
const mongodb = require("mongodb");

// MongoDB connect

const connectionString = "mongodb+srv://nurillo:1NLCmexNK2u6B57J@cluster0.ibcschz.mongodb.net/Reja";

mongodb.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3016;
            server.listen(PORT, function () {
                console.log(`The server is running successfuly on port ${PORT}, http://localhost:${PORT}`);
            });
        }
    }
);