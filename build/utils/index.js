
'use strict'

const path = require('path')
const notifier = require('node-notifier')

/**
 * 添加环境变量
 */

exports.addEvn = (evnObj) =>{
   if (typeof evnObj === 'object'){
       process.exit(1)
    }

   var keys = Object.keys(evnObj)

   
}



/**
 * 日志输出
 */
exports.log = function (){
   console.log(...arguments,"\n")
}


/**
 * 系统通知
 */

exports.notifierCallback = (severity, errors) => {

      if (severity !== 'error') return

      const error = errors[0]
      const filename = error.file && error.file.split('!').pop()

      notifier.notify({
         title: "项目通知",
         message: severity + ': ' + error.name,
         subtitle: filename || '',
         icon: path.join(__dirname, 'manong.jpg')
      })
}





