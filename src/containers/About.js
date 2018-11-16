import React from 'react';

import Menu from './Menu';

const About = () => {
    return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-md-3'>
                  <Menu />
              </div>
              <div className='col-md-7'>
                  <h2>Страница about</h2>
              </div>
          </div>
      </div>
    );
}

export default About;
