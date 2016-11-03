import React from 'react';
import classNames from 'classnames/bind';
import styles from './JButton.css';

export default React.createClass({
  clickMe(){
  	alert('Why did you click me !...');
  },
  render() {
    return <div>
    	<button className={styles.test} onClick={this.clickMe}>{this.props.content}</button>
    </div>
  }
});

