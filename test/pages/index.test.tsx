import { render, screen } from '../testUtils';

import Home from '../../pages/index';

import { ghosts } from '@app/config/ghosts';
import { evidenceTypes } from '@app/config/evidenceTypes';
import { optionalObjectives } from '@app/config/optionalObjectives';

describe('Home Page', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<Home />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders all ghosts, evidences and objetives', () => {
		render(<Home />);

		const ghostItems = screen.getAllByTestId('ghost-item');
		const evidenceItems = screen.getAllByTestId('evidence-item');
		const objectiveItems = screen.getAllByTestId('objective-item');

		expect(ghostItems).toHaveLength(ghosts.length);
		expect(evidenceItems).toHaveLength(Object.values(evidenceTypes).length);
		expect(objectiveItems).toHaveLength(
			Object.values(optionalObjectives).length
		);
	});
});
