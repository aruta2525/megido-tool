import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So21: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 21,
    id: 1,
    name: 'モラクス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6025,
    offense: 1218,
    defense: 414,
    speed: 614,
    ability: {name: '逆ギレカウンター', text: '攻撃を受けたとき、20%の確率で反撃する'},
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
        name: '巨岩割り＋',
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
        name: '必勝・大炎風＋',
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
        name: 'ミノスの大戦斧＋',
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
  }
];
