import React, { Component } from 'react';
import MaterialesList from './MaterialesList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Material Create Form</div>
        <MaterialesList />
      </div>
    );
  }
}

export default Dashboard;