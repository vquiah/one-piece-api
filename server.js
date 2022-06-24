const e = require('express');
const express = require('express');
const app = express()
// const cors = require('cors')

const PORT = 8000

const members = {
   "luffy": {
    "name":"Monkey D Luffy",
    "age": 19,
    "birth region":"east blue",
    "skill":"rubber boy"
    },
    "zoro" : {
        "name":"Zore Ro",
        "age": 22,
        "birth region":"east blue",
        "skill":"worlds best swordman"
        },
    "unknown": {
        "name":"unknown",
        "age": 0,
        "birth region":"unknown",
        "skill":"unknown"
        }

}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:names', (req,res) =>{
   const crewName = req.params.names.toLowerCase()
   if(members[crewName]){
    res.json(members[crewName])
        }else{
            res.json(members.unknown)
        }
   })
    


app.listen(PORT, ()=>{
    console.log(`THe server is runninng on port ${PORT}, might wanna go catch it`);
})