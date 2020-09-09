import { ClassType, StyleType, ClockType } from '../enum/MegidoType';
import { ISkillData } from './ISkillData';

export interface ICharacter {
  clockType: ClockType;
  no: number;
  id: number;
  name: string;
  classType: ClassType;
  styleType: StyleType;
  hp?: number;
  offense: number;
  deffense: number;
  speed?: number;
  ability?: {
    name: string;
    text: string;
  };
  skills?: ISkillData[];
}
