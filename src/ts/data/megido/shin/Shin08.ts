import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 8,
    id: 1,
    name: 'ロキ',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7010,
    offense: 1101,
    defense: 451,
    speed: 517,
    ability: {
      name: '嘘から出た真',
      text: '重奏状態時、30%の確率で自身の弾撃ダメージで音符を消費しない'
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
        name: 'エキサイトヴォイス＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を15%上昇させる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を20%上昇させる'
          }
        ]
      },
      {
        name: '♪Loki Rock you＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '2ターンの間ライブ、弾撃ダメージ60%上昇。2ターン防御力15%低下/ダメージ軽減25%/全状態異常耐性60%上昇を付与可能になる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '3ターンの間ライブ、弾撃ダメージ65%上昇。2ターン防御力20%低下/ダメージ軽減30%/全状態異常耐性70%上昇を付与可能になる'
          }
        ]
      },
      {
        name: 'ブレイクシャウト＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 4.25,
            hit: 1,
            text: '敵単体に攻撃力4.25倍のダメージ。さらに味方編成に蓄積されている音符1つにつき倍率が0.1上昇する。'
          },
          {
            level: 1,
            label: '協奏大協奏',
            magnification: 4.5,
            hit: 1,
            text: '敵単体に攻撃力4.5倍の響撃ダメージ。さらに味方編成に蓄積されている音符1つにつき倍率が0.1上昇する。'
          },
          {
            level: 1,
            label: '重奏',
            magnification: 6,
            hit: 1,
            text: '敵単体に攻撃力6倍のダメージ。さらに味方編成に蓄積されている音符1つにつき倍率が0.1上昇する。'
          },
          {
            level: 1,
            label: '重奏大協奏',
            magnification: 6.25,
            hit: 1,
            text: '敵単体に攻撃力6.25倍の響撃ダメージ。さらに味方編成に蓄積されている音符1つにつき倍率が0.1上昇する。	'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
