import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 34,
    id: 1,
    name: 'マスティマ',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7587,
    offense: 1072,
    defense: 496,
    speed: 492,
    ability: {
      name: '悲劇の騎士',
      text: 'ソウルの数が多いほど自身の攻撃力が上昇する【1つにつき+5%、最大30%】'
    },
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
        name: '嘆きの宣誓＋',
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
        name: '戒めの魔蔦＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.3,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.6,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.9,
            hit: 1
          }
        ]
      },
      {
        name: '悲劇の発露＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 2
          }
        ],
        increment: 0.025
      },
      {
        name: '悲劇の発露＋(ネクロ)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  }
];

export default megido;
