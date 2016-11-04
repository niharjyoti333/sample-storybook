import React, {Component, PropTypes} from 'react';
import styles from './JForm.css';

class JForm extends Component{
	static PropTypes = {
		className: React.PropTypes.string,
		component: React.PropTypes.element,
		onClick: React.PropTypes.func,
	};
	
	render(){
		return <form>
			{this.props.children}
		</form>
	}
}

export default JForm;