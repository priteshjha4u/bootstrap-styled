import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import { makeContainer } from 'bootstrap-styled-mixins/lib/grid';
import { makeTheme } from './theme';


class ContainerFluidUnstyled extends React.Component {    // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    theme: makeTheme(),
  };

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    theme: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      ...attributes
    } = omit(this.props, ['theme']);

    return (
      <div className={cn(className, 'container-fluid')} {...attributes} />
    );
  }
}

const ContainerFluid = styled(ContainerFluidUnstyled)`
  ${(props) => `
    ${makeContainer(
      props.theme['$enable-grid-classes'],
      props.theme['$grid-gutter-widths']
    )}
  `}
`;

export default ContainerFluid;

