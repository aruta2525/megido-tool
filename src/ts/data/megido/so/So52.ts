import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So52: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 52,
    id: 1,
    name: 'アロケル',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 7110,
    offense: 1199,
    defense: 500,
    speed: 427,
    ability: {name: '天才的センス', text: 'HPが20%上昇する'},
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
        name: 'あとは任せた！＋',
        type: SkillType.Skill,
        text: '2ターンの間、自身が睡眠状態になり、自身以外の攻撃力を35%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '少し本気出す！＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力3倍のダメージ。さらに敵が覚醒状態のとき、ダメージが2倍になる',
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: '復讐剣バルムンク＋',
        type: SkillType.Mysteries,
        text: '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の11.5倍のダメージ）',
        levels: [
          {
            level: 1,
            magnification: 11.5,
            hit: 1
          }
        ],
        increment: 0.1
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 52,
    id: 2,
    name: 'アロケル',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7153,
    offense: 1150,
    defense: 440,
    speed: 496,
    ability: {name: 'ヒヤッとした～', text: 'コロッセオ状態中、致死ダメージを受けたとき、30%の確率で踏みとどまる'},
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
        name: '面倒になる前に！＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.75倍の3連続ダメージ。さらに80%の確率で、2ターンの間、防御力を25%低下する',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 3
          }
        ]
      },
      {
        name: 'お先にどうぞ！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            text: '2ターンの間、自身の素早さを90%低下し、自身以外の素早さを60%上昇させる【コロッセオ状態中、効果が変化】',
            magnification: 0,
            hit: 0
          },
          {
            level: 1,
            label: 'コロッセオ',
            text: '2ターンの間、自身の素早さを90%低下し、自身以外の素早さを60%上昇させ、スキルを強化する',
            magnification: 0,
            hit: 0
          },
        ]
      },
      {
        name: '宵闇謀殺＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            text: '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）。敵単体に攻撃力0.95倍の3連続ダメージ【コロッセオ状態中、劣勢なら効果が変化】',
            magnification: 0.95,
            hit: 3
          },
          {
            level: 1,
            label: 'コロッセオ(劣勢)',
            text: '敵単体に自身のHPが少ないほど威力の高い3連続ダメージ（最大で攻撃力の4倍の3連続ダメージ）',
            magnification: 4,
            hit: 3
          },
        ],
        increment: 0.0166
      }
    ]
  },
];
