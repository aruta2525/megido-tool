import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 6,
    id: 1,
    name: 'アラストール',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 9208,
    offense: 776,
    defense: 424,
    speed: 627,
    ability: {name: '胡蝶之夢', text: '毎ターン終了時、覚醒ゲージが+1される'},
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
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 6,
    id: 2,
    name: 'アラストール',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 8231,
    offense: 909,
    defense: 514,
    speed: 491,
    ability: {name: 'バタフライエフェクト', text: '毎ターン終了時、覚醒ゲージが+1される'},
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
        name: '死のパピリオー＋',
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
        name: '甘美なる処刑＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: '罪と罰＋',
        type: SkillType.Mysteries,
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

export default megido;
