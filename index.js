const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public','landingPage')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','landingPage', 'index.html'));
});

app.get('/resume', (req,res)=>{
    res.download('./public/static/resume.pdf', 'Avinash Kumar - Web Developer.pdf')
})
// app.post("/contact",(req,res)=>{
//     const data = req.body;
//     fs.writeFile("data.json","data",()=>console.log("file is added"));

//     res.redirect("http://localhost:3000");
// })

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));