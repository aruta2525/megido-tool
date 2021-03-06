import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So10: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 10,
    id: 1,
    name: 'ブエル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7275,
    offense: 642,
    defense: 477,
    speed: 716,
    ability: {name: '甘えん坊', text: '毎ターン終了時、覚醒ゲージが+1される'},
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
        name: 'ドロップフォトン+',
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
        name: 'パワーブースト+',
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
        name: 'スターライトアイ+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0
      }
    ]
  }
];
