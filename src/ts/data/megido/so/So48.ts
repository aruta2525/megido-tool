import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So48: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 48,
    id: 1,
    name: 'ハーゲンティ',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7382,
    offense: 968,
    deffense: 418,
    speed: 628,
    ability: {name: '守銭奴', text: 'クエストでの獲得ゴルドが50%上昇する'},
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
        name: 'それちょうだいよぅ＋',
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
        name: 'ハニワの奇跡＋',
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
        name: 'ハートオブゴールド＋',
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
    no: 48,
    id: 2,
    name: 'ハーゲンティ',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7004,
    offense: 1199,
    deffense: 454,
    speed: 494,
    ability: {name: 'この世はあたいの宝島', text: 'チェイン中、与えるステータス強化とステータス弱体の持続ターンを+1する'},
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
        name: '来て！フレンズ+',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            magnification: 1,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 2,
            hit: 1
          },
          {
            level: 3,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 4,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'でっかくなれ〜+',
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
        name: '色褪せない宝物！+',
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
