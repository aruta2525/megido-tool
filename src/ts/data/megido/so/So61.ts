import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So61: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 61,
    id: 1,
    name: 'ザガン',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8492,
    offense: 975,
    defense: 472,
    speed: 406,
    ability: {name: 'パソドブレ', text: '15%の確率で攻撃を無効化する'},
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
        name: 'ムレータ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'エスパーダ＋',
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
        name: '止むなき猛進＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 4.75,
            hit: 1
          },
          {
            level: 3,
            magnification: 5.75,
            hit: 1
          },
          {
            level: 4,
            magnification: 6.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
