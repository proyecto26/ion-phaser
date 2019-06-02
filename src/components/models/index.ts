import { Game, Types } from 'phaser'

type ObjectAlias = Object;

export interface GameInstance extends Types.Core.GameConfig, ObjectAlias {
  instance: Game
}