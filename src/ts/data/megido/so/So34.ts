import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So34: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 34,
    id: 1,
    name: 'フルフル',
    classType: ClassType.Burst,
    styleType: StyleType.Sniper,
    hp: 8688,
    offense: 1178,
    deffense: 487,
    speed: 285,
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
        name: 'うたた寝＋',
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
        name: '召雷針＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          }
        ]
      },
      {
        name: '召雷針＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          }
        ]
      },
      {
        name: 'カオティックレイ＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 34,
    id: 2,
    name: 'フルフル',
    classType: ClassType.Counter,
    styleType: StyleType.Sniper,
    hp: 8517,
    offense: 1089,
    deffense: 524,
    speed: 308,
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
        name: '常在就寝＋（スキルブレイク）',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          }
        ]
      },
      {
        name: '雷召電弧＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ケイオスボルト＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 2
          },
          {
            level: 2,
            magnification: 2.25,
            hit: 4
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 6
          }
        ],
        increment: 0.05
      }
    ]
  }
];
