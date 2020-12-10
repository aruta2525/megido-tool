import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So06: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 6,
    id: 1,
    name: 'ウァレフォル',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5855,
    offense: 1150,
    defense: 287,
    speed: 678,
    ability: {name: '弱肉強食', text: '獣人系のモンスターに2倍のダメージ'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
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
