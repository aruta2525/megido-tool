import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So21: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 21,
    id: 1,
    name: 'モラクス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6025,
    offense: 1218,
    defense: 414,
    speed: 614,
    ability: {name: '逆ギレカウンター', text: '攻撃を受けたとき、20%の確率で反撃する'},
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
        name: '巨岩割り＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍の防御無視ダメージ',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '必勝・大炎風＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、自身のスキルを強化する',
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ミノスの大戦斧＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力4.25倍のダメージ。2ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる',
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 21,
    id: 2,
    name: 'モラクス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6519,
    offense: 1318,
    defense: 285,
    speed: 644,
    ability: {name: '燃えてきたぜ！', text: 'フォトンを使用するたびに敵に与える連続ダメージが上昇する【1回につき+20%、最大60%】（ターン経過でリセット)'},
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
        name: '八ツ裂き斬斧＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.7倍の4連続ダメージ。さらに敵の覚醒ゲージが0のとき、ダメージが1.5倍になる',
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 4
          }
        ]
      },
      {
        name: '圧勝・ボースギア＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.75倍の6連続ダメージ。さらに自身に積まれているフォトンをすべてスキルフォトンに変化させる',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 6
          }
        ]
      },
      {
        name: '勝鬨イグニッション＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、自身を封印状態にし、自身の両隣を猛攻状態にする。さらに自身と両隣の攻撃力を50%上昇させる',
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
