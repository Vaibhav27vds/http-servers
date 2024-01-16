const express = require("express");
const app = express();

const users =[{
    name: "john",
    kidneys:[{
        healthy:false
    }]
}];

app.get("/", function (req,res) {
    const johnkidneys = users[0].kidneys;
    const numberOfKidneys=johnkidneys.length;
    let numberOfHealthyKidneys=0;
    for (let i = 0; i < johnkidneys.length; i++) {
        if(johnkidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
        
    }
    const numberOfUnHealthyKidneys=numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })

})
 
app.listen(3002)