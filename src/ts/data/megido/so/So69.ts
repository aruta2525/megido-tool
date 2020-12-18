import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So69: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 69,
    id: 1,
    name: 'デカラビア',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 5906,
    offense: 1152,
    defense: 421,
    speed: 642,
    ability: {name: '滅びの美学', text: '植物系のモンスターに2倍のダメージ'},
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
        name: 'ヴェノムマイン＋',
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
        name: 'ブリザード＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'トランスジャミング＋',
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
    no: 69,
    id: 2,
    name: 'デカラビア',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 6808,
    offense: 886,
    defense: 515,
    speed: 536,
    ability: {name: '災厄をもたらす者', text: '毎ターン終了時、覚醒ゲージが+1される'},
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
        name: 'イクセイザ＋',
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
        name: '蔓延る害悪＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 5,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'アスタ・アンブラ＋',
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
