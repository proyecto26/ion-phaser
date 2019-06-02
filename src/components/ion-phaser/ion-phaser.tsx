import { Component, Prop, Watch, Element, Method } from '@stencil/core'
import Phaser from 'phaser'
import { GameInstance } from '../models'

@Component({
  tag: 'ion-phaser',
  shadow: false
})
export class IonPhaser {
  /**
   * @property {GameConfig} game - The configuration of the game.
   * @protected
   */
  @Prop({
    mutable: true,
    reflectToAttr: true
  }) game: GameInstance

  /**
   * @property {Boolean} initialize - To initialize the plugin manually.
   * @protected
   */
  @Prop() initialize: boolean = true

  @Watch('initialize')
  onInitialize(initialize: boolean) {
    if (initialize && !this.getInstance()) {
      this.initializeGame()
    }
  }

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
      throw new Error("A game instance is required")
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

  getInstance() {
    return this.game && this.game.instance
  }
}