export function formatDate(date, fmt) {
  // 正则表达式
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let obj = {
    'M+': date.getMonth() + 1, // 获取到的月份是从0开始的
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in obj) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = obj[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === str.length) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
