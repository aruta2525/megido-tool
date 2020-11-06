import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So19: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 19,
    id: 1,
    name: 'サレオス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 8474,
    offense: 945,
    defense: 490,
    speed: 424,
    ability: {name: '後光アタック', text: '攻撃を受けたとき、10%の確率で暗闇攻撃で反撃する'},
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
        name: '臨兵闘者皆陣列在前+',
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
        name: '三途の川渡し+',
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
        name: '腐食のブレス+',
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
    no: 19,
    id: 2,
    name: 'サレオス',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8330,
    offense: 881,
    defense: 525,
    speed: 479,
    ability: {
      name: '仏の顔も三度まで',
      text: '自身が攻撃でダメージを3回受けたとき1ターンの間自身の攻撃力を25%上昇させ、バーサーク状態になる（最大125%上昇）'
    },
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
        name: '水神の怒り＋',
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
        name: 'マントラ＋',
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
        name: '三途の濁流＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
