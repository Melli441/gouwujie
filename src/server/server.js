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
app.get('/categorydata/subcategory582',function(req,res){
  fs.readFile('./data/categorydata/subcategory582.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/categorydata/subcategory595',function(req,res){
  fs.readFile('./data/categorydata/subcategory595.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/categorydata/subcategory596',function(req,res){
  fs.readFile('./data/categorydata/subcategory596.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/categorydata/subcategory598',function(req,res){
  fs.readFile('./data/categorydata/subcategory598.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/tabdata', function (req, res) {
  fs.readFile('./data/homedata/tabdata.json', function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/home/homedata', function (req, res) {
  //判断参数
  const path=`./data/homedata/${req.query.type}${req.query.page}.json`
  // console.log(path)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send((JSON).parse(data))
  })
})
app.listen(8000,function(){
  console.log('server is running...')
})
