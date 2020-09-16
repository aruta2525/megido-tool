import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So41: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 41,
    id: 1,
    name: 'フォカロル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7601,
    offense: 993,
    deffense: 504,
    speed: 487,
    ability: {name: '鍛練の成果', text: '戦闘中、徐々に防御力が上昇する（最大値50%）1ターン目に20%、2・4・6ターン目に10%上昇'},
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
        name: 'ギアバースト＋',
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
        name: 'フェイタルブレード＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 5
          }
        ]
      },
      {
        name: 'ゲイルウィング＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 41,
    id: 2,
    name: 'フォカロル',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7219,
    offense: 728,
    deffense: 507,
    speed: 626,
    ability: {name: '戦場の覚悟', text: 'バレットのストック数に応じて、受けるダメージを軽減する（最大60%）'},
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
        name: 'トリガーオン＋',
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
        name: 'フェイタルブラスト＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.3,
            hit: 2
          }
        ]
      },
      {
        name: 'フェイタルブラスト＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'クリティカルブロウ＋',
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
  }
];
