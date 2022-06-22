// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = 
// "mongodb+srv://Zheka_Shapik:29041999vip@cluster0.6himm.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
//     serverApi: ServerApiVersion.v1 
// });

// client.connect(err => {
//   const collection = client.db("interview-questions").collection("list");

//   collection
//       .find({})
//       .toArray()
//       .then((data) => {
//         const findResult = data;
//         console.log(findResult);
//         console.log('Found documents =>', findResult);
//         client.close();
//       });
// });



const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3005;

app.use(cors());

app.get('/', (req, res) => {
  const uri =
  "mongodb+srv://Zheka_Shapik:29041999vip@cluster0.6himm.mongodb.net/?retryWrites=true&w=majority";


  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  client.connect((err) => {
    const collection = client.db('interview-questions').collection('list');

    collection
      .find({})
      .toArray()
      .then((data) => {
        res.send(data);
        client.close();
      });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
