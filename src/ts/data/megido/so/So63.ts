import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So63: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 63,
    id: 1,
    name: 'アンドラス',
    classType: ClassType.Rush,
    styleType: StyleType.Trooper,
    hp: 9109,
    offense: 849,
    deffense: 490,
    speed: 481,
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
        name: '接続治療＋',
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
        name: '死毒の縄＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'インジェクトバイオ＋',
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
    no: 63,
    id: 2,
    name: 'アンドラス',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 7535,
    offense: 639,
    deffense: 618,
    speed: 609,
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
        name: 'ゼクチオンメッサー＋',
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
        name: 'デリリアントブロー＋',
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
        name: 'ターヘルアナトミア＋',
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
  }
];
