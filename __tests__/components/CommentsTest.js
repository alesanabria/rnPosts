import React from 'react';
import renderer from 'react-test-renderer';
import Comment from '../../src/components/comments/comment';

describe('Comments components', () => {
  it('should render a comment', () => {
    const component = renderer.create(<Comment/>).toJSON()
    expect(component).toMatchSnapshot();
  })
})
