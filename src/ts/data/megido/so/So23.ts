import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So23: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 23,
    id: 1,
    name: 'アイム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5630,
    offense: 1171,
    defense: 426,
    speed: 644,
    ability: {name: '焔の担い手', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: '強火クッキング＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.75,
            hit: 1
          },
          {
            level: 4,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: '太陽の種火＋',
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
        name: '炎天の煌めき＋',
        type: SkillType.Mysteries,
        increment: 0.05,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 23,
    id: 2,
    name: 'アイム',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 8455,
    offense: 751,
    defense: 674,
    speed: 280,
    ability: {name: '洗浄の天使', text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'},
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
        name: 'ブレンドウォッシュ＋',
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
        name: 'シュトロームテイル＋',
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
        name: '清浄のセメンテリオ＋',
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
  }
];
