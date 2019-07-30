import { Component } from '@angular/core';
import * as Phaser from 'phaser';

interface GameScene extends Phaser.Scene {
  setAngle?: Function
}

interface GameInstance extends Phaser.Types.Core.GameConfig {
  instance: Phaser.Game,
  scene: GameScene | Phaser.Types.Scenes.CreateSceneFromObjectConfig
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialize = false;
  game : GameInstance = {
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
    },
    instance: null
  }

  getInstance() {
    return this.game.instance
  }

  initializeGame() {
    this.initialize = true
  }

  changeAngle () {
    const instance = this.getInstance()
    const scene: any = instance.scene.getAt(0)
    scene.helloWorld.angle = 0;
  }
}
