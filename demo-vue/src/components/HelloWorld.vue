<template>
  <div class="App">
  <header class="App-header">
    <template v-if="!initialize">
      <img src="../assets/logo.png" class="App-logo" alt="logo" />
      <div @click="initializeGame" class="flex">
        <a href="#1" class="bttn">Initialize</a>
      </div>
    </template>
    <ion-phaser 
      v-bind:game.prop="game"
      v-bind:initialize.prop="initialize"
    />
  </header>
</div>
</template>

<script>
import Phaser from 'phaser'
export default {
  name: 'HelloWorld',
  data() {
    return {
      initialize: false,
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
  },
  methods: {
    initializeGame: function() {
      this.initialize = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 26vmin;
  pointer-events: none;
  margin: 50px;
}

.App-header {
  background-color: #F5F0FF;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #282c34;
}

.App-link {
  color: #61dafb;
}

.dark {
  background: #24252A;
}

.flex {
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

a.bttn {
  color: #FF0072;
  text-decoration: none;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s ease all;
}
a.bttn:hover {
  color: #FFF;
}
a.bttn:focus {
  color: #FFF;
}

a.bttn-dark {
  color: #644cad;
  text-decoration: none;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s ease all;
}
a.bttn-dark:hover {
  color: #FFF;
}
a.bttn-dark:focus {
  color: #FFF;
}

.bttn {
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  width: 270px;
  font-weight: bold;
  padding: 14px 0px;
  border: 3px solid #FF0072;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
}
.bttn:before {
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF0072;
  z-index: -2;
}
.bttn:hover:before {
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}
.bttn:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
