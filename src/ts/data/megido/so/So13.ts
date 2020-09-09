import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So13: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 13,
    id: 1,
    name: 'ベレト',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 5968,
    offense: 1206,
    deffense: 411,
    speed: 626,
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
        name: 'レイジスタンプ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.55,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '狂喜の怒り＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'リアニメイター＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0
      }
    ]
  }
];
