import React, { useState } from 'react';
import Data from '../components/Data';
import Spinner from '../components/Spinner';

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <Spinner /> : <Data />}
    </div>
  );
};
