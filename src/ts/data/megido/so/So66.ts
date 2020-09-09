import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So66: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 66,
    id: 1,
    name: 'キマリス',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 4270,
    offense: 1159,
    deffense: 405,
    speed: 673,
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
        name: 'アマゾネスの槍＋',
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
        name: '微塵粉灰＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: '破壊衝動＋',
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
    no: 66,
    id: 2,
    name: 'キマリス',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 6698,
    offense: 1111,
    deffense: 419,
    speed: 627,
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
        name: '追想の槍＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 2,
            hit: 1
          },
          {
            level: 3,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 4,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: '星下ろしの儀＋',
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
        name: '渾然撃砕＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: '渾然撃砕＋（ソウル2）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 7.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
