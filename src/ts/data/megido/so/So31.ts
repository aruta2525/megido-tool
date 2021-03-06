import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So31: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 31,
    id: 1,
    name: 'フォラス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5724,
    offense: 746,
    defense: 491,
    speed: 691,
    ability: {name: '好奇心旺盛', text: 'オーブの使用可能までのターンを-1する'},
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
        name: 'デトネーション＋',
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
        name: 'ワイドマジック＋',
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
        name: 'クラッシュハンマー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
