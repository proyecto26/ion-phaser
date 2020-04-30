import { Component, Prop, Watch, Element, Method } from '@stencil/core'
import { Game } from 'phaser'
import { GameInstance } from '../models'

@Component({
  tag: 'ion-phaser',
  styleUrl: 'ion-phaser.css',
  shadow: false
})
export class IonPhaser {
  @Element() el!: HTMLIonPhaserElement

  /**
   * Set the configuration of the game
   */
  @Prop({
    mutable: true,
    reflect: true
  }) game?: GameInstance

  @Watch('game')
  onGameChange(game: GameInstance) {
    if (this.initialize && !this.hasInitialized()) {
      this.initializeGame(game)
    }
  }

  /**
   * Initialize the phaser game manually
   */
  @Prop() initialize?: boolean = true

  @Watch('initialize')
  onInitialize(newInitialize: boolean, oldInitialize: boolean) {
    if (newInitialize && !oldInitialize) {
      this.initializeGame()
    }
  }

  /**
   * Get the Phaser game instance
   */
  @Method()
  async getInstance(): Promise<Game> {
    const { instance } = this.game || {}
    return Promise.resolve(instance)
  }

  /**
   * Destroy the Phaser game instance
   */
  @Method()
  async destroy(): Promise<void> {
    if (this.hasInitialized()) {
      this.game.instance.destroy(true)
      this.game.instance = null
    }
  }

  componentWillLoad() {
    if (!this.hasInitialized() && this.initialize) {
      this.initializeGame()
    }
  }

  componentDidUnload() {
    this.destroy()
  }

  private hasInitialized(): boolean {
    return (
      this.game &&
      this.game.instance !== undefined &&
      this.game.instance !== null
    )
  }

  private initializeGame = (game = this.game) => {
    if(game === null || game === undefined) return
    if(game.instance !== undefined && game.instance !== null) {
      throw new Error("A Phaser game already exist")
    }

    game.parent = game.parent || this.el
    game.instance = new Game(game)
  }
}