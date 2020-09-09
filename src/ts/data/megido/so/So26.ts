import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So26: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 26,
    id: 1,
    name: 'ブネ',
    classType: ClassType.Rush,
    styleType: StyleType.Fighter,
    hp: 9049,
    offense: 949,
    deffense: 497,
    speed: 414,
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
        name: '斬撃『一字ノ太刀』＋',
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
        name: '斬撃『兜割ノ太刀』＋',
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
        name: '龍王天懐撃＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 26,
    id: 2,
    name: 'ブネ',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 9000,
    offense: 1430,
    deffense: 420,
    speed: 271,
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
        name: '連撃『双撃ノ太刀』＋',
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
        name: '地這いの剛撃＋',
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
        name: '烈震剛滅破＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 6.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
