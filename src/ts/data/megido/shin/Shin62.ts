import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 62,
    id: 1,
    name: 'インプ',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 6148,
    offense: 818,
    defense: 643,
    speed: 616,
    ability: {name: 'イタズラ大成功！', text: '自身の行動で、敵が1体以上感電した場合、自身の覚醒ゲージが+1される'},
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
        name: 'サンダードドンパー＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 3
          }
        ]
      },
      {
        name: 'アースボールラブ＋',
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
        name: '全力マジマゲドン！＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
