import { Game, Types } from 'phaser';

export * from './components';
export interface GameInstance extends Types.Core.GameConfig {
  instance?: Game;
}