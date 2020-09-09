import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So42: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 42,
    id: 1,
    name: 'ウェパル',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 5646,
    offense: 1188,
    deffense: 287,
    speed: 699,
    ability: { name: '', text: '' },
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
        name: 'ウェイブライダー＋',
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
        name: '水龍戟＋',
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
        name: 'セイレーンの涙＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0167
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 42,
    id: 2,
    name: 'ウェパル',
    classType: ClassType.Burst,
    styleType: StyleType.Trooper,
    hp: 8606,
    offense: 639,
    deffense: 646,
    speed: 493,
    ability: { name: '', text: '' },
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
        name: 'ツイストウェイブ+',
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
        name: 'ウンディーネの戯れ+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 1
          }
        ]
      },
      {
        name: 'オーシャンティア+',
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
