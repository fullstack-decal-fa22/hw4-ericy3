import React from 'react';
import Color from './Color';
import { useState } from 'react';

const Menu = (props) => { 


    return (
      <div className="colorOptions">
          <Color handleClick={props.handleClick} color="green"/>
          <Color handleClick={props.handleClick} color="pink"/>
          <Color handleClick={props.handleClick} color="blue"/>
          <Color handleClick={props.handleClick} color="red"/>
      </div>
    );
}

export default Menu;