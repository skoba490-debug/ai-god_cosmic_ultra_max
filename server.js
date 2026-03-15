import express from "express";
import path from "path";

const app = express();

app.use(express.json());

/* статические файлы */
app.use(express.static("public"));

/* главная страница */
app.get("/", (req,res)=>{
  res.sendFile(path.resolve("public/index.html"));
});

/* тест API */

app.get("/api/test",(req,res)=>{
  res.json({status:"AI GOD COSMIC WORKING"});
});

/* порт Render */

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("Server running on",PORT);
});
