import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So25: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 25,
    id: 1,
    name: 'グラシャラボラス',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7290,
    offense: 1170,
    defense: 416,
    speed: 494,
    ability: {name: '器物破損', text: '物体系のモンスターに2倍のダメージ'},
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
        name: 'ぶん回し＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'グレートぶん回し＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ピリオドの向こうへ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
