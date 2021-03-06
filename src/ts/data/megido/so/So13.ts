import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So13: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 13,
    id: 1,
    name: 'ベレト',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 5968,
    offense: 1206,
    defense: 411,
    speed: 626,
    ability: {name: '憤怒の瞳【専用霊宝】', text: 'バーサーク時、毎ターン開始時にアタックフォトンを1つ追加する'},
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
        name: 'レイジスタンプ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.55,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '狂喜の怒り＋',
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
        name: 'リアニメイター＋',
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
