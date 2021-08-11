import {ICharacter} from './ICharacter';
import {ISkillData} from './ISkillData';
import {ClockType} from '../enum/Megido';

export interface IMegido extends ICharacter {
  skills: ISkillData[];
  clockType: ClockType;
}
