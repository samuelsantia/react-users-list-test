import React from 'react';
import { render } from '@testing-library/react';
import { find } from 'styled-components/test-utils';
import 'jest-styled-components';

import AppHeader, {
  HeaderWrapper,
  HeaderStartSide,
  HeaderCenterSide,
  HeaderEndSide,
} from './AppHeader';

const getTag = (element) => element.tagName.toLowerCase();
const findStyled = (Styled) => (element) => find(element, Styled);
const findWrapper = findStyled(HeaderWrapper);
const findStartSide = findStyled(HeaderStartSide);
const findCenterSide = findStyled(HeaderCenterSide);
const findEndSide = findStyled(HeaderEndSide);

describe('<AppHeader />', () => {
  it('should render styled wrapper with sides', () => {
    const { container } = render(<AppHeader />);

    const wrapper = findWrapper(container);
    const startSide = findStartSide(wrapper);
    const centerSide = findCenterSide(wrapper);
    const endSide = findEndSide(wrapper);

    expect(getTag(wrapper)).toBe('header');
    // right order
    expect([...wrapper.children]).toEqual([startSide, centerSide, endSide]);
  });

  it('should render start content', () => {
    const content = <p>test</p>;
    const { container } = render(<AppHeader start={content} />);

    const rendererContent = findStartSide(container).firstChild;
    expect(getTag(rendererContent)).toBe('p');
    expect(rendererContent).toHaveTextContent('test');
  });

  it('should render center content passed as children', () => {
    const content = <p>test</p>;
    const { container } = render(<AppHeader>{content}</AppHeader>);

    const rendererContent = findCenterSide(container).firstChild;
    expect(getTag(rendererContent)).toBe('p');
    expect(rendererContent).toHaveTextContent('test');
  });

  it('should render end content', () => {
    const content = <p>test</p>;
    const { container } = render(<AppHeader end={content} />);

    const rendererContent = findEndSide(container).firstChild;
    expect(getTag(rendererContent)).toBe('p');
    expect(rendererContent).toHaveTextContent('test');
  });

  it('should match snapshot', () => {
    const { container } = render(
      <AppHeader start="Start" end="Ends">
        Content
      </AppHeader>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
