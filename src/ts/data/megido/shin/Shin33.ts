import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 33,
    id: 1,
    name: 'ハック',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8902,
    offense: 1001,
    defense: 287,
    speed: 629,
    ability: {name: '指導者の矜持', text: '致死ダメージを受けたとき、生存している味方が多いほど、高確率で踏みとどまる(最大40%)'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: '筋骨隆々の舞＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          }
        ]
      },
      {
        name: 'かかってこんかい！＋(最大)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 5.75,
            hit: 1
          }
        ]
      },
      {
        name: '根源なる筋肉の胎動＋',
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
