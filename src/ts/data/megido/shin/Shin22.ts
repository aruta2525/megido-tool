import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 22,
    id: 1,
    name: 'カスピエル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7399,
    offense: 1053,
    defense: 490,
    speed: 478,
    ability: {name: 'ムーンコレクター', text: '自身の覚醒ゲージが最大の50%以上のとき、敵を状態異常にした際の持続ターンが+1される'},
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
        name: 'ナイトストーカー+',
        type: SkillType.Skill,
        text: '敵横一列に攻撃力0.75倍のダメージ。さらに2ターンの間、敵を束縛状態にする',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 1
          }
        ]
      },
      {
        name: 'シークレットコール+',
        type: SkillType.AwakeningSkill,
        text: '敵単体を混乱状態にし、さらに防御力を10%低下させる(2ターン)。ただし対象の攻撃力が5%上昇する(3ターン)',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '鮮血の一夜+',
        type: SkillType.Mysteries,
        text: '敵横一列に攻撃力1.1倍の3連続ダメージ。さらに、残りHP割合の高い敵ほど威力が上昇する',
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 22,
    id: 2,
    name: 'カスピエル',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 6797,
    offense: 1269,
    defense: 288,
    speed: 617,
    ability: {name: 'デンジャラスゲーム', text: '致死ダメージを受けたとき、一度だけ踏みとどまる'},
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
        name: 'スカーレットレディ＋',
        type: SkillType.Skill,
        text: '敵横一列に攻撃力1.25倍のダメージ',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'デッドリーガーデン＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.9倍の4連続ダメージ。さらに自身のHPに応じて連続攻撃数が変化【50%以下で6回/25%以下で8回に変化】',
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 4
          },
          {
            level: 1,
            magnification: 0.9,
            hit: 6
          },
          {
            level: 1,
            magnification: 0.9,
            hit: 8
          }
        ]
      },
      {
        name: '至極天の終夜＋',
        type: SkillType.Mysteries,
        text: '敵横一列に攻撃力3倍のダメージ。さらに2ターンの間、自身のスキルを強化する',
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
