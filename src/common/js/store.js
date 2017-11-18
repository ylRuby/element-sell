export function saveToLocal(id, key, value) {
    // nodejs不存在localStorage，所以要指出是在浏览器下调用的js
  let seller = window.localStorage.__seller__ // 私有变量的命名规范
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller) // localStorage是以字符串的形式存储的
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  let ret = seller[key]
  return ret
}
