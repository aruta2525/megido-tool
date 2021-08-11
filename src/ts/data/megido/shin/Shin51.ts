import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 51,
    id: 1,
    name: 'プルフラス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7528,
    offense: 1209,
    defense: 414,
    speed: 498,
    ability: {name: '心眼', text: '自身への暗闇が無効になる'},
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
        name: 'ラピエル・フルーリ＋',
        type: SkillType.Skill,
        text: '自身の点穴を+15し、敵単体に攻撃力1倍のダメージ',
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'クゥ・デグラース＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力2.25倍のダメージ。さらに自身の点穴を+20する',
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: 'ヴォロンテ・ド・フ＋',
        type: SkillType.Mysteries,
        text: '自身の点穴を+40し、さらに2ターンの間、ターン終了時にHPが10%回復する',
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
    clockType: ClockType.Shin,
    no: 51,
    id: 2,
    name: 'プルフラス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7771,
    offense: 1219,
    defense: 419,
    speed: 450,
    ability: {name: 'めげない心', text: '自身がチェイン4以上の奥義を発動直後、アタックフォトンが1つ以上積まれていれば自身を覚醒状態にする'},
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
        name: 'リス・ブロン＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            label: 'Ch0',
            magnification: 0.6,
            hit: 2,
            text: '敵単体に攻撃力0.6倍の防御無視2連続ダメージ。チェイン数に応じて効果が変化'
          },
          {
            level: 0,
            label: 'Ch1',
            magnification: 0.6,
            hit: 2,
            text: '敵単体に攻撃力0.6倍の防御無視2連続ダメージ。さらに自身の覚醒ゲージを+1する。チェイン数に応じて効果が変化'
          },
          {
            level: 0,
            label: 'Ch2',
            magnification: 0.6,
            hit: 2,
            text: '	敵単体に攻撃力0.6倍の防御無視2連続ダメージ。さらに自身の覚醒ゲージを+2する'
          }
        ]
      },
      {
        name: 'グリサッド＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: 'Ch1以下',
            magnification: 2.25,
            hit: 1,
            text: '敵単体に攻撃力2.25倍のダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する。チェイン数に応じて効果範囲変化'
          },
          {
            level: 2,
            label: 'Ch2',
            magnification: 2.25,
            hit: 1,
            text: '敵横一列に攻撃力2.25倍のダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する。チェイン数に応じて効果範囲変化'
          },
          {
            level: 3,
            label: 'Ch3',
            magnification: 2.25,
            hit: 1,
            text: '	敵全体に攻撃力2.25倍のダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する'
          }
        ]
      },
      {
        name: 'アフェクシオン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 3,
            label: 'Ch3以下',
            magnification: 3.5,
            hit: 1,
            text: '	敵単体に攻撃力3.5倍のダメージ。味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 4,
            label: 'Ch4',
            magnification: 3.5,
            hit: 1,
            text: '敵単体に攻撃力3.5倍のダメージ。自身にアタックフォトンを1つ追加。自身にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 5,
            label: 'Ch5',
            magnification: 4,
            hit: 1,
            text: '	敵単体に攻撃力4倍のダメージ。自身にアタックフォトンを1つ追加（50%）。自身にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 6,
            label: 'Ch6',
            magnification: 6,
            hit: 1,
            text: '敵単体に攻撃力6倍のダメージ。自身にアタックフォトンを1つ追加（5%）。自身にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 7,
            label: 'Ch7',
            magnification: 8.5,
            hit: 1,
            text: '敵単体に攻撃力8.5倍のダメージ'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
