// App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data && (
        <div>{data.id}-{data.name}-{data.title}</div>
      )}
    </div>
  );
};

export default App;
