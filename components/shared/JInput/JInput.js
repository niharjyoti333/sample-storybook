import React from 'react';
import classNames from 'classnames/bind';
import styles from './JInput.css';

export default React.createClass({
  clickMe(){
  	console.log('value changed ....');
  },
  render() {
    return <div>
    	<input className={styles.test} onChange={this.clickMe} type={this.props.type} value="asd" />
    </div>
  }
});

