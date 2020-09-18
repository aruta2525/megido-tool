import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

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
        type: SkillType.Atack,
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
        type: SkillType.Atack,
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
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ヒートアップシリンジ＋（シフト後）',
        type: SkillType.Skill,
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
