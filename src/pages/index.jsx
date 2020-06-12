import React, { useState } from 'react';
import Data from '../components/Data';
import Spinner from '../components/Spinner';

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <Spinner>Loading...</Spinner> : <Data />}
      <div className="spinners">
        <div className="widget">
          <div className="spin">
            <Spinner type="spin">
              You spin my head right round...
            </Spinner>
          </div>
        </div>
        <div className="widget">
          <div className="swing">
            <Spinner type="swing">
              <span className="flex">
                <div>x</div>
                <div>x</div>
              </span>
              <hr />
              <div>o</div>
            </Spinner>
          </div>
        </div>
        <div className="widget">
          <div className="pendulum">
            <Spinner type="pendulum">tic<hr />toc</Spinner>
          </div>
        </div>
      </div>
      <style jsx>{`
        .spinners {
          margin-top: 60px;
        }
        .widget {
          width: 150px;
          height: 100px;
          margin: 60px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #CFCFCF;
        }
        .widget .spin {
          width: 40%;
        }
        .widget .swing {
          width: 80%;
        }
        .widget .pendulum {
          width: 60%;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
      `}
      </style>
    </div>
  );
};
