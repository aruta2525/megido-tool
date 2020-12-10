import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 24,
    id: 1,
    name: 'ミノソン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 9084,
    offense: 1077,
    defense: 482,
    speed: 404,
    ability: {
      name: 'カジノの女王',
      text: '自身に万雷の加護の地形があるとき、全ての状態異常耐性が100%上昇する'
    },
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
        name: 'ジャックポットレイ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          },
          {
            level: 2,
            magnification: 0.9,
            hit: 3
          },
          {
            level: 3,
            magnification: 0.9,
            hit: 4
          },
          {
            level: 4,
            magnification: 0.9,
            hit: 5
          }
        ]
      },
      {
        name: 'フィーバータイム！＋',
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
        name: 'ノー・モア・ベット＋',
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
