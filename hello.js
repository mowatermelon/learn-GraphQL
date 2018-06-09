let { graphql, buildSchema } = require('graphql');

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

graphql(schema, "{ getSData,getBData,getIData,getFData}", root).then((response) => {
  console.log(response);
});
