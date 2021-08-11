import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 50,
    id: 1,
    name: 'シャミハザ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5786,
    offense: 1221,
    defense: 427,
    speed: 619,
    ability: {name: 'テラインストール', text: 'HPが70%以下のとき、攻撃力が25%上昇する'},
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
        name: 'バイラルスパーク＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        text: '敵単体に攻撃力1.5倍の雷ダメージ',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ブリッツスマッシュ＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        text: '敵単体に攻撃力2.5倍の雷ダメージ。さらに2ターンの間、自身の攻撃力を50%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ハイボルテーション＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        text: '敵単体に攻撃力3.25倍の雷ダメージ。さらに自身にスキルフォトンを1つ追加する',
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 50,
    id: 2,
    name: 'シャミハザ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 8026,
    offense: 996,
    defense: 460,
    speed: 474,
    ability: {name: 'ボルテックスバディ', text: '自身が追撃状態のとき、アタック時、敵単体に3倍で7ターン後に弾けるハイドロボム重を付与'},
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
        name: '戦心克己＋	',
        type: SkillType.Skill,
        text: '2ターンの間、味方のアタックに対して自身が追撃する状態になる。さらに受けるダメージを15%軽減する	',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '戦刃練磨＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、自身と両隣の攻撃力を40%上昇する。さらに種族に【悪魔】を持つオーブを装備している対象に練達のオーラを2個付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'マッシブマリン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1,
            text: '敵単体に攻撃力3.25倍のダメージ。さらに0.5倍で2ターン後に弾けるハイドロボム速を付与する【使用するごとにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 3.5,
            hit: 1,
            text: '	敵単体に攻撃力3.5倍のダメージ。さらに0.5倍で1ターン後に弾けるハイドロボム速を付与する'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
