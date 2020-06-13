import React, { useState } from 'react';
import Data from '../components/Data';
import LoadingAnimation from '../components/LoadingAnimation';

export default () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3400);
  return (
    <div>
      <h1>Hello!</h1>
      {loading ? <LoadingAnimation>Loading...</LoadingAnimation> : <Data />}
      <div className="spinners">
            <LoadingAnimation type="spin">
            </LoadingAnimation>
        <div className="widget">
          <div className="spinner">
            <LoadingAnimation type="spinner">
              <div>You spin my head</div>
              🙂
              <div>right round...</div>
            </LoadingAnimation>
          </div>
        </div>
        <div className="widget">
          <div className="seesaw">
            <LoadingAnimation type="seesaw">
              <span className="flex">
                <div>x</div>
                <div>x</div>
              </span>
              <hr />
              <div>o</div>
            </LoadingAnimation>
          </div>
        </div>
        <div className="widget">
          <div className="swing">
            <LoadingAnimation type="swing">tic<hr />toc</LoadingAnimation>
          </div>
        </div>
      </div>
      <style jsx>{`
        .widgets {
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
        .widget .spinner {
          width: 45%;
        }
        .widget .seesaw {
          width: 80%;
        }
        .widget .swing {
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
