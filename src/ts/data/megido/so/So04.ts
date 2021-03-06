import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So04: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 4,
    id: 1,
    name: 'ガミジン',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8729,
    offense: 1193,
    defense: 418,
    speed: 417,
    ability: {name: '強襲ヒット【専用霊宝】', text: '自身より防御力が低い対象へのダメージが150%上昇する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'スマッシュ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.55,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'フルスイング＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'ブラッドネメシス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  }
];
