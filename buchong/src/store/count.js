import {
  observable, // 定义响应式数据
  action,  // 定义方法改变数据
  computed // 计算属性
} from 'mobx';


class Count {
  @observable count = 1;
  @observable num = 2;

  @action increment = () => {
    console.log(this)
    this.count++
  }

  @computed get doubleCount() {
    return this.count * 2
  }
}

export default new Count();