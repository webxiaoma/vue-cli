/**
 * @msg 请求简单封装 配置 
* @fly.js https://github.com/wendux/fly
 */

import fly from 'flyio'



// 响应拦截
fly.interceptors.response.use(res => {

    return res.data;
},error =>{
    // if(error.response.status == 401){}// 登录已过期
    // if(error.response.status == 403){} // 无权访问
    // if(error.response.status == 404){} // 访问的页面不存在
    // if(error.response.status == 500){} // 服务器发生错误
    // if(error.response.status == 504){} // 服务器发生错误

    return  Promise.reject(error.response)
})

export default function request(api,config = {}){

  const { method, headers ,patterns, data} = config;
  //patterns匹配路径参数（数组）， params GET请求参数（对象）, data

  return createRequestConfig(api,{method, headers, patterns,data})
}

function createRequestConfig(api,{method, headers,patterns,data}){
    let url  = api;
    let methods = method || 'post'; // 默认get请求
    let header = headers || {};
    // 解析路径匹配参数
    if(patterns && patterns.length){
        for(let i=0; i < patterns.length; i++){
            url = url.replace("{"+i+"}",patterns[i])
        }
    }

    // fly 请求配置
    return fly.request(url,data,{
        baseURL:"",//请求基路径
        method: methods.toLowerCase(),
        headers: header,
        timeout:5000 //超时设置为5s
    })
    

    }