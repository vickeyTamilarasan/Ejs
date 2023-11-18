let ex = require("express");

let app = ex();
app.set('view engine', 'ejs');
let bodyparser=require('body-parser');


app.use(bodyparser.urlencoded({extended:true}))
let b = "tamil"

let dataObj = [{ UserName: "Tamil", UserNumber: "9874563210" },
{ UserName: "Vickey", UserNumber: "9874563143" }]

let arr=[]

let name = ""
let number = ""

dataObj.forEach((data) => {
    name = data.UserName;
    number = data.UserNumber;
})

app.get("/", (req, res) => {
    // res.send("hello")
    res.render("a", { userName: name, userNumber: number,arr:arr })

})

app.post("/",(req,res)=>{
    arr.push(req.body.name);
    res.redirect("/")
})

app.listen(2000)