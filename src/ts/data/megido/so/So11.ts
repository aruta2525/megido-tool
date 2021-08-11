import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So11: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 11,
    id: 1,
    name: 'グシオン',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7727,
    offense: 857,
    defense: 430,
    speed: 697,
    ability: {name: '負けず嫌い', text: 'HPが50%以下の時、攻撃力が30%上昇する'},
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
        name: '子守唄+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに60%の確率で、2ターンの間、敵を睡眠状態にする'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 1.25,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵単体に攻撃力1.25倍の響撃ダメージ。さらに80%の確率で、2ターンの間、敵を睡眠状態にする'
          }
        ]
      },
      {
        name: 'オルフェウスの竪琴＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を40%上昇させる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を45%上昇させる'
          }
        ]
      },
      {
        name: 'ビーストファング＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力4.25倍のダメージ。さらに2ターンの間、攻撃力を35%低下させる',
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
    no: 11,
    id: 2,
    name: 'グシオン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8586,
    offense: 1037,
    defense: 430,
    speed: 491,
    ability: {name: '褒めてもいいですよ', text: '音符が1つ以上蓄積されているとき、ターン終了時、味方単体のHPを音符1つにつき4%回復（最大値20%）'},
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
        name: 'グレイスノーツ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方横一列のHPを15%回復する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '味方横一列のHPを15%回復する。さらに攻撃を1回無効化する'
          }
        ]
      },
      {
        name: '独奏アルペジオ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.45,
            hit: 1,
            text: '敵全体に攻撃力1.45倍のダメージ。さらに2ターンの間、味方全体の防御力を30%上昇させる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 1.45,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵全体に攻撃力1.45倍の響撃ダメージ。さらに2ターンの間、味方全体の攻撃力、防御力、素早さをそれぞれ30%上昇させる'
          }
        ]
      },
      {
        name: 'オールオブアサドン＋',
        type: SkillType.Mysteries,
        text: '敵横一列に攻撃力1.75倍の2連続ダメージ。さらに残りHP割合の高い敵ほど威力が上昇する',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.025
      }
    ]
  }
];
