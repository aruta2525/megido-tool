import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So46: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 46,
    id: 1,
    name: 'ビフロンス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7604,
    offense: 1189,
    deffense: 493,
    speed: 424,
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
        name: 'ソウルテイカー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 2
          }
        ]
      },
      {
        name: 'デスサイズ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ダークコフィン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.45,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 46,
    id: 2,
    name: 'ビフロンス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 6422,
    offense: 1214,
    deffense: 464,
    speed: 468,
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
        name: 'ソウルシャイン＋',
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
        name: 'グリムサイズ＋',
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
        name: 'プシュケダージ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          },
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          },
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*
 */
