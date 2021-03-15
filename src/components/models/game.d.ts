import { Game, Types } from 'phaser'

export interface GameInstance extends Types.Core.GameConfig {
  instance?: Game
}