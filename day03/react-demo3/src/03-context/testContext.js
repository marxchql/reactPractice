import { createContext } from 'react';

// 执行createContext方法会return出一个对象
const testContent = createContext();

const { Provider, Consumer } = testContent;

export {
  testContent,
  Provider,
  Consumer
}