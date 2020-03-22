import { withKnobs } from '@storybook/addon-knobs';
import { withQuery } from '@storybook/addon-queryparams';
import { addDecorator, configure } from '@storybook/react';
import ThemeDecorator from '../src/stories/ThemeDecorator';

addDecorator(withQuery);
addDecorator(withKnobs);
addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.(js|tsx)$/), module);
