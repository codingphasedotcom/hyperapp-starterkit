import { h, app } from 'hyperapp';
import Header from './Header.js';
import TopImg from './TopImg.js';
import OurStory from './OurStory.js';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<Header state={state} actions={actions} />
			<TopImg state={state} actions={actions} />
			<OurStory state={state} actions={actions} />
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
