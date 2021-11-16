import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 45,
    id: 1,
    name: 'チェルノボグ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6328,
    offense: 1385,
    defense: 400,
    speed: 500,
    ability: {
      name: '暗黒街の掟',
      text: '毎ターン終了時、覚醒ゲージが+1される'
    },
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
        name: '穢刃＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵をゾンビ状態にし、味方編成をネクロ状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '血盟＋',
        type: SkillType.AwakeningSkill,
        text: `味方単体にデスギフトを付与し、味方編成をネクロ状態にする<br>
        【デスギフト効果】戦闘不能時、2ターンの間、味方全体のアタックを強化し、さらに覚醒ゲージ+3する`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'モルスホリビリス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            text: `敵全体に攻撃力2.25倍のダメージ。さらに味方全体にアタックフォトンを1つ追加する`,
            magnification: 3,
            hit: 1,
            
          },
          {
            level: 1,
            label: 'ネクロ（ソウル1個以上）',
            text: `ソウルを1つ消費し、敵全体に攻撃力3倍のダメージ。さらに味方全体にアタックフォトンを1つ追加する`,
            magnification: 3,
            hit: 1,
            
          },
          {
            level: 2,
            label: 'ネクロ（ソウル2個以上）',
            text: `ソウルを2つ消費し、敵全体に攻撃力3.75倍のダメージ。さらに味方全体にアタックフォトンを1つ追加する`,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 3,
            label: 'ネクロ（ソウル3個以上）',
            text: `ソウルを3つ消費し、敵全体に攻撃力4.5倍のダメージ。さらに味方全体にアタックフォトンを1つ追加する`,
            magnification: 4.5,
            hit: 1
          },
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
