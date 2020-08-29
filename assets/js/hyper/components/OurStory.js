import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section class="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5>Our Story</h5>
						<h2>Cooking is the Art of Adjustment</h2>
						<p>
							Vinyl hell of portland selfies, echo park franzen try-hard
							mustache cornhole pok pok authentic sartorial put a bird on it
							actually. Brooklyn ugh put a bird on it pug vexillologist
							sriracha. Bushwick vaporware actually fixie XOXO cardigan. Shabby
							chic helvetica street art chambray church-key bespoke sriracha
							actually YOLO bitters pitchfork beard food truck seitan next
							level. Taxidermy ramps artisan YOLO letterpress.
						</p>
						<div class="quote">There's meat and there's premium - Sam Lee</div>
						<a href="#" class="reserve-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
