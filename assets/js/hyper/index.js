import { h, app } from 'hyperapp';
import { actions } from './actions/actions.js';
import { globalState } from './state/globalState.js';
import App from './components/App.js';

app({
	state: { globalState },
	view: (state, actions) => <App state={state} actions={actions} />,
	root: document.getElementById('app'),
	actions,
	events: {
		action(state, actions, { name, data }) {
			console.group('Action Info');
			console.log('Name:', name);
			console.log('Data:', data);
			console.groupEnd();
		},
		load(state, actions) {
			actions.intro();
		}
	}
});
