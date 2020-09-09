import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So44: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 44,
    id: 1,
    name: 'シャックス',
    classType: ClassType.Counter,
    styleType: StyleType.Fighter,
    hp: 7581,
    offense: 954,
    deffense: 478,
    speed: 501,
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
        name: 'びりびり斬り+',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'もっとびりびり斬り+',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 2
          }
        ]
      },
      {
        name: '電電ぴよ祭り！+',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 4.25,
            hit: 1
          },
          {
            level: 3,
            magnification: 5.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 6.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 44,
    id: 2,
    name: 'シャックス',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 7327,
    offense: 1157,
    deffense: 428,
    speed: 478,
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
        name: 'バリバリ斬り＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 0.5,
            hit: 4
          }
        ]
      },
      {
        name: 'イナズマアタック＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ピヨピヨフェス＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 0,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 1,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 3.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
