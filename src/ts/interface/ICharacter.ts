import {ClassType, StyleType} from '../enum/Megido';
import {ISkillData} from './ISkillData';
import {IAbility} from './IAbility';

export interface ICharacter {
  no: number;
  id: number;
  name: string;
  classType: ClassType;
  styleType: StyleType;
  hp?: number;
  offense: number;
  defense: number;
  speed: number;
  ability?: IAbility;
  skills?: ISkillData[];
}
