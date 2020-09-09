import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So64: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 64,
    id: 1,
    name: 'フラウロス',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 7308,
    offense: 1184,
    deffense: 405,
    speed: 483,
    ability: { name: '', text: '' },
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
        name: '蛇腹剣＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: 'リベンジストライク＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 0,
            magnification: 0.75,
            hit: 5
          },
          {
            level: 1,
            magnification: 0.9,
            hit: 5
          },
          {
            level: 2,
            magnification: 1.05,
            hit: 5
          },
          {
            level: 3,
            magnification: 1.2,
            hit: 5
          },
          {
            level: 4,
            magnification: 1.35,
            hit: 5
          },
          {
            level: 5,
            magnification: 1.5,
            hit: 5
          }
        ]
      },
      {
        name: 'レオパルドブロー＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 64,
    id: 2,
    name: 'フラウロス',
    classType: ClassType.Burst,
    styleType: StyleType.Trooper,
    hp: 7702,
    offense: 1005,
    deffense: 504,
    speed: 485,
    ability: { name: '', text: '' },
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
        name: '水砕剣＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 2
          }
        ]
      },
      {
        name: 'スタグナントビロー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 1
          }
        ]
      },
      {
        name: 'フォールフラッド＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
