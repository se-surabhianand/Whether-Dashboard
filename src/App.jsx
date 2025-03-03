import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getWhetherData } from './redux/action';
import Dashboard from './page/Dashboard';

const App = () => {
  const { error } = useSelector(state => state.whether);

  const dispatch = useDispatch();

  useEffect(() => {

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

  }, [dispatch, error]);


  return (
    <>
      <Dashboard />
      <Toaster />
    </>
  );
};

export default App;