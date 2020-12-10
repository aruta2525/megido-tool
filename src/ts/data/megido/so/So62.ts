import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So62: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 62,
    id: 1,
    name: 'ウァラク',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7703,
    offense: 943,
    defense: 502,
    speed: 490,
    ability: {name: '天上の踊り子', text: '戦闘中、徐々に防御力が上昇する（最大値50%）'},
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
        name: '南風の舞+',
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
        name: '音響の槍+',
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
        name: 'サイコウェイブ+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'サイコウェイブ+（大協奏）',
        type: SkillType.Mysteries,
        attribute: Attribute.Sound,
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
