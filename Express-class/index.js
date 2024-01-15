const express = require("express");

const app = express();

function sum(n){
    let ans=0;
    for (let i = 0; i < n; i++) {
        ans=ans+i;
    }
    return ans;
}
app.get("/", function (req, res) {
    const n=req.query.n;
    const ans=sum(n);
    // req and res => request and respond
res.send("The answer is " + ans);

})

app.listen(3001);