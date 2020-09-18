import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So55: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 55,
    id: 1,
    name: 'オロバス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 8990,
    offense: 1207,
    defense: 483,
    speed: 284,
    ability: {name: '禁呪', text: '戦闘不能時、敵全体に攻撃力の1.5倍のダメージ'},
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
        name: '原初の魔法『零』＋',
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
        name: '原初の魔法『結』＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'グランドリープ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 55,
    id: 2,
    name: 'オロバス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 6133,
    offense: 1345,
    defense: 446,
    speed: 482,
    ability: {
      name: '禁忌の魔術',
      text: 'ネクロ状態時、自身が戦闘不能になったとき、自身に付与されているデスギフトの数が多いほど、ソウルが増加する【2つにつき+1、最大2】'
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
        name: '原初の魔法『魂』＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: '原初の魔法『魄』＋',
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
        name: '我これに報いん＋',
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
