import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 29,
    id: 1,
    name: 'アルマロス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8810,
    offense: 865,
    defense: 538,
    speed: 431,
    ability: {
      name: '無駄を厭う戦争',
      text: 'ネクロ状態時、毎ターン開始時にスキルフォトンを1つ追加する'
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
        name: 'もったいないねぇ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            text: '自身をスキルブレイク状態にする。さらに2ターンの間、チャージを強化する',
            magnification: 0,
            hit: 0
          },
          {
            level: 1,
            label: 'スキルブレイク',
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身にチャージフォトンを1つ追加する',
            magnification: 1.25,
            hit: 1
          },
        ]
      },
      {
        name: '無駄なくいこうか＋',
        type: SkillType.AwakeningSkill,
        text: `2ターンの間、味方全体の攻撃力を40%上昇させる。さらに、レイズギフトを付与する<br>
        【レイズギフト効果】蘇生されたとき、敵全体に攻撃力1倍のダメージ。さらに敵に掛かっている強化を解除する`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'レスッレクティオ＋',
        type: SkillType.Mysteries,
        text: `戦闘不能の味方を最大HPの40%で蘇生させる。さらに1ターンの間、ターン終了時、味方全体にレイズギフトを付与するリザーブ状態になる<br>
        【レイズギフト効果】蘇生されたとき、自身が戦闘不能時にHP35%で蘇生する状態になり、HPを30%回復する`,
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
