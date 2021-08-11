import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So46: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 46,
    id: 1,
    name: 'ビフロンス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7604,
    offense: 1189,
    defense: 493,
    speed: 424,
    ability: {name: '魂狩り', text: '精霊系のモンスターに2倍のダメージ'},
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
        name: 'ソウルテイカー＋',
        type: SkillType.Skill,
        text: '敵横一列に攻撃力0.85倍の2連続ダメージ。さらに与えたダメージの30%を吸収する',
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 2
          }
        ]
      },
      {
        name: 'デスサイズ＋',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に攻撃力1.75倍のダメージ。さらに25%の確率で、敵を即死させる',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ダークコフィン＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力1.45倍の4連続ダメージ。さらに2ターンの間、敵を呪い状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.45,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 46,
    id: 2,
    name: 'ビフロンス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 6422,
    offense: 1214,
    defense: 464,
    speed: 468,
    ability: {name: '死に寄り添う者', text: 'ネクロ状態時、味方が戦闘不能になったとき、ソウルが+1される'},
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
        name: 'ソウルシャイン＋',
        type: SkillType.Skill,
        text: `味方全体にデスギフトを付与し、味方編成をネクロ状態にする<br>
              【デスギフト効果】戦闘不能時、敵全体にかかっている強化を解除し、2ターンの間防御力を15%低下させる`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'グリムサイズ＋',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に攻撃力2倍のダメージ。さらに、味方単体を即死させる',
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'プシュケダージ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1,
            text: '敵単体に攻撃力3倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 3.25,
            hit: 1,
            text: '敵単体に攻撃力3.25倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇'
          },
          {
            level: 3,
            magnification: 3.5,
            hit: 1,
            text: '敵単体に攻撃力3.5倍のダメージ'
          },
          {
            level: 1,
            label: '1【ネクロ】',
            magnification: 4.5,
            hit: 1,
            text: 'ソウルを2つ消費し、敵横一列に攻撃力4.5倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
          },
          {
            level: 2,
            label: '2【ネクロ】',
            magnification: 4.75,
            hit: 1,
            text: 'ソウルを2つ消費し、敵横一列に攻撃力4.75倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
          },
          {
            level: 3,
            label: '3【ネクロ】',
            magnification: 5,
            hit: 1,
            text: 'ソウルを2つ消費し、敵横一列に攻撃力5倍のダメージ'
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*
 */
