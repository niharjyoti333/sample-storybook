import React , {Component,PropTypes} from 'react';
import styles from './JSelect.css';

class JSelect extends Component{

	ComponentWillRecieveProps(){

	}
	optionChanged(){
		alert('Are you sure to change this ...!!');
	}
	render(){
		return <select className={styles.test} onChange={this.optionChanged}>
			 {this.props.options.map(function(i,v){
			 	return <option value={i.val} key={i.val}>{i.display}</option>
			 })}
		</select>
	}
}

export default JSelect;