import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So38: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 38,
    id: 1,
    name: 'ハルファス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6022,
    offense: 1400,
    defense: 643,
    speed: 269,
    ability: {name: '形見の大斧', text: 'HPが100%のとき、毎ターン終了時、覚醒ゲージが+2される'},
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
        name: '地裂斬＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.05,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: 'ギガントアクス＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          }
        ]
      },
      {
        name: 'アニマルボンバー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  }
];
