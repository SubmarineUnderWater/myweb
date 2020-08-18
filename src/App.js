import React from 'react';
import {Image} from 'semantic-ui-react'
import poster from "./poster.jpg"

import comments from './Comment.js'

function App() {
  return (
    <div>
    <Image src = {poster} centered/>
    <Comments/>
    </div>
  );
}

export default App;
