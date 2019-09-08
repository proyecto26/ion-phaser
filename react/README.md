# IonPhaser for React

## Introduction
React specific wrapper for [ion-phaser](https://github.com/proyecto26/ion-phaser) component.

## Why?
*Most people who use React don’t use [Web Components](https://reactjs.org/docs/web-components.html)* and there're some limitations handling data with [Custom Components](https://custom-elements-everywhere.com/) from React.
Thus, this **React component** was created not to need to reference their **Custom Elements** using a **ref** and manually attach the **game**, this makes working with [IonPhaser](https://github.com/proyecto26/ion-phaser) not cumbersome 👍🏻

## Usage

```tsx
import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

class App extends Component {

  state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A')
        },
        create: function() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            "Hello World", { 
              font: "40px Arial", 
              fill: "#ffffff" 
            }
          );
          this.helloWorld.setOrigin(0.5);
        },
        update: function() {
          this.helloWorld.angle += 1;
        }
      }
    }
  }

  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}

export default App;
```


## Supporting 🍻
I believe in Unicorns 🦄
Support [me](http://www.paypal.me/jdnichollsc/2), if you do too.
[Professionally supported @ion-phaser/react is coming soon](https://tidelift.com/subscription/pkg/npm--ion-phaser-react?utm_source=npm--ion-phaser-react&utm_medium=referral&utm_campaign=readme)

## Happy coding 💯
Made with ❤️

<img width="150px" src="https://avatars0.githubusercontent.com/u/28855608?s=200&v=4" align="right">
