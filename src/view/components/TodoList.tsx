import React, { ReactElement } from "react";
import { ITodoList } from "../../redux/todos";

interface IProps {
  promiseData?: ITodoList;
}

const TodoList: React.FC<IProps> = (props): JSX.Element => {
  // 方法一定要定義返回的型別
  // typescript可以在型別推斷的時候協助檢查
  const renderData = (): Array<JSX.Element> | ReactElement => {
    let { promiseData } = props;

    if(promiseData && promiseData.length > 5) {
      promiseData.length = 5
    }

    return promiseData?.length
      ? promiseData.map((user, index) => (
        <li key={user.id}>
          <p>{user.userId}</p>
          <p>{user.title}</p>
          <p>
            <input
              type="checkbox"
              name={`${user.id}`}
              id=""
              checked={user.completed}
              title={`${user.title}`}
            />
          </p>
        </li>
      ))
      : <p>No Content</p>;
  };
  return (
    <>
    <h3>API Data List After Loading Effect</h3>
    <div>{renderData()}</div>
    </>
  );
};

export default TodoList;
