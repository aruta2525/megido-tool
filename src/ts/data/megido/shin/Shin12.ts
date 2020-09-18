import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 12,
    id: 1,
    name: 'ジニマル',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 5904,
    offense: 859,
    defense: 612,
    speed: 538,
    ability: {name: '蒼海の滅王', text: '行動開始時、40%の確率でスキルが追加される'},
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
        name: 'トーテンタンツ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ギフトヴィアベル＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ティーフゼヴォーゲ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
