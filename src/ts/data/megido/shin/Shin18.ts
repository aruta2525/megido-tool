import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 18,
    id: 1,
    name: 'ブニ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8805,
    offense: 1080,
    deffense: 471,
    speed: 430,
    ability: {name: '不屈の精神', text: '15%の確率で攻撃を無効化する'},
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
        name: '女神の護り＋',
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
        name: 'ブリッツライド＋',
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
        name: '閃煌轟雷襲＋',
        type: SkillType.Mysteries,
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
  },
  {
    clockType: ClockType.Shin,
    no: 18,
    id: 2,
    name: 'ブニ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 8032,
    offense: 949,
    deffense: 279,
    speed: 688,
    ability: {name: '戦乙女の覚悟', text: '覚醒状態中なら自身のアタックが強化される'},
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
        name: '地鳴閃＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 1
          }
        ]
      },
      {
        name: '扇動の防衛陣＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 1
          }
        ]
      },
      {
        name: '煌々爆砕烈撃＋',
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
