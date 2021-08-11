import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 59,
    id: 1,
    name: 'スコルベノト',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7066,
    offense: 949,
    defense: 575,
    speed: 504,
    ability: {name: 'ネガティブの功名', text: '自身がブレイク待機状態のとき、自身が受けるスキルフォトンからのダメージを30%軽減する'},
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
        name: 'カワイイに誓って＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '自身をアタックブレイク状態にする。さらに2ターンの間、防御力が40%上昇する'
          },
          {
            level: 1,
            label: 'ブレイク',
            magnification: 1.25,
            hit: 1,
            text: '【アタックブレイク】敵単体に攻撃力1.25倍のダメージ。さらに2ターンの間、味方横一列の防御力を40％上昇させる'
          }
        ]
      },
      {
        name: 'タイニーマジック＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方単体のアタックとチャージを強化する。さらに攻撃力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ピクシーファウナ＋',
        type: SkillType.Mysteries,
        text: '	横一列の戦闘不能の味方を最大HP30%で蘇生させ、さらに2ターンの間、ダメージを30%軽減する',
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

export default megido;
