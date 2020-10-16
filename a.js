// this
// 普通函数
    //  谁调用指向谁
// 箭头函数
    //  定义时就确定的，不能更改的
    //  上一个不是箭头函数的那个函数的this
// 构造函数
    //  指向实例对象
// 事件处理函数
    // 事件对象
// 定时器
    // 指向window



function add() {
  // ccccc
}
add().bind(o)

// let o = {
//   add: function(params) {
//       // aaaaa
//   }
// }

// o.add()

// const obj = document.querySelector('div')
// obj.onclick = function() {
//   this
// }