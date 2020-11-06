import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So05: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 5,
    id: 1,
    name: 'マルバス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7262,
    offense: 628,
    defense: 489,
    speed: 719,
    ability: {name: '私すごーい☆', text: '毎ターン終了時、覚醒ゲージが+1される	'},
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
        name: 'マジカルヒール+',
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
        name: 'ミスティック+',
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
        name: 'クルーエルラブ+',
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
    no: 5,
    id: 2,
    name: 'マルバス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7730,
    offense: 597,
    defense: 586,
    speed: 657,
    ability: {name: '空気読みなさいよ☆', text: '行動開始時、20%の確率でスキルが追加される'},
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
        name: 'チアフルリリィ＋',
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
        name: 'ミスティックマター＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: '夢見る乙女＋',
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
  }
];
