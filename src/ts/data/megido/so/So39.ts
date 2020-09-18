import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So39: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 39,
    id: 1,
    name: 'マルファス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7461,
    offense: 981,
    defense: 504,
    speed: 499,
    ability: {name: '天駆ける者', text: '自身の攻撃力が15％上昇する'},
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
        name: 'キャプチャー+',
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
        name: 'レナスリング+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'コロッサスレイ+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  }
];
