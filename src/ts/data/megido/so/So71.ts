import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So71: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 71,
    id: 1,
    name: 'ダンタリオン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7462,
    offense: 1387,
    defense: 491,
    speed: 270,
    ability: {name: 'メギドの記憶', text: 'HPが20%上昇する'},
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
        name: 'フォールドスロー＋',
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
        name: 'ロブシューター＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力3.5倍のダメージさらに80%の確率で、積まれているフォトンを1つ奪う',
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: 'エンシェントアーツ＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方全体の攻撃力を110%上昇させる',
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
    clockType: ClockType.So,
    no: 71,
    id: 2,
    name: 'ダンタリオン',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6988,
    offense: 1212,
    defense: 446,
    speed: 471,
    ability: {name: '終わらない記録', text: '封印状態中、自身のスキルレベルが低下しなくなる'},
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
        name: 'ハイスロー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 4,
            magnification: 2.5,
            hit: 1,
            text: '敵横一列に攻撃力2.5倍のダメージさらに60%の確率で覚醒ゲージを-1する【使用するごとにスキルLv低下】'
          },
          {
            level: 3,
            magnification: 1,
            hit: 1,
            text: '敵横一列に攻撃力1倍のダメージさらに50%の確率で覚醒ゲージを-1する【使用するごとにスキルLv低下】'
          },
          {
            level: 2,
            magnification: 0.75,
            hit: 1,
            text: '敵横一列に攻撃力0.75倍のダメージさらに40%の確率で覚醒ゲージを-1する【使用するごとにスキルLv低下】'
          },
          {
            level: 1,
            magnification: 0.5,
            hit: 1,
            text: '敵横一列に攻撃力0.5倍のダメージさらに30%の確率で覚醒ゲージを-1する'
          }
        ]
      },
      {
        name: 'ファンファダンス＋',
        type: SkillType.AwakeningSkill,
        text: '自身の覚醒ゲージを全て消費し、自身にスキルフォトンを3つ追加する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'エイジバースト＋',
        type: SkillType.Mysteries,
        text:
          '3ターンの間、ラッシュの味方全体を封印状態。ラッシュの場合封印状態の味方の数だけ、ダメージを8%軽減。自身の攻撃力を50%、防御力50%上昇させ、スキルLvを4にする',
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
