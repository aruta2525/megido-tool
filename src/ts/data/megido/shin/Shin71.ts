import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 71,
    id: 1,
    name: 'アクィエル',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 8024,
    offense: 857,
    deffense: 425,
    speed: 681,
    ability: {name: 'ファルサグロリア', text: '自身以外の味方の行動で、対象が1体以上状態異常になった場合、自身の覚醒ゲージが+1される'},
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
        name: 'アニムスの目+',
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
        name: '異端のシュンボルム+',
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
        name: 'レナトゥスメルム+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
