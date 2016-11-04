import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import styles from './JInput.css';

class JInput extends Component{
  static PropTypes = {
		className: React.PropTypes.string,
		component: React.PropTypes.element,
		onClick: React.PropTypes.func,
  };
  clickMe(){
  	console.log('value changed ....');
  }
  render() {
    return <div>
    	<input className={styles.test} onChange={this.clickMe} type={this.props.type} value="Welcome to Input Box" />
    </div>
  }
}

export default JInput;