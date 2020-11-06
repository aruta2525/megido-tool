import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So15: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 15,
    id: 1,
    name: 'エリゴス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5896,
    offense: 768,
    defense: 622,
    speed: 627,
    ability: {name: '闘争心', text: '虫系のモンスターに2倍のダメージ'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: 'トンファーガード＋',
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
        name: '滅多打ち＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: 'ラストガーディアン＋',
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
    no: 15,
    id: 2,
    name: 'エリゴス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7119,
    offense: 1280,
    defense: 410,
    speed: 462,
    ability: {name: '湧き上がる闘志', text: '封印状態中、自身のフォトン容量を+2する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: '無法烈火＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '鋭鋒火急撃＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'ライジングフロー＋',
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
