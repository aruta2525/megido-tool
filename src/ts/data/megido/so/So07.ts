import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So07: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 7,
    id: 1,
    name: 'アモン',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 4598,
    offense: 1194,
    deffense: 417,
    speed: 685,
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
        name: '巾着切り+',
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
        name: 'ダーティレイド+',
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
        name: '世界を包む炎獄+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 7,
    id: 2,
    name: 'アモン',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6039,
    offense: 1200,
    deffense: 420,
    speed: 627,
    ability: {name: '', text: ''},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 3
          }
        ]
      },
      {
        name: 'クレセント＋',
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
        name: 'サイレンスリーパー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: 'リヴィールエッジ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.2,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  }
];
