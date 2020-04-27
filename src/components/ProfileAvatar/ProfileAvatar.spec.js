import React from 'react';
import { render } from '@testing-library/react';
import ProfileAvatar from './ProfileAvatar';

describe('<ProfileAvatar />', () => {
  it('should render a div wrapper', () => {
    const { container } = render(
      <ProfileAvatar src="/test" alt="Test Profile Avatar" />
    );
    const wrapper = container.firstChild;

    expect(wrapper.tagName.toLowerCase()).toBe('div');
  });

  it('should render an img with passed src and alt', () => {
    const src = '/test';
    const alt = 'Test profile avatar';
    const { container } = render(<ProfileAvatar src={src} alt={alt} />);
    const img = container.firstChild.firstChild;

    expect(img.tagName.toLowerCase()).toBe('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(alt);
  });
});
