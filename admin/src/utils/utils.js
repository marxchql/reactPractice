export function format (shijianchuo) {
  //shijianchuo是整数，否则要parseInt转换
  var time = new Date(+shijianchuo);
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
}

