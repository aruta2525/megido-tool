import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So06: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 6,
    id: 1,
    name: 'ウァレフォル',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5855,
    offense: 1150,
    deffense: 287,
    speed: 678,
    ability: {name: '', text: ''},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: 'ワイルドハント＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: '行くよ、野郎ども！＋',
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
        name: 'ロウオブザサバンナ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.2,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  }
];
