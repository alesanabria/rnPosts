import React from 'react';
import renderer from 'react-test-renderer';
import Posts from '../../src/components/posts/posts';
import Favorites from '../../src/components/posts/favorites';
import Tabs from '../../src/components/posts/tabs';

describe('Posts components', () => {

  it('should render posts', () => {
    const component = renderer.create(<Posts />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it('should render favorites', () => {
    const component = renderer.create(<Favorites />).toJSON();
    expect(component).toMatchSnapshot();
  })


  it('should render tabs', () => {
    const component = renderer.create(<Tabs />).toJSON();
    expect(component).toMatchSnapshot();
  })

})