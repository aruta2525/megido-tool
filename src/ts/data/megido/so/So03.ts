import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So03: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 3,
    id: 1,
    name: 'ウァサゴ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5743,
    offense: 980,
    defense: 500,
    speed: 614,
    ability: {name: '高貴な血筋', text: '戦闘開始時、覚醒ゲージが最大になる'},
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
        name: '血の契約＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を呪い状態にする'
          }
        ]
      },
      {
        name: '悠久の契約＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1,
            text: '敵単体に攻撃力2倍のダメージ。さらに30%の確率で、敵を即死させる'
          }
        ]
      },
      {
        name: 'インペリアルクロー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1,
            text: '敵単体に攻撃力3.25倍のダメージ。さらに自身以外の覚醒ゲージを+1する'
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 3,
    id: 2,
    name: 'ウァサゴ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7736,
    offense: 935,
    defense: 538,
    speed: 460,
    ability: {name: '高貴なる魂', text: '生存している味方が多いほど、与えるステータス強化の効果量が上昇する(最大30%)'},
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
        name: '気高き粛清＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに敵に掛かっている強化を解除する'
          }
        ]
      },
      {
        name: '血の宣誓＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 1,
            text: '2ターンの間、味方前列のアタックを強化し、ターン終了時にHPが15%回復する'
          }
        ]
      },
      {
        name: 'ピアレイジオーダー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1,
            text: '2ターンの間、味方単体の攻撃力、防御力、素早さを50%上昇させ、効果範囲を全体化する'
          }
        ],
        increment: 0.05
      }
    ]
  }
];
