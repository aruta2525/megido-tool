import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 72,
    id: 1,
    name: 'ゲイボルグ',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 8703,
    offense: 1201,
    defense: 285,
    speed: 492,
    ability: {
      name: '折れない闘志',
      text: 'コロッセオ状態中、敵から受けたフォトンによる攻撃がMISSになったとき、自身にスキルを追加する'
    },
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: '狼牙槍＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0.75,
            hit: 3,
            text: '敵単体に攻撃力0.75倍の3連続ダメージ'
          },
          {
            level: 1,
            label: 'コロッセオ',
            magnification: 1.05,
            hit: 3,
            text: '敵単体に攻撃力1.05倍の3連続ダメージ'
          }
        ]
      },
      {
        name: '戦士の威嚇＋',
        type: SkillType.AwakeningSkill,
        text: '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）。さらに3ターンの間、自身を幻影状態にし、敵単体を執心状態にする',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '神槍の守護＋',
        type: SkillType.Mysteries,
        text: '自身以外の味方前列への攻撃を1回無効化する。さらに自身のHPを25%回復し、攻撃を2回無効化する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0.0
      }
    ]
  }
];

export default megido;
