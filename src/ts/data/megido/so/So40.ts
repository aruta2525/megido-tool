import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So40: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 40,
    id: 1,
    name: 'ラウム',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 10094,
    offense: 1155,
    defense: 418,
    speed: 277,
    ability: {name: '拾ったぞコラァッ！', text: '行動開始時、20%の確率でチャージが追加される'},
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
        name: '夜露死苦！＋',
        type: SkillType.Skill,
        text: '味方前列の覚醒ゲージを+1し、2ターンの間、防御力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '仏恥義琉！！＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.35倍の3連続ダメージ。さらに2ターンの間、敵を混乱状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 3
          }
        ]
      },
      {
        name: 'デンジャラスバイト＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力2.1倍の3連続ダメージ。さらに2ターンの間、味方前列のチャージを強化する',
        levels: [
          {
            level: 1,
            magnification: 2.1,
            hit: 3
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 40,
    id: 2,
    name: 'ラウム',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 9069,
    offense: 955,
    defense: 618,
    speed: 282,
    ability: {name: '不屈の執念', text: '自身のHPが少ないほど、受けるダメージを軽減する（最大70%）'},
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
        name: '仁王立ち＋',
        type: SkillType.Skill,
        text: '自身が致死ダメージを受けたとき、一度踏み止まる状態になる。さらに2ターンの間、ターン終了時に自身のHPを15%回復しすべての単体攻撃を受け持つ',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '御礼参り＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の3.75倍のダメージ）',
        levels: [
          {
            level: 1,
            magnification: 3.75,
            hit: 1
          }
        ]
      },
      {
        name: '魔武駄致＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方単体の攻撃力、防御力、素早さを40%上昇させ、カウンターの場合、100%防御無視1回を付与する',
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
