import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So38: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 38,
    id: 1,
    name: 'ハルファス',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 6022,
    offense: 1400,
    deffense: 643,
    speed: 269,
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
        name: '地裂斬＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.05,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: 'ギガントアクス＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          }
        ]
      },
      {
        name: 'アニマルボンバー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  }
];
