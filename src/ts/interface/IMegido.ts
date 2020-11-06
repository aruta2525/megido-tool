import {ICharacter} from './ICharacter';
import {ClockType} from '../enum/Megido';

export interface IMegido extends ICharacter {
  clockType: ClockType;
}
