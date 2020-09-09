import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So18: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 18,
    id: 1,
    name: 'バティン',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 9140,
    offense: 1222,
    deffense: 431,
    speed: 423,
    ability: { name: '', text: '' },
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
    classType: ClassType.Burst,
    styleType: StyleType.Trooper,
    hp: 7379,
    offense: 1362,
    deffense: 419,
    speed: 431,
    ability: { name: '', text: '' },
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
