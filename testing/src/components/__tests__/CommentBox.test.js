import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

//the pattern in this file
  //beforeEach
  //then the it statements
  //then afterEach

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and two buttons', () => {
  //this is how you console.log
  //console.log(wrapped.find('textarea'))
  //console.log(wrapped.find('button'))
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    //beforeEach we are resetting and rerendering the this.state.comment's value
    //if it's onChange, use "change"
    //if it's onClick, use "click"
    //this will be modifying the event.target.value
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    //needs this update action to rerender - force it to rerender
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    //this is where we varify that the textarea got the change
    //prop value - we are retrieving the prop value that we changed/updated
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
