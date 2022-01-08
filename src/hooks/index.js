import { useContext, useState, useEffect } from 'react';
import {
  setItemInLocalStorage,
  removeItemFromLocalStorage,
  getItemFromLocalStorage,
} from '../utils';

import {HabitContext} from '../providers/habitProvider';

export const useList = () => {
    return useContext(HabitContext);
  };

export const useProvideList = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const habit = getItemFromLocalStorage();
  
      if (habit) {
        setData(habit);
      }
  
      setLoading(false);
    }, [])
};