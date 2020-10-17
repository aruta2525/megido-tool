import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 16,
    id: 1,
    name: 'タナトス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7120,
    offense: 1215,
    defense: 424,
    speed: 458,
    ability: {
      name: '死への関心',
      text: 'HP50%以上の対象に1.5倍のダメージ'
    },
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
        name: 'ネクロエッジ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 2
          },
          {
            level: 2,
            magnification: 0.9,
            hit: 2
          },
          {
            level: 3,
            magnification: 1.1,
            hit: 2
          },
          {
            level: 4,
            magnification: 1.3,
            hit: 2
          }
        ]
      },
      {
        name: 'ソウルディーリング＋',
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
        name: 'トーデストリープ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
