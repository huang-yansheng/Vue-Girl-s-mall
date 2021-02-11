export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
 }

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    //replace替换:第一个参数替换成第二个参数
    //RegExp.$1相当于拿到fmt中匹配/(y+)/的值，比如yyyy
    //date.getFullYear() + ''相当于拿到的数字转换成字符串，比如2019
    //substr(4 - RegExp.$1.length)对上面获取到的字符串进行截取，比如传进来yyyy长度为4，则2019截取0个，等于2019本身
    //如果传的是yyyy,那么这里就是replace(yyyy,2019.substr(0)),将yyyy替换成2019
    //如果传的是yy,那么这里就是replace(yy,2019.substr(2)),将yy替换成19
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  //创建一个对象，保留一系列规则，然后进行遍历，其思想和上面的一致
  //为什么不和上面放在一起，因为年份有4位数，其他的只有两位
  //而且月日时分秒还要调用一个函数，对其转换为两位数，比如01，02，03
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  //比如5 那就是005 然后截取掉1位 等于05
  //substr函数是从字符串前面开始进行截取
  return ('00' + str).substr(str.length);
};
