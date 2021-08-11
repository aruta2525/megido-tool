import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So42: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 42,
    id: 1,
    name: 'ウェパル',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 5646,
    offense: 1188,
    defense: 287,
    speed: 699,
    ability: {name: '面倒くさい…', text: '最初のターン、攻撃力が25%上昇する'},
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
        name: 'ウェイブライダー＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '水龍戟＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.5倍のダメージ。さらに2ターンの間、自身のアタックを強化する',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'セイレーンの涙＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力1.1倍の3連続ダメージ。さらに与えたダメージの30%を吸収する',
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0167
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 42,
    id: 2,
    name: 'ウェパル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 8606,
    offense: 639,
    defense: 646,
    speed: 493,
    ability: {name: '泡沫夢幻', text: 'HPが100%のとき、受けるダメージを30%軽減する'},
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
        name: 'ツイストウェイブ+',
        type: SkillType.Skill,
        text: '90%の確率で、敵単体に3倍で7ターン後に弾けるハイドロボム重を付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ウンディーネの戯れ+',
        type: SkillType.AwakeningSkill,
        text: '敵全体に攻撃力0.8倍のダメージさらに80%の確率で、0.5倍で3ターン後に弾けるハイドロボム速を付与する',
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 1
          }
        ]
      },
      {
        name: 'オーシャンティア+',
        type: SkillType.Mysteries,
        text: '敵単体に6倍で7ターン後に弾けるハイドロボム重を付与し、2ターンの間、防御力を20%低下させる',
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
