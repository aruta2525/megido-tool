import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So43: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 43,
    id: 1,
    name: 'サブナック',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8573,
    offense: 751,
    deffense: 682,
    speed: 274,
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
        name: 'エリアディフェンス＋',
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
        name: 'イージスブロー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          },
          {
            level: 1,
            magnification: 1.65,
            hit: 2
          },
          {
            level: 1,
            magnification: 1.9,
            hit: 2
          },
          {
            level: 1,
            magnification: 2.15,
            hit: 2
          }
        ]
      },
      {
        name: 'フォートレス＋',
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
