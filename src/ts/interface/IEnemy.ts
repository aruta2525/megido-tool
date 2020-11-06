import {ICharacter} from './ICharacter';
import {Stage, DifficultyLevel} from '../enum/Stage';

export interface IEnemy extends ICharacter {
  stage: Stage;
  difficultyLevel: DifficultyLevel;
  hp: number;
  defense: number;
}
