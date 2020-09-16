import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So52: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 52,
    id: 1,
    name: 'アロケル',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 7110,
    offense: 1199,
    deffense: 500,
    speed: 427,
    ability: {name: '天才的センス', text: 'HPが20%上昇する'},
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
        name: 'あとは任せた！＋',
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
        name: '少し本気出す！＋',
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
        name: '復讐剣バルムンク＋（最大）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 11.5,
            hit: 1
          }
        ],
        increment: 0.1
      }
    ]
  }
];
