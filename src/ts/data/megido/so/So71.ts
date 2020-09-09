import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So71: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 71,
    id: 1,
    name: 'ダンタリオン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7462,
    offense: 1387,
    deffense: 491,
    speed: 270,
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
        name: 'フォールドスロー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'ロブシューター＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: 'エンシェントアーツ＋',
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
    no: 71,
    id: 2,
    name: 'ダンタリオン',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6988,
    offense: 1212,
    deffense: 446,
    speed: 471,
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
        name: 'ハイスロー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 4,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 1,
            hit: 1
          },
          {
            level: 2,
            magnification: 0.75,
            hit: 1
          },
          {
            level: 1,
            magnification: 0.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ファンファダンス＋',
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
        name: 'エイジバースト＋',
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
