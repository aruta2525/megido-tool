import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So67: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 67,
    id: 1,
    name: 'アムドゥスキアス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7171,
    offense: 756,
    defense: 500,
    speed: 645,
    ability: {name: '漆黒の翼', text: '自身の素早さが30%上昇する'},
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
        name: '伏魔殿の結界+',
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
        name: '眷属の帳+',
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
        name: 'ウィンドスピナー+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
