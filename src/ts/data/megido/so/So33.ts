import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So33: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 33,
    id: 1,
    name: 'ガープ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10133,
    offense: 854,
    defense: 642,
    speed: 279,
    ability: {name: 'リボルトストライク', text: '攻撃を受けたとき、10%の確率でめまい攻撃で反撃する'},
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
        name: 'ザ・ウォール＋',
        type: SkillType.Skill,
        text: '2ターンの間すべての単体攻撃を受け持ち自身へのダメージを15%軽減する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ジールバッシュ＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Fire,
        text: '敵単体に自身のHPが少ないほど威力の高い火ダメージ(最大で攻撃力4倍の火ダメージ)',
        levels: [
          {
            level: 1,
            magnification: 4,
            hit: 1
          }
        ]
      },
      {
        name: 'ヴァルカンの聖域＋',
        type: SkillType.Mysteries,
        text: '3ターンの間、味方単体へのアタックフォトンからのダメージを85%軽減する',
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
    no: 33,
    id: 2,
    name: 'ガープ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7733,
    offense: 1324,
    defense: 532,
    speed: 269,
    ability: {name: '闘志の炎', text: 'コロッセオ状態中、自身の受けるダメージを20%軽減する'},
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
        name: 'スクトゥムバッシュ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに70%の確率で、2ターンの間、敵をめまい状態にする'
          },
          {
            level: 2,
            label: 'コロッセオ',
            magnification: 2,
            hit: 1,
            text: '敵単体に攻撃力2倍のダメージ。さらに80%の確率で、2ターンの間、敵をめまい状態にする'
          }
        ]
      },
      {
        name: '闘志満満＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2.5,
            hit: 1,
            text: '敵単体に攻撃力2.5倍のダメージ。さらに自身にスキルフォトンを1つ追加する'
          },
          {
            level: 1,
            label: 'コロッセオ',
            magnification: 2.75,
            hit: 1,
            text: '敵単体に攻撃力2.75倍のダメージ。さらに自身にスキルフォトンを2つ追加する'
          }
        ]
      },
      {
        name: 'グラディアトル解放＋',
        type: SkillType.Mysteries,
        text:
          '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）。さらに3ターンの間、味方前列の攻撃力を30%上昇し、受けるダメージを30%軽減する',
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
