import React, { useState } from 'react';

const Mobile = () => {
    const [count, setCount] = useState(100);
    return (
      <div>
        <div className="card text-center">
          <div className="card-body">
            <h3>Mobile Battery Charge</h3>
            <div className="my-5">
              <h2 className="my-5"> {count}% </h2>
              <button
                className="btn btn-danger mx-3"
                onClick={() => {
                  setCount(count - 10);
                }}
                disabled={count === 0}
              >
                Battery down
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Mobile;