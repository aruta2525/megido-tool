import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So29: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 29,
    id: 1,
    name: 'アスタロト',
    classType: ClassType.Rush,
    styleType: StyleType.Fighter,
    hp: 7365,
    offense: 1075,
    deffense: 496,
    speed: 476,
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
        name: '元気にしてあげる♪＋',
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
        name: 'ノコ斬り＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極北のブレス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 29,
    id: 2,
    name: 'アスタロト',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 5945,
    offense: 1216,
    deffense: 545,
    speed: 413,
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
        name: '一汗かこうヨ+',
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
        name: '悩殺スカルブレイク+',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極彩ナイトスター+',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.25,
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
