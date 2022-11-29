import { axiosBase } from "../api/header";

export const apiGetToDoListData = () => axiosBase.get('todos');

export const apiGetToDoData = (userid: number) => () => axiosBase.get(`todos/${userid}`);