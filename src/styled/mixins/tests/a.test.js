import { fromJS } from 'immutable';
import { a, defaultProps } from '../a';

describe('bootstrap a utility', () => {
  it('should return a a utility css', () => {
    const css = a(
      defaultProps['$link-color'],
      defaultProps['$link-decoration'],
      defaultProps['$link-hover-color'],
      defaultProps['$link-hover-decoration'],
      defaultProps['$enable-hover-media-query'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(914075158);
  });
  it('should return a a utility css by default', () => {
    const css = a();
    expect(fromJS({ css }).hashCode()).toEqual(914075158);
  });
});