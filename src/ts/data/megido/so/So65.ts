import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So65: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 65,
    id: 1,
    name: 'アンドレアルフス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 9087,
    offense: 988,
    defense: 285,
    speed: 637,
    ability: {name: 'クロスカウンター', text: '攻撃を受けたとき、20%の確率で反撃する'},
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
        name: 'コンビネーション＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 4
          }
        ]
      },
      {
        name: 'レックレスラッシュ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 6
          }
        ]
      },
      {
        name: 'フェザーシールド＋',
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
