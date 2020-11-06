import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 40,
    id: 1,
    name: 'グザファン',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7070,
    offense: 1144,
    defense: 460,
    speed: 514,
    ability: {
      name: '好戦的な用心棒',
      text: '装備しているオーブが種族に【獣人】を持つ場合、自身の攻撃力を20%上昇する'
    },
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
        name: '華殿閃華＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 4
          }
        ]
      },
      {
        name: '麗扇演舞＋',
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
        name: '流麗万化＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          },
          {
            level: 2,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
