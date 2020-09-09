import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So57: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 57,
    id: 1,
    name: 'オセ',
    classType: ClassType.Rush,
    styleType: StyleType.Fighter,
    hp: 7351,
    offense: 1152,
    deffense: 283,
    speed: 614,
    ability: { name: '', text: '' },
    skills: [
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
        name: 'ポイズンクロー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'マッハクロー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: '猛りの暴獣爪＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  }
];
