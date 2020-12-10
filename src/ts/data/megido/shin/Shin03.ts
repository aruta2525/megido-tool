import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';
const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 3,
    id: 1,
    name: 'サキュバス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7530,
    offense: 952,
    defense: 429,
    speed: 631,
    ability: {name: 'カワイさの証明', text: '最初の2ターンの間、毎ターン終了時、自身の覚醒ゲージが+2される'},
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
        name: 'クセになりそう☆＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 1
          }
        ]
      },
      {
        name: '難易度高過ぎィ！＋',
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
        name: 'チャームウィップ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 3
          }
        ],
        increment: 0.015
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 3,
    id: 2,
    name: 'サキュバス',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 8637,
    offense: 707,
    defense: 495,
    speed: 534,
    ability: {name: 'アゲていくよ！', text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'},
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
        name: '可愛さ弾けるぅ＋',
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
        name: '春色オーディション＋',
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
        name: '宛先のない恋心＋',
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

export default megido;
