import React,{Component,PropTypes} from 'react';
import classNames from 'classnames/bind';
import styles from './JButton.css';

class JButton extends Component{
  static PropTypes = {
  	clickMe : React.PropTypes.func
  };

  clickMe(){
  	alert('Why did you click me !...');
  }
  render() {
    return <div>
    	<button className={styles.test} onClick={this.clickMe}>{this.props.content}</button>
    </div>
  }
}
  
export default JButton;