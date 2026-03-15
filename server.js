import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

/* ===== CHAT GPT ===== */

app.post("/api/chat", async (req,res)=>{

 try{

  const {message}=req.body;

  const r=await fetch("https://api.openai.com/v1/chat/completions",{
   method:"POST",
   headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
   },
   body:JSON.stringify({
    model:"gpt-4o-mini",
    messages:[
     {role:"system",content:"Ты AI GOD COSMIC — мощный интеллектуальный ассистент."},
     {role:"user",content:message}
    ]
   })
  });

  const data=await r.json();

  res.json({
   reply:data.choices?.[0]?.message?.content || "AI error"
  });

 }catch(e){

  res.status(500).json({error:"server error"});

 }

});

/* ===== TAROT ===== */

const tarot=[
"Шут — новое начало",
"Маг — сила",
"Императрица — рост",
"Император — власть",
"Солнце — успех"
];

app.get("/api/tarot",(req,res)=>{

 const card=tarot[Math.floor(Math.random()*tarot.length)];

 res.json({card});

});

/* ===== RUNES ===== */

const runes=[
"Fehu — богатство",
"Uruz — сила",
"Ansuz — мудрость",
"Raidho — путь"
];

app.get("/api/runes",(req,res)=>{

 const rune=runes[Math.floor(Math.random()*runes.length)];

 res.json({rune});

});

/* ===== I CHING ===== */

const iching=[
"1 — Творчество",
"2 — Восприимчивость",
"3 — Начальные трудности",
"4 — Юношеская глупость"
];

app.get("/api/iching",(req,res)=>{

 const hex=iching[Math.floor(Math.random()*iching.length)];

 res.json({hex});

});

/* ===== PORT ===== */

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{

 console.log("AI GOD COSMIC RUNNING",PORT);

});