import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 26,
    id: 1,
    name: 'オレイ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7291,
    offense: 922,
    defense: 538,
    speed: 471,
    ability: {name: '盗争への渇望', text: '執心状態の敵から受けるダメージを25%軽減する'},
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
        name: '華麗なる予告状＋',
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
        name: '奇跡の霊砂＋',
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
        name: 'スティールジオール＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
