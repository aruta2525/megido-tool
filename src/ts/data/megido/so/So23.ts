import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So23: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 23,
    id: 1,
    name: 'アイム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5630,
    offense: 1171,
    deffense: 426,
    speed: 644,
    ability: {name: '', text: ''},
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
    deffense: 674,
    speed: 280,
    ability: {name: '', text: ''},
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
