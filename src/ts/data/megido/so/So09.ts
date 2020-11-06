import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So09: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 9,
    id: 1,
    name: 'パイモン',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7172,
    offense: 1191,
    defense: 420,
    speed: 472,
    ability: {name: 'プレイボーイ', text: '女性キャラクターが多いほど、攻撃力が上昇する(最大値25%)'},
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
        name: 'ブラッディローズ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 3
          }
        ]
      },
      {
        name: 'ローズプロポーズ＋',
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
        name: 'ユリシスアーク＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
