import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../button/button';
import mainStyle from '../../styles/index.css';


  storiesOf('Button', module)
  .add('All button style', () => (
    <div className={mainStyle.mr}><Button size="lg" onClick={action('onClick')}>Large Button</Button>
<Button>Default Button</Button>
<Button size="sm">Small Button</Button>
<Button size="xs">Extra Small Button</Button>
<div><h3>Next button</h3></div>
<Button onMouseOver={ linkTo('Button', 'Variants button') }>Next Story</Button>
<div><h3>Variants button</h3></div>
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<div><h3>Default button Alternatives</h3></div>
<Button type="default-primary">Default Primary</Button>
<Button type="default-success">Default Success</Button>
<Button type="default-warning">Default Warning</Button>
<Button type="default-danger">Default Danger</Button>
<div><h3>Link style button</h3></div>
<Button type="link">Link</Button>
<Button type="link-text">Link Text</Button>
<Button type="link-primary">Link Primary</Button>
<Button type="link-success">Link Success</Button>
<Button type="link-warning">Link Warning</Button>
<Button type="link-danger">Link Danger</Button>
<Button type="link-cancel">Link Cancel</Button>
<Button type="link-delete">Link Delete</Button>
<div><h3>Link  button</h3></div>
<Button size="sm" type="success" href="http://www.google.com">link Button</Button>
</div>
))