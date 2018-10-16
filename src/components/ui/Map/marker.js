// @flow

import React, { PureComponent } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MarkerContainer extends PureComponent {
  state = {
    isOpen: true,
  };
  onToggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { marker } = this.props;

    return (
      <Marker {...marker} onClick={this.onToggleOpen}>
        {this.state.isOpen && (
          <InfoWindow onCloseclick={this.onToggleOpen}>
            <div>Mihai Eminescu 35, Chișinău</div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}
export default MarkerContainer;
