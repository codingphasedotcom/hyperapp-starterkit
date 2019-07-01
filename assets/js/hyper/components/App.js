import { h, app } from 'hyperapp';

export default function App({ state, actions }) {
	return (
		<div class={'app'}>
			<div>
				<h1>Hyperapp Starter Kit</h1>
				<a href="http://www.codingphase.com/" target="new">
					{' '}
					by CodingPhase.com
				</a>
			</div>
			<div className="stars">
				<a
					className="github-button"
					href="https://github.com/codingphasedotcom/hyperapp-starterkit"
					data-size="large"
					data-show-count="true"
					aria-label="Star codingphasedotcom/hyperapp-starterkit on GitHub"
				>
					Star
				</a>
			</div>
		</div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
