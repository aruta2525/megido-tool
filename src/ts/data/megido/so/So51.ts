import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So51: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 51,
    id: 1,
    name: 'バラム',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5846,
    offense: 838,
    defense: 594,
    speed: 676,
    ability: {name: '観察者', text: '奥義使用時、50%の確率で覚醒ゲージの消費が0になる'},
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
        name: 'バインドダガー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.57,
            hit: 2
          }
        ]
      },
      {
        name: '非戦の調停＋',
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
        name: 'ディザスターボム＋',
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
