import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So01: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 1,
    id: 1,
    name: 'バエル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 4570,
    offense: 943,
    defense: 487,
    speed: 689,
    ability: {name: '超感電', text: '海洋生物系のモンスターに2倍のダメージ'},
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
        name: 'マジックリリース＋',
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
        name: 'コラプスサンダー＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.55,
            hit: 1
          }
        ]
      },
      {
        name: 'インクルードデス＋',
        type: SkillType.Mysteries,
        increment: 0.05,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 6.25,
            hit: 1
          }
        ]
      }
    ]
  }
];
