import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 6,
    id: 1,
    name: 'アラストール',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 9208,
    offense: 776,
    deffense: 424,
    speed: 627,
    ability: {name: '胡蝶之夢', text: '毎ターン終了時、覚醒ゲージが+1される'},
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
        name: '天誅アレグロ＋',
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
        name: '贖罪のシルフィード＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '極刑デッドエンド＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0
      }
    ]
  }
];

export default megido;
