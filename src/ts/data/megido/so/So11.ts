import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So11: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 11,
    id: 1,
    name: 'グシオン',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7727,
    offense: 857,
    defense: 430,
    speed: 697,
    ability: {name: '負けず嫌い', text: 'HPが50%以下の時、攻撃力が30%上昇する'},
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
        name: '子守唄+',
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
        name: '子守唄+（大協奏）',
        type: SkillType.Skill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'オルフェウスの竪琴＋',
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
        name: 'オルフェウスの竪琴＋（大協奏）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ビーストファング＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 11,
    id: 2,
    name: 'グシオン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8586,
    offense: 1037,
    defense: 430,
    speed: 491,
    ability: {name: '褒めてもいいですよ', text: '音符が1つ以上蓄積されているとき、ターン終了時、味方単体のHPを音符1つにつき4%回復（最大値20%）'},
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
        name: 'グレイスノーツ＋',
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
        name: 'グレイスノーツ＋（大協奏）',
        type: SkillType.Skill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '独奏アルペジオ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.45,
            hit: 1
          }
        ]
      },
      {
        name: '独奏アルペジオ＋（大協奏）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.45,
            hit: 1
          }
        ]
      },
      {
        name: 'オールオブアサドン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.025
      }
    ]
  }
];
