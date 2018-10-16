// @flow

import React, { PureComponent, createContext } from 'react';

console.log(React.version);

const { Provider, Consumer } = createContext({
  isOpen: false,
});

type Props = {
  children?: any,
};

type State = {
  isOpen: boolean,
};

class SidebarProvider extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      open: this.open,
      close: this.close,
      toggle: this.toggle,
      isOpen: false,
    };
  }

  open = () => {
    this.setState({ isOpen: true });
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer };

export default SidebarProvider;
