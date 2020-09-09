import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So15: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 15,
    id: 1,
    name: 'エリゴス',
    classType: ClassType.Rush,
    styleType: StyleType.Fighter,
    hp: 5896,
    offense: 768,
    deffense: 622,
    speed: 627,
    ability: { name: '', text: '' },
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
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 7119,
    offense: 1280,
    deffense: 410,
    speed: 462,
    ability: { name: '', text: '' },
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
