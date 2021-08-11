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
        name: 'ふりふりエイド＋',
        type: SkillType.Skill,
        text: '味方横一列のHPを15%回復させる。さらに2ターンの間、状態異常とステータス弱体を受け付けない状態になる',
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
        text: '味方単体を覚醒状態にし、さらに攻撃を1回無効化する',
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
        text: '味方全体のHPを40%回復させる。さらに戦闘不能の味方を、最大HPの35%で蘇生させる',
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
        name: 'いたいのとんでけ～＋',
        type: SkillType.Skill,
        text: '味方単体のHPを25%回復する。さらに2ターンの間、アタックフォトンからのダメージを30%軽減する',
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
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方単体を戦闘不能時にHP25%で蘇生する状態にする'
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 0,
            hit: 0,
            text: 'ソウルを4つ消費し、味方全体を戦闘不能時にHP25%で蘇生する状態にする'
          }
        ]
      },
      {
        name: 'ゼーレグナーデ＋',
        type: SkillType.Mysteries,
        text: `味方全体にレイズギフトを付与する。さらに2ターンの間、素早さを30%上昇する<br>
              【レイズギフト効果】蘇生されたとき、自身を覚醒状態にし、さらに2ターンの間、攻撃力を25%上昇する`,
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
