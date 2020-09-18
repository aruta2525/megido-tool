import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So24: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 24,
    id: 1,
    name: 'ナベリウス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7544,
    offense: 948,
    defense: 501,
    speed: 503,
    ability: {name: '調教師', text: 'オーブの使用可能までのターンを-1する'},
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
        name: 'ムーンサルト＋',
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
        name: 'ブレイクスナップ＋',
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
        name: '番犬の咆哮＋',
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
