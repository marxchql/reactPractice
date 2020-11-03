import { useHistory } from 'react-router-dom';

const useGoToDetail = () => {
  // 跳转
  let history = useHistory();

  // 跳转
  const goToDetail = (id, title) => {
    return () => {
      history.push('/detail/' + id, {
        title: title
      })
    }
  }

  return {goToDetail}
}

export default useGoToDetail