import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 4,
    id: 1,
    name: 'ユフィール',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7042,
    offense: 632,
    defense: 635,
    speed: 614,
    ability: {name: '抜群の包容力', text: '男性キャラクターへの回復量が30%上昇する'},
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
        name: 'ふりふりエイド＋',
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
        name: 'ひみつの診察室＋',
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
        name: 'ミルキーライブラ＋',
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
  },
  {
    clockType: ClockType.Shin,
    no: 4,
    id: 2,
    name: 'ユフィール',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7070,
    offense: 700,
    defense: 640,
    speed: 610,
    ability: {name: '医者の矜持', text: '味方が戦闘不能になったとき、自身の覚醒ゲージが+2される'},
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
        name: 'いたいのとんでけ～＋',
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
        name: 'ふりふり予防魄＋',
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
        name: 'ゼーレグナーデ＋',
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
/*

*/

export default megido;
