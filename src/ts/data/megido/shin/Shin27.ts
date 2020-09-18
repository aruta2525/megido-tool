import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 27,
    id: 1,
    name: 'マルチネ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6697,
    offense: 1353,
    defense: 417,
    speed: 488,
    ability: {name: '特攻少女', text: 'チェイン中に行動する度、覚醒ゲージが+1される'},
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
        name: 'バーニアダンス＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            magnification: 0.75,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'バーニアダンス＋(専用霊宝)',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: 'フルスロットル＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: '祖弐苦武羽霧＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 2,
            hit: 1
          },
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 2.75,
            hit: 1
          },
          {
            level: 3,
            magnification: 3.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 4,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
