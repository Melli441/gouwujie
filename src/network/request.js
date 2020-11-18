import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL:'http://127.0.0.1:8000',
    timeout:5000  //毫秒，超过五秒钟报错，没有获取到
  })

  //3.拦截器
  //作用：1.某些服务器获取到的信息不符合我们的需求，可以在这里做一些更改；
  //2.比如每次发送网络请求时，都希望界面上出现一个等待的图标
  //3.某些网络请求，必须携带一些特殊信息
  //请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    //获取
    return config
  },
      error => {
        // console.log(error)
      })
  //响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res
    //处理的话就 return res.data
  },error => {
    // console.log(error)
  })

  return instance(config)
  //2.发生真正的网络请求
  // instance(config)
  //     .then(res=>success(res))
  //     .catch(err=>failure(err))
}
