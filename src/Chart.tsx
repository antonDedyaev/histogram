import React, { FC } from 'react';
import './styles/app.scss';

import Dropdown from './Dropdown';
import Histogram from './Histogram';

const Chart: FC = () => {
  return (
    <div className='container'>
      <div className='container__card'>
          <div className='container__head'>
            <h2>Динамика дохода</h2>
            <Dropdown />
          </div>
          <Histogram />
      </div>

    </div>
  );
}

export default Chart;
