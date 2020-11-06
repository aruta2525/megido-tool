import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 65,
    id: 1,
    name: 'ベルフェゴール',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10192,
    offense: 1325,
    defense: 442,
    speed: 363,
    ability: {name: '男の勲章', text: 'HP50%以下のとき、自身のアタックフォトンが強化される'},
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
        name: '冥業四連撃+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 4
          }
        ]
      },
      {
        name: '懶惰の双天秤+',
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
        name: 'アケディック・ロア+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 4,
            hit: 1
          },
          {
            level: 3,
            magnification: 5.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 6.5,
            hit: 1
          },
          {
            level: 5,
            magnification: 7.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
