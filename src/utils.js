export function GetImage(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image()
    img.onload = function () {
      console.log("加载成功了")
      resolve(img)
    }
    img.onerror = function () {
      console.log("发生什么事了?")
      reject(url)
    }
    img.src = url
  })
}