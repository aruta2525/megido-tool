import { SkillType, Attribute } from '../enum/MegidoType';

export interface ISkillLevel {
  level: number;
  magnification: number;
  hit: number;
  text?: string;
}

export interface ISkillData {
  name: string;
  type: SkillType;
  attribute?: Attribute;
  increment?: number;
  levels: ISkillLevel[];
  text?: string;
}

export const defaultSkills = [
  {
    name: 'アタック',
    type: SkillType.Atack,
    levels: [
      {
        level: 1,
        magnification: 1,
        hit: 1
      }
    ]
  },
  {
    name: 'スキル',
    type: SkillType.Skill,
    levels: [
      {
        level: 1,
        magnification: 1,
        hit: 1
      }
    ]
  },
  {
    name: '覚醒スキル',
    type: SkillType.AwakeningSkill,
    levels: [
      {
        level: 1,
        magnification: 1,
        hit: 1
      }
    ]
  },
  {
    name: '奥義',
    type: SkillType.Mysteries,
    levels: [
      {
        level: 1,
        magnification: 1,
        hit: 1
      }
    ],
    increment: 0.05
  }
];
