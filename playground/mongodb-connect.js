const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').insertOne({
    doto: 'take floki for a walk',
    complete: false,
  },(err, res)=>{
    if(err){
      return console.log('unable to insert todo', err);
    }
    console.log(JSON.stringify(res.ops,undefined,2));
    return res;
  })

  client.close();
});
