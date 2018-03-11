import React, { Component } from 'react';

class List extends Component{
  render =() => {
    return (
      <ul>
      {
        this.props.items.map((item) => {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    )  
  }
};

 export default List;
