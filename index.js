import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import JForm from './components/JForm';
import JButton from './components/JButton';
import JCInput from './components/JInput';
import JCTable from './components/JTable';
import JCAutoSuggest from './components/JAutoSuggest';
import JCSelect from './components/JSelect';
//import App from './containers/App'
//import configureStore from './store/configureStore'

//const store = configureStore()
let optData = [	
				{display:"India",val:"ind"},
				{display:"Austrlia",val:"aus"},
				{display:"Asia Pacific",val:"APAC"},
				{display:"Dallas",val:"ds"}
];
render(
	<div>
		<JForm>
			<JButton content="First Button" />
			<JCTable />
			<JCAutoSuggest />
			<JCSelect options={optData}/>
		</JForm>
	</div>
	,
  document.getElementById('root')
)
