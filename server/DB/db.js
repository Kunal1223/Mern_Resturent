const mongoose = require('mongoose');
const mongoURL = process.env.DATABASE;

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
