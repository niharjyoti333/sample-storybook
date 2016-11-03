import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import JForm from './components/shared/JForm';
import JButton from './components/shared/JButton';
import JCInput from './components/shared/JInput';
//import App from './containers/App'
//import configureStore from './store/configureStore'

//const store = configureStore()
render(
	<div>
		<JForm>
			<JButton content="First Button" />
			<JCInput type='text'></JCInput>
		</JForm>
	</div>
	,
  document.getElementById('root')
)
