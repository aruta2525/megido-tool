import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So08: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 8,
    id: 1,
    name: 'バルバトス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7659,
    offense: 960,
    deffense: 476,
    speed: 474,
    ability: {name: '恋心をひとつまみ', text: '女性キャラクターへの回復量が30%上昇する'},
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
        name: '暴風のワルツ＋',
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
        name: '暴風のワルツ＋(大協奏)',
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
        name: '妖精たちのダンス＋',
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
        name: 'ホメロスの風讃歌＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 8,
    id: 2,
    name: 'バルバトス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7713,
    offense: 1226,
    deffense: 421,
    speed: 492,
    ability: {name: '流離いの吟遊詩人', text: '大協奏中なら自身のチャージが強化される'},
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
        name: '激情のプレリュード＋',
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
        name: '激情のプレリュード＋（大協奏）',
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
        name: '嵐のシンフォニー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 3
          }
        ]
      },
      {
        name: '嵐のシンフォニー＋（大協奏）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 3
          }
        ]
      },
      {
        name: '還る者への鎮魂歌＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: '還る者への鎮魂歌＋（大協奏）',
        type: SkillType.Mysteries,
        attribute: Attribute.Sound,
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
