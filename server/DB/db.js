const mongoose = require('mongoose');
const mongoURL = process.env.DATABASE;

// const start = async () => {
//     try {
//         await mongoose.connect(mongoURL);
//         console.log("Connected");
//         const fetched_data = await mongoose.connection.db.collection('user');
//         // console.log("Line calling this code1");

//         const data = await fetched_data.find({}).toArray();
//         // console.log(data);  
//         global.food_item = data;
//         // console.log(data)   
//     } catch (err) {
//         console.log(err);
//     }
// }
// start(); 
//then promise ----->

mongoose.connect(mongoURL).then(() => {
    console.log("connected");
    const fetched_data = mongoose.connection.db.collection('user');
    fetched_data.find({}).toArray().then((data) => {
        const fetched_catogry = mongoose.connection.db.collection('foodcatogry');
        fetched_catogry.find({}).toArray().then((Catdata) => {
            global.food_catogry = Catdata;
            })
            global.food_item = data;
            // console.log(data)   
        }).catch((err) => {
        console.log(err);
    });

})
