import React from 'react';
import Phaser from 'phaser';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'ion-phaser': any
    }
  }
}

interface Props {
  game?: Phaser.Game;
}

class IonPhaserComponent extends React.Component<Props> {
  ref = React.createRef<Props>();

  updateGame (nextProps: Props) {
    const node = this.ref.current;
    if (!node.game && nextProps.game) {
      node.game = nextProps.game;
    }
  }

  componentDidMount () {
    this.updateGame(this.props);
  }

  componentDidUpdate () {
    this.updateGame(this.props);
  }

  public render (): React.ReactNode {
    return (
      <ion-phaser
        ref={this.ref}
        {...this.props}
      />
    );
  }
};

export default IonPhaserComponent;