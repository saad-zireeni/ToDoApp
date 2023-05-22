const express = require("express");
const app = express();

const cors = require("cors");
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));


var admin = require("firebase-admin");

var credentials = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = admin.firestore()
app.post('/create',async (req,res)=> {
    try{
        console.log(req.body)
        //const id = req.body.email;
        const cardJson = {
            title:req.body.title,
            description:req.body.description,
            date : req.body.date,
            priority:req.body.priority,
            state:req.body.state
        };
        const response =await db.collection("cards").add(cardJson);
        res.send(response)
    }catch(error){
        console.log(error)
    }
});

app.get('/read/all',async (req,res)=>{
    try{
        const cardsRef = db.collection("cards");
        const response = await cardsRef.get();
        let responseArr = [];
        response.forEach(doc =>{
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    }catch(error){
        res.send(error)

    }
});

app.get('/read/:id',async (req,res)=>{
    try{
        const cardRef = db.collection("cards").doc(req.params.id);
        console.log(req.params.id)
        const response = await cardRef.get();
        res.send(response.data());
    }catch(error){
        console.log(error)
    }

})

app.post('/update',async(req,res)=>{
    try{
            const id = req.body.id;     
            const Newtitle=req.body.title;
            const Newdescription=req.body.description;
            const Newdate = req.body.date;
            const Newpriority = req.body.priority;
            const Newstate = req.body.state;

        const cardRef = await db.collection("cards").doc(id)
        .update({
            title:Newtitle,
            description:Newdescription,
            date:Newdate,
            priority:Newpriority,
            state:Newstate
        })
        console.log(req.params.id)
        //const response = await userRef.get();
        res.send(cardRef);

    }catch(error){
        console.log(error)
    }
})

app.delete('/delete/:id',async (req,res)=>{
    try{
        const response = await db.collection("cards").doc(req.params.id).delete();
        res.send(response);
    }catch(error){
        console.log(error)
    }
    

})





const PORT =process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})