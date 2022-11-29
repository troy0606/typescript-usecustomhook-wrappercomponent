import { AxiosResponse } from "axios";
import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

interface IProps extends React.PropsWithChildren {
  promiseDataFn: () => Promise<AxiosResponse<any>>;
  children?: React.ReactNode;
}

const LoadingWrap = ({ children, promiseDataFn }: IProps) => {
  const dispatch = useDispatch();
  const [promiseState, setPromiseState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    getPromiseData();
  }, []);

  const getPromiseData = async () => {
    const promiseStateCopy = { ...promiseState };
    try {
      const response = await promiseDataFn();
      promiseStateCopy.data = response.data;
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      promiseStateCopy.loading = false;
    }
    setPromiseState(promiseStateCopy);
  };

  // const counter = useSelector(state => state.counter)

  const childrenWithProps = Children.toArray(children).map((child) =>
    isValidElement<{ promiseData: unknown }>(child)
      ? cloneElement(child, {promiseData: promiseState.data})
      : child
  );

  const LoadingEffect = <h2>Loading....</h2>;
  return promiseState?.loading ? LoadingEffect : <>{childrenWithProps}</>;
};

export default LoadingWrap;
