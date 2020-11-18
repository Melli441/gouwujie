const express=require('express')
const fs=require('fs')
const  app=express()

app.all('*',function(req,res,next){
  //设置允许跨域的域名
  res.header('Access-Control-Allow-Origin','*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers','content-type')
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
  if(req.method.toLowerCase()=='options')
    res.send(200)
  else
    next()
})

//做一个server模拟数据做前端页面
app.get('/home/multidata',function(req,res){
  fs.readFile('./data/multidata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/homedata',function(req,res){
  fs.readFile('./data/homedata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
  app.get('/category/category',function(req,res){
    fs.readFile('./data/category.json',function(err,data){
      if(err){
        return res.send('err')
      }
      res.send(JSON.parse(data))
    })
  })

app.listen(8000,function(){
  console.log('server is running...')
})
