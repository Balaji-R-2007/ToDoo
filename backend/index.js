const express=require('express');
const PORT=3000;
const app=express();
app.use(express.json())
app.get('/', (req,res)=>{
    console.log('backend');
    res.send("hi");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
