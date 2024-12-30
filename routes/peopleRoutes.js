const express = require("express")
const router = express.Router()
const {people} = require("../data")

router.get('/',(req,res)=>{
    res.json(people)
})

router.get('/:id', (req,res)=>{
    const {id}=req.params
    const obj = people.find(e=>e.id===Number(id))
    res.send(obj)
})
router.post('/post',(req,res)=>{
    // console.log("😀")
    // console.log(req.body)
    const newArr =[...people,req.body]
    res.json(newArr)
})

router.put('/put', (req,res)=>{
    const newArr = people.map((c)=>{
       return req.body.id === c.id ?c= req.body : c
    })
    res.json(newArr)
})
router.delete('/delete',(req,res)=>{
    const newArr = people.filter((e)=>{
        return req.body.id != e.id
    })
    res.json(newArr)
})

module.exports = router