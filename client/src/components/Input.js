import React, { Component } from 'react';
import styled from 'styled-components';
import is from 'styled-is';
import PropTypes from 'prop-types';

const PlainInput = styled.input`
  background-color: #ffffff;
  font-size: ${props => props.theme.fsReg};
  color: ${props => props.theme.dark};
  height: 3.5rem;
  padding: 0 1rem;
  border: 1px solid ${props => props.focused === true ? props.theme.alt : 'transparent'};
  ${is('half')`
    width: calc(50% - 1rem);
  `}
`;

export default class Input extends Component {
  static defaultProps = {
    isError: false,
  }

  static propTypes = {
    isError: PropTypes.bool,
  }

  state = {
    isFocused: false,
  }

  focus = () => {
    this.setState({
      isFocused: true,
    });
  }

  unfocus = () => {
    this.setState({
      isFocused: false,
    });
  }

  render() {
    return (
      <PlainInput
        focused={this.state.isFocused}
        onFocus={this.focus}
        onBlur={this.unfocus}
        {...this.props}
      />
    );
  }
}
