let url = require('url');
let child_process = require('child_process');
let arguments = process.argv;//Get a set of all instructions entered in the terminal
const PORT = arguments[2]||4000; // The default third parameter is the port value

let express = require('express');
let graphqlHTTP = require('express-graphql');
let { buildSchema } = require('graphql');
const ROUTE = '/graphql';

let schema = buildSchema(`
  type Query {
    getSData: String
    getBData: Boolean
    getIData: Int
    getFData: Float
  }
`);

let root = { 
  getSData: () => 'Hello world!',
  getBData: () => true,
  getIData:() => 1,
  getFData:() => 2.034
};

let app = express();
app.use(ROUTE, graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(PORT, () => {
  openUrl(PORT+ROUTE);
  console.log('Now browse to localhost:'+PORT+ROUTE);
});
  
function openUrl(URL){
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
