import React from 'react';
import styles from './JForm.css';

export default React.createClass({
	render(){
		return <form>
			{this.props.children}
		</form>
	}
});