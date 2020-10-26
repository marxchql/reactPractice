import React, { Component } from 'react';

import { Map, List, Seq, Set, Range } from 'immutable';

class App extends Component {
  render() {
    // let map1 = Map({
    //   a: 1,
    //   b: 2
    // })
    // // console.log(map1.toJS())
    // // let map2 = map1.set('a', 10)
    // // console.log(map2.toJS())
    // // console.log(map1.toJS())
    // // set用来修改数据
    // let map2 = map1.set('a', 1)
    // console.log(map2 === map1)
    // // get用来获取数据
    // console.log(map2.get('b'))




    // let obj = {
    //   a: 1,
    //   b: 2
    // };
    // let map1 = Map(obj);
    // let map2 = Map(obj);
    // console.log(map1 === map2);
    // //equals方法就是纯粹的判断里面的值是否相等
    // console.log(map1.equals(map2));



    

    // let list1 = List(['a', 'b', 'c'])
    // // let list2 = list1.push('d')
    // let list2 = list1.unshift('x')
    // let list3 = ['x', 'y']
    // console.log(list1.concat(list2, list3).toJS())





    // let map1 = Map({
    //   a: 1,
    //   b: 2,
    //   c: 3
    // })
    // let map2 = map1.map((v, k) => {
    //   console.log(k)
    //   return k.toUpperCase()
    // }).join()
    // console.log(map2)






    // 对象的合并
    // let map1 = Map({a: 100, b: 200, c: 300, x: {aa: 1000, bb: 2000}})
    // let map2 = Map({b: 400, c: 500, d: 600, x: {aa: 3000, cc: 4000}})
    // let map3 = {y: 999}
    // // console.log(map1.merge(map2).toJS())
    // console.log(map1.mergeDeep(map2, map3).toJS())

    // 数组的合并
    // const list1 = List([1, 2, 3])
    // const list2 = List([4, 5, 6])
    // const list3 = [7, 8, 9]
    // console.log(list1.concat(list2, list3).toJS())

    




    // const obj = {
    //   a: 1,
    //   b: 2
    // }
    // // Seq是惰性的，只有要用的时候才去执行, 既能处理对象，又能处理数据
    // const map1 = Seq(obj)
    // // console.log(map1.toJS())
    // const map2 = map1.map((v,k) => {
    //   console.log(k)
    //   return v * 2
    // })
    // console.log(map2.toJS())

    // const list = ['a', 'b', 'c']
    // const list1 = Seq(list)
    // console.log(list1.toJS())




    // const { fromJS } = require('immutable')
    // const obj = { 1: 'one' }
    // console.log(Object.keys(obj))
    // console.log(obj['1'], obj[1])
    // const map = fromJS(obj)
    // console.log(map.get('1'), map.get(1))





    // const deep = Map({
    //   a: 1,
    //   b: 2,
    //   c: List(['x', 'y'])
    // })
    // console.log(deep.toJS()) // 一次性的遍历
    // console.log(deep.toObject())  // 只能遍历一层
    // console.log(deep.toArray())  // 相当于原生的Object.entries
    // console.log(JSON.stringify(deep))  // 直接变成字符串




    // 展开运算符不能展开immutable的Map对象，但是可以展开List对象
    // const map1 = Map({
    //   a: 1,
    //   b: 2
    // })
    // console.log({c: 20, ...map1, d: 100})

    // const list1 = List([1, 2, 4])
    // console.log([7, ...list1, 8])






    // const map1 = Map({
    //   a: 2,
    //   b: List([3, 4, 5, 6]),
    //   c: [7, Map({
    //     d: 6
    //   })]
    // })

    // // console.log(map1.get('c')[1].get('d'))
    // // console.log(map1.getIn(['c', 1, 'd']))
    // // const map2 = map1.setIn(['c', 0], 70)
    // // console.log(JSON.stringify(map2))
    // const map3 = map1.updateIn(['c', 1, 'd'] , (v) => {
    //   // 可以接收一个参数，参数就是对象本身
    //   // 函数里面可以写逻辑
    //   return 999
    // })
    // console.log(map3.toJS())





    // const set1 = Set(['a', 'b', 'b', 'b', 'v'])
    // console.log(set1.toJS())
    // const map1 = Map({ a: 1, b: 2, c: 3 });
    // const map2 = Map({ a: 1, b: 2, c: 3 });
    // const set = Set().add(map1)
    // console.log(set.has(map2))





    // const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
    //   .filter(x => {
    //     console.log(x)
    //     return x % 2 !== 0
    //   })
    //   .map(x => {
    //     console.log(x)
    //     return x * x
    //   });

    // console.log(oddSquares.get(1))
    // console.log(oddSquares.get(3))




    const aRange = Range(1, Infinity)
      .skip(1000)
      .map(n => -n)
      .filter(n => n % 2 === 0)
      .take(2)
      .reduce((r, n) => r * n, 1);
      
    console.log(aRange)







    return (
      <div>
        <input type="range"/>
      </div>
    );
  }
}

export default App;