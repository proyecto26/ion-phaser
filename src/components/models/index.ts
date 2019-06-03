import * as Phaser from 'phaser'

type ObjectAlias = Object;

export interface GameInstance extends Phaser.Types.Core.GameConfig, ObjectAlias {
  instance: Phaser.Game
}