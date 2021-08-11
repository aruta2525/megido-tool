import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So18: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 18,
    id: 1,
    name: 'バティン',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 9140,
    offense: 1222,
    defense: 431,
    speed: 423,
    ability: {name: 'お注射の時間です', text: '戦闘不能時、3ターンの間、ターン終了時に味方全体のHPが20%回復する効果を付与する'},
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
        name: 'アブソープション＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに与えたダメージの30%を吸収する',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'ニューロトキシン＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力2倍のダメージ。さらに2ターンの間、敵を毒状態にする',
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'ポレンヒーリング＋',
        type: SkillType.Mysteries,
        text: '味方横一列のHPを40%回復させる',
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
    no: 18,
    id: 2,
    name: 'バティン',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7379,
    offense: 1362,
    defense: 419,
    speed: 431,
    ability: {name: 'さあ…治療の時間です', text: '自身にフォトンが与えられなかった場合ターン終了時、味方単体のHPを20%回復する'},
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
        name: 'バーンインジェクター＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力1倍の火ダメージ。さらに敵に掛かっている強化を解除する',
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: '（シフト後）ヒートアップシリンジ＋',
        type: SkillType.Skill,
        text: '敵単体のHPを25%回復させる。さらに2ターンの間、受ける火ダメージを40%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ウォームアップ＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、自身の攻撃力を50%上昇させる。さらにシフトし、スキルの効果が変化する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ブレイズブロッサム＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力5倍の火ダメージ。さらに敵のHPが95%以上のとき、ダメージが1.75倍になる',
        levels: [
          {
            level: 1,
            magnification: 5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
