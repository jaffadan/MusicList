import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import './css/musiclist.scss';
import Template from './components/Template.jsx';

const renderApp = (Component) => {
	render(
		<AppContainer>
			<Component headline="Test Headline" count={1234673} showCount/>
		</AppContainer>,
			document.querySelector('#react-app'),
		);
};

renderApp(Template)

if (module && module.hot) {
	module.hot.accept('./components/Template.jsx', () => {
		renderApp(Template);
	});

};
