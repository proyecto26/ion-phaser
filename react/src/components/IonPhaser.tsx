import React from 'react';
import { Game } from 'phaser';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'ion-phaser': any
    }
  }
}

interface Props {
  game?: Game;
}

class IonPhaser extends React.Component<Props> {
  ref = React.createRef();

  componentWillReceiveProps(nextProps: Props) {
    const node = this.ref.current as Props
    if (node.game !== nextProps.game) {
      node.game = nextProps.game
    }
  }

  public render(): React.ReactNode {
    return (
      <ion-phaser
        ref={this.ref}
        {...this.props}
      />
    );
  }
};

export default IonPhaser;