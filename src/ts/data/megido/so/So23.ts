import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So23: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 23,
    id: 1,
    name: 'アイム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5630,
    offense: 1171,
    defense: 426,
    speed: 644,
    ability: {name: '焔の担い手', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: '強火クッキング＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍の火ダメージ【使用するごとにスキルLvが上昇し、Lv4で防御力低下付与】'
          },
          {
            level: 2,
            magnification: 1.5,
            hit: 1,
            text: '敵単体に攻撃力1.5倍の火ダメージ【使用するごとにスキルLvが上昇し、Lv4で防御力低下付与】'
          },
          {
            level: 3,
            magnification: 1.75,
            hit: 1,
            text: '敵単体に攻撃力1.75倍の火ダメージ【使用するごとにスキルLvが上昇し、Lv4で防御力低下付与】'
          },
          {
            level: 4,
            magnification: 2,
            hit: 1,
            text: '敵単体に攻撃力2倍の火ダメージ。防御力低下(60%)付与(2ターン)'
          }
        ]
      },
      {
        name: '太陽の種火＋',
        type: SkillType.AwakeningSkill,
        text: '味方単体のHPを40%回復させる。さらに2ターンの間、アタックを強化する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '炎天の煌めき＋',
        type: SkillType.Mysteries,
        increment: 0.05,
        attribute: Attribute.Fire,
        text: '敵全体に攻撃力2.25倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 23,
    id: 2,
    name: 'アイム',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 8455,
    offense: 751,
    defense: 674,
    speed: 280,
    ability: {name: '洗浄の天使', text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'},
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
        name: 'ブレンドウォッシュ＋',
        type: SkillType.Skill,
        text: '敵単体に、0.1倍で9ターン後に弾けるハイドロボム錬を錬成する。さらに2ターンの間、攻撃力を25%低下させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'シュトロームテイル＋',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に2.75倍で7ターン後に弾けるハイドロボム重を付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '清浄のセメンテリオ＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方全体へのダメージを30%軽減する。さらに、ターン終了時にHPが20%回復する',
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
