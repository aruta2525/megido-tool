import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So60: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 60,
    id: 1,
    name: 'ウァプラ',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 5948,
    offense: 1375,
    defense: 409,
    speed: 490,
    ability: {name: '一騎当千', text: '敵の数が多いほど、攻撃力が上昇する(最大20％)'},
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
        name: '掻っ切り＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.3,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.45,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.6,
            hit: 1
          }
        ]
      },
      {
        name: '雷霆万鈞＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: '森羅万象+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 60,
    id: 2,
    name: 'ウァプラ',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7826,
    offense: 953,
    defense: 624,
    speed: 381,
    ability: {name: '百戦錬磨', text: '敵の数が多いほど、受けるダメージを軽減する（最大値20%）'},
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
        name: '奪掠＋',
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
        name: '水滴石穿＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 1
          }
        ]
      },
      {
        name: '千山万水＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
