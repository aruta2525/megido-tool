import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So14: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 14,
    id: 1,
    name: 'レラジェ',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 5980,
    offense: 1386,
    defense: 424,
    speed: 475,
    ability: {name: 'ビーストハンター', text: '獣系のモンスターに2倍のダメージ'},
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
        name: 'シャープショット＋',
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
        name: 'シャープショット＋（Bアーツ）',
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
        name: 'クランブルアロー＋',
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
        name: 'クランブルアロー＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: 'パワースナイプ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 3,
            magnification: 4.75,
            hit: 1
          },
          {
            level: 4,
            magnification: 5.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 14,
    id: 2,
    name: 'レラジェ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6116,
    offense: 1210,
    defense: 644,
    speed: 430,
    ability: {name: '手堅い一手', text: '自身の点穴が69以下のとき、攻撃時に点穴の効果発動と消費がされない'},
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
        name: '凛然の一矢＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '凛然の一矢＋（Bアーツ）',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '不失正鵠之舞＋',
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
        name: 'この矢外させ給ふな＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'この矢外させ給ふな＋（Bアーツ）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*
 */
