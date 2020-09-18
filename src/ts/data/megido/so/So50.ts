import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So50: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 50,
    id: 1,
    name: 'フルカス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7649,
    offense: 1190,
    defense: 406,
    speed: 477,
    ability: {name: '撲殺気分', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: 'ミートスパイク＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 2
          },
          {
            level: 2,
            magnification: 0.7,
            hit: 2
          },
          {
            level: 3,
            magnification: 0.8,
            hit: 2
          },
          {
            level: 4,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: 'マッドスラローム＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'メルティアサルト＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  }
];
