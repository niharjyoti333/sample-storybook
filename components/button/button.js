import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import blacklist from 'blacklist';
import styles from '../styles/button.scss';

const BUTTON_SIZES = ['lg', 'sm', 'xs'];

const BUTTON_TYPES = [
	'default',
	'default-primary',
	'default-success',
	'default-warning',
	'default-danger',
	'hollow-primary',
	'hollow-success',
	'hollow-warning',
	'hollow-danger',
	'primary',
	'success',
	'warning',
	'danger',
	'link',
	'link-text',
	'link-primary',
	'link-success',
	'link-warning',
	'link-danger',
	'link-cancel',
	'link-delete',
];

class button extends Component{
	static PropTypes = {
		block: React.PropTypes.bool,
		className: React.PropTypes.string,
		component: React.PropTypes.element,
		href: React.PropTypes.string,
		isActive: React.PropTypes.bool,
		size: React.PropTypes.oneOf(BUTTON_SIZES),
		submit: React.PropTypes.bool,
		type: React.PropTypes.oneOf(BUTTON_TYPES),
		onClick: React.PropTypes.func,
		onMouseOver: React.PropTypes.func
	};
	static defaultProps = {
		type: 'default',
	};
	constructor(){
		super();
	};
	render(){
		let cx = classNames.bind(styles);
		let componentClass = cx(
			'Button',
			'Button--' + this.props.type,
			(this.props.size ? 'Button--' + this.props.size : null),
			{
				'Button--block': this.props.block,
				'is-active': this.props.isActive,
			},
			this.props.className
		);

		// props
		let props = blacklist(this.props, 'block', 'isActive', 'type', 'size', 'component', 'className', 'submit')
		props.className = componentClass;

		if (this.props.component) {
			return React.cloneElement(this.props.component, props);
		}

		let tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			delete props.type;
		}

		return React.createElement(tag, props, this.props.children);
	}
}

export default button;