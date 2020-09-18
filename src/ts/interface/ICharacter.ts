import { ClassType, StyleType } from '../enum/MegidoType';
import { ISkillData } from './ISkillData';

export interface ICharacter {
  no: number;
  id: number;
  name: string;
  classType: ClassType;
  styleType: StyleType;
  hp?: number;
  offense: number;
  defense: number;
  speed?: number;
  ability?: {
    name: string;
    text: string;
  };
  skills?: ISkillData[];
}
