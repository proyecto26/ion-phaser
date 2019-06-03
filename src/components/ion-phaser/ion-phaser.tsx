import { Component, Prop, Watch, Element, Method } from '@stencil/core'
import Phaser from 'phaser'
import { GameInstance } from '../models'

@Component({
  tag: 'ion-phaser',
  shadow: false
})
export class IonPhaser {
  /**
   * The configuration of the game
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  }) game: GameInstance

  /**
   * To initialize the plugin manually
   */
  @Prop() initialize: boolean = true

  @Watch('initialize')
  onInitialize(initialize: boolean) {
    if (initialize && !this.getInstance()) {
      this.initializeGame()
    }
  }

  /**
   * Destroy the Phaser game instance
   */
  @Method()
  async destroy() {
    if (this.getInstance()) {
      this.game.instance.destroy(true)
      this.game.instance = null
    }
  }

  @Element() el: HTMLElement

  initializeGame = () => {
    if(!this.game){
      throw new Error("The configuration of the game is required")
    }

    this.game.parent = this.game.parent || this.el
    this.game.instance = new Phaser.Game(this.game)
  }

  componentWillLoad() {
    if (!this.getInstance() && this.initialize) {
      this.initializeGame()
    }
  }

  componentDidUnload() {
    this.destroy()
  }

  /**
   * Get the game instance
   */
  getInstance() {
    return this.game && this.game.instance
  }
}