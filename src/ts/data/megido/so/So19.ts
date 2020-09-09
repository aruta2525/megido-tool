import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So19: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 19,
    id: 1,
    name: 'サレオス',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 8474,
    offense: 945,
    deffense: 490,
    speed: 424,
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
        name: '臨兵闘者皆陣列在前+',
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
        name: '三途の川渡し+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: '腐食のブレス+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 19,
    id: 2,
    name: 'サレオス',
    classType: ClassType.Counter,
    styleType: StyleType.Fighter,
    hp: 8330,
    offense: 881,
    deffense: 525,
    speed: 479,
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
        name: '水神の怒り＋',
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
        name: 'マントラ＋',
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
        name: '三途の濁流＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
