import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So47: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 47,
    id: 1,
    name: 'ウヴァル',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7585,
    offense: 1404,
    defense: 275,
    speed: 501,
    ability: {name: 'キリングマシーン', text: '敵の数が少ないほど、攻撃力が上昇する（最大値20%）'},
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
        name: 'クレセントスライス＋',
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
        name: 'ラウンドスレイヤー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 6
          }
        ]
      },
      {
        name: 'ランページビート＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
