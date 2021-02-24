// 手写queryString.parse

// http://www.baidu.com?a=miaomiao&b=wangwang

function parseQueryString(url) {
  let _url = new URL(url);
  let obj = {};

  for (let i of _url.searchParams) {
    const [_k, _v] = i;

    let k = decodeURIComponent(_k);
    let v = decodeURIComponent(_v);

    if (obj[k] !== undefined) {
      obj[k] = [].concat(obj[k], v);
    } else {
      obj[k] = v;
    }
  }
  return obj;
}
parseQueryString(
  "http://www.baidu.com?a=miaomiao&b=wangwang&code=20180711%23abc&a=lalala"
);
