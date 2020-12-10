import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So70: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 70,
    id: 1,
    name: 'セーレ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5741,
    offense: 944,
    defense: 416,
    speed: 711,
    ability: {name: 'トレジャーハンター', text: 'ラッシュのモンスターからのレアドロップ率が50%上昇する'},
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
        name: 'ポーション投げ+',
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
        name: 'スパイラルエッジ+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 2
          }
        ]
      },
      {
        name: 'ランプの魔人+（全体ダメージ）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 70,
    id: 2,
    name: 'セーレ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7922,
    offense: 884,
    defense: 646,
    speed: 413,
    ability: {name: '準備は万全！', text: '自身封印中、ターン終了時、味方単体の状態異常を治癒する'},
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
        name: 'バーストエッジ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 4
          }
        ]
      },
      {
        name: 'とびきりドリンク＋',
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
        name: 'ひらめきロケット＋',
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
