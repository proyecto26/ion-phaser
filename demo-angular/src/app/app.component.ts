import { Component } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialize = false;
  game = {
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

  initializeGame() {
    this.initialize = true

    setTimeout(() => {
      console.log(this.game.instance)
    }, 3000)
  }
}
