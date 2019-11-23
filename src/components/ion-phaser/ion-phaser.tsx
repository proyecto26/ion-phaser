import { Component, Prop, Watch, Element, Method } from '@stencil/core'
import { Game } from 'phaser'
import { GameInstance } from '../models'

@Component({
  tag: 'ion-phaser',
  styleUrl: 'ion-phaser.css',
  shadow: false
})
export class IonPhaser {
  /**
   * The configuration of the game
   */
  @Prop({
    mutable: true,
    reflect: true
  }) game: GameInstance

  @Watch('game')
  onGameChange(game: GameInstance) {
    if (this.initialize && !this.getGameInstance()) {
      this.initializeGame(game)
    }
  }

  /**
   * To initialize the plugin manually
   */
  @Prop() initialize: boolean = true

  @Watch('initialize')
  onInitialize(initialize: boolean) {
    if (initialize && !this.getGameInstance()) {
      this.initializeGame()
    }
  }

  /**
   * Get the Phaser game instance
   */
  @Method()
  async getInstance(): Promise<Game> {
    return Promise.resolve(this.getGameInstance())
  }

  /**
   * Destroy the Phaser game instance
   */
  @Method()
  async destroy(): Promise<void> {
    if (this.getGameInstance()) {
      this.game.instance.destroy(true)
      this.game.instance = null
    }
  }

  @Element() el: HTMLElement

  initializeGame = (game = this.game) => {
    if(!game) return
    if(game.instance){
      throw new Error("A Phaser game already exist")
    }

    game.parent = game.parent || this.el
    game.instance = new Game(game)
  }

  componentWillLoad() {
    if (!this.getGameInstance() && this.initialize) {
      this.initializeGame()
    }
  }

  componentDidUnload() {
    this.destroy()
  }

  getGameInstance() {
    return this.game && this.game.instance
  }
}