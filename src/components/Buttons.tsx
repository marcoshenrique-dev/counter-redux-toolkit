import React from 'react';
import { useCallback } from 'react';
import { decrement, increment } from '../store/stock.store';
import {useDispatch} from "react-redux";



const Buttons: React.FC = () => {  

  const dispatch = useDispatch();


  const handleAddCounter = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleRemoveCounter = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);


  return <div>
     <button onClick={handleAddCounter}>Adicionar</button>
     <button onClick={handleRemoveCounter}>Remover</button>
    </div>;
}

export default Buttons;