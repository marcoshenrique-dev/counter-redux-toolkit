import React from 'react';

import {useSelector} from "react-redux";
import { rootState } from '../store';


const Text: React.FC = () => {

  const counter = useSelector((state: rootState) => state.stock.counter.value);

  console.log(counter);

  return <h1>{counter}</h1>;
}

export default Text;