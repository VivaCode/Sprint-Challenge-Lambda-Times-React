import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import '../../CSS/index.css';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">  
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab key={tab} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </div>
    </div>
  );
}; 

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
}
export default Tabs;
