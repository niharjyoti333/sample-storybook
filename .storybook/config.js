import { configure } from '@kadira/storybook';
import mainStyle from '../styles/index.css';

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
