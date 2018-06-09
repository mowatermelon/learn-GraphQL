let child_process = require('child_process');
let arguments = process.argv;//Get a set of all instructions entered in the terminal
const PORT = arguments[2] || 4000; // The default third parameter is the port value

let express = require('express');
let bodyParser = require('body-parser');
let { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
let { makeExecutableSchema } = require('graphql-tools');
const ROUTE = '/graphql'; //server route
const VISUAL_ROUTE = '/graphiql'; //Visualization docs route

let typeDefs = [`
type Query {
    getSData: String
    getBData: Boolean
    getIData: Int
    getFData: Float
  }

schema {
  query: Query
}`];

let resolvers = {
    Query: {
        getSData: () => 'Hello world!',
        getBData: () => true,
        getIData:() => 1,
        getFData:() => 2.034
    }
};

let schema = makeExecutableSchema({ typeDefs, resolvers });
let app = express();
app.use(ROUTE, bodyParser.json(), graphqlExpress({ schema }));
app.use(VISUAL_ROUTE, graphiqlExpress({ endpointURL: ROUTE }));

app.listen(PORT, () => {
    openUrl(PORT + VISUAL_ROUTE);
    console.log('Now browse to localhost:' + PORT + VISUAL_ROUTE);
    console.log('Server at localhost:' + PORT + ROUTE);

});

function openUrl(URL) {
    let url = 'http://localhost:' + URL;
    let cmd;

    if (process.platform == 'win32') {
        cmd = 'start';

    } else if (process.platform == 'linux') {
        cmd = 'xdg-open';
    } else if (process.platform == 'darwin') {
        cmd = 'open';
    }

    child_process.exec(`${cmd} ${url}`);
}