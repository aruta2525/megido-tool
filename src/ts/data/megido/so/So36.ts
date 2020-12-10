import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So36: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 36,
    id: 1,
    name: 'ストラス',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7407,
    offense: 1167,
    defense: 411,
    speed: 488,
    ability: {name: '花鳥風月', text: '行動開始時、20%の確率でスキルが追加される'},
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
        name: '天地万象＋',
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
        name: '百花繚乱＋',
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
        name: 'ハリケーンダンス＋',
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
  },
  {
    clockType: ClockType.So,
    no: 36,
    id: 2,
    name: 'ストラス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7952,
    offense: 1081,
    defense: 420,
    speed: 479,
    ability: {name: '慈雨育苗', text: '自身がチャージフォトン使用時、自身の点穴を+5する'},
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
        name: '紫陽爛漫＋',
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
        name: '八仙開花＋',
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
        name: '激・才華爛発＋',
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
