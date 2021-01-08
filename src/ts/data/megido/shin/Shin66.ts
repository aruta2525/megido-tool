import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 66,
    id: 1,
    name: 'マモン☆4',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 5547,
    offense: 940,
    defense: 365,
    speed: 354,
    ability: {
      name: '鉄火の貴婦人',
      text: '味方編成がバレットアーツ状態中、バレットが1個以上あるとき、アタック時、バレットを1個消費する'
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
        name: 'クロススリンガー+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 4
          }
        ]
      },
      {
        name: 'ガン・ホー・ダイ',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 0,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.25,
            hit: 3
          }
        ]
      },
      {
        name: 'ゴールデンハント(Bアーツ)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 1.1,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.1,
            hit: 2
          },
          {
            level: 2,
            magnification: 1.1,
            hit: 3
          },
          {
            level: 3,
            magnification: 1.1,
            hit: 4
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
