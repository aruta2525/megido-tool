import {ICharacter} from './ICharacter';
import {ClockType} from '../enum/MegidoType';

export interface IMegido extends ICharacter {
  clockType: ClockType;
}
