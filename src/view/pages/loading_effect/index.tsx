import React from "react";
import { apiGetToDoListData, apiGetToDoData } from "../../../api/apiCall";
import { ITodoList } from "../../../redux/todos";
import LoadingWrap from "../../components/enhancer/LoadingWrap";
import Todo from "../../components/Todo";
import TodoList from "../../components/TodoList";



export default function Index() {
  return (
    <>
      <LoadingWrap promiseDataFn={apiGetToDoListData}>
        <TodoList />
      </LoadingWrap>
      <LoadingWrap promiseDataFn={apiGetToDoData(1)}>
        <Todo />
      </LoadingWrap>
    </>
  );
}
