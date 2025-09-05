require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const {PositionsModel} = require("./model/PositionsModel");

const PORT = process.env.PORT || 8080;//for specify when we deply port will change
const URL = process.env.MONGO_URL;

const app = express();

app.listen(PORT , ()=>{
    console.log("server is running on 8080");
    mongoose.connect(URL);
    console.log("DB connected!");
})














//dummy data
// app.get("/addPositions" , async(req,res)=>{
//     let tempPositionss = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
      
//     tempPositionss.forEach((item)=>{
//         let newPosition = new PositionsModel({
//             product:item.product,
//             name:item.name,
//             qty:item.qty,
//             avg:item.avg,
//             price:item.price,
//             net:item.net,
//             day:item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//       });
//       res.send("Done!")
// });