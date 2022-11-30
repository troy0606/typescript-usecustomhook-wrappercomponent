import React, { ReactElement } from "react";
import { ITodo, ITodoList } from "../../redux/todos";

interface IProps {
  promiseData?: ITodo;
}

const TodoList: React.FC<IProps> = (props): JSX.Element => {
  // 方法一定要定義返回的型別
  // typescript可以在型別推斷的時候協助檢查
  const renderData = (): JSX.Element | ReactElement => {
    let { promiseData } = props;

    return promiseData ? (
      <p key={promiseData.id}>
        <p>{promiseData.userId}</p>
        <p>{promiseData.title}</p>
        <p>
          <input
            type="checkbox"
            name={`${promiseData.id}`}
            id=""
            checked={promiseData.completed}
            title={`${promiseData.title}`}
          />
        </p>
      </p>
    ) : (
      <p>No Content</p>
    );
  };
  return (
    <>
      <h3>API Data After Loading Effect</h3>
      <div>{renderData()}</div>
    </>
  );
};

export default TodoList;
