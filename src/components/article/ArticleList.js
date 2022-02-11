import React from 'react';
import './ArticleList.css';
import Navbar from '../navbar/Navbar';

function ArticleList() {
  return (
      <div>
          <Navbar/>
      
    <div>
         <h2 id='headline'>React js</h2>
         <div className='tocentr'>
         <p id='para1'>React is a JavaScript library for building user interfaces.

            React is used to build single-page applications.

            React allows us to create reusable UI components.

            </p>
         </div>
         </div>
    </div>
  
  );
}

export default ArticleList