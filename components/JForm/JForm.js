import React, {Component, PropTypes} from 'react';
import styles from './JForm.css';

class JForm extends Component{
	static PropTypes = {
		className: React.PropTypes.string,
		component: React.PropTypes.element,
		onClick: React.PropTypes.func,
	};
	
	fSubmit(eve){
		eve.preventDefault();
	}
	render(){
		return <form onSubmit={this.fSubmit}>
			{this.props.children}
		</form>
	}
}

export default JForm;