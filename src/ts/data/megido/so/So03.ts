import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So03: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 3,
    id: 3,
    name: 'ウァサゴ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5743,
    offense: 980,
    defense: 500,
    speed: 614,
    ability: {name: '高貴な血筋', text: '戦闘開始時、覚醒ゲージが最大になる'},
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
        name: '血の契約＋',
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
        name: '悠久の契約＋	',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'インペリアルクロー＋	',
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
