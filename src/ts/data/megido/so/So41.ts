import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So41: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 41,
    id: 1,
    name: 'フォカロル',
    classType: ClassType.Burst,
    styleType: StyleType.Trooper,
    hp: 7601,
    offense: 993,
    deffense: 504,
    speed: 487,
    ability: { name: '', text: '' },
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
        name: 'ギアバースト＋',
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
        name: 'フェイタルブレード＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 5
          }
        ]
      },
      {
        name: 'ゲイルウィング＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 41,
    id: 2,
    name: 'フォカロル',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 7219,
    offense: 728,
    deffense: 507,
    speed: 626,
    ability: { name: '', text: '' },
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
        name: 'トリガーオン＋',
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
        name: 'フェイタルブラスト＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.3,
            hit: 2
          }
        ]
      },
      {
        name: 'フェイタルブラスト＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'クリティカルブロウ＋',
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
