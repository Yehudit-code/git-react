const express = require("express")
const router = express.Router()
const {children} = require("../data")

router.get('/',(req,res)=>{
   // res.send("childrenRoutes👨‍👩‍👦")
    res.json(children)
})

router.get('/:id', (req,res)=>{
    const {id}=req.params
    console.log(id)
    const obj = children.find(e=>e.id===Number(id))
    res.send(obj)
})
router.post('/post',(req,res)=>{
    // console.log("😀")
    // console.log(req.body)
    const newArr =[...children,req.body]
    res.json(newArr)
})

router.put('/put', (req,res)=>{
    const newArr = children.map((c)=>{
       return req.body.id === c.id ?c= req.body : c
    })
    res.json(newArr)
})
router.delete('/delete',(req,res)=>{
    const newArr = children.filter((e)=>{
        return req.body.id != e.id
    })
    res.json(newArr)
})

module.exports = router