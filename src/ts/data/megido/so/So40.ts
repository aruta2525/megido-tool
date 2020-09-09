import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So40: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 40,
    id: 1,
    name: 'ラウム',
    classType: ClassType.Burst,
    styleType: StyleType.Trooper,
    hp: 10094,
    offense: 1155,
    deffense: 418,
    speed: 277,
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
        name: '夜露死苦！＋',
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
        name: '仏恥義琉！！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 3
          }
        ]
      },
      {
        name: 'デンジャラスバイト＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.1,
            hit: 3
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 40,
    id: 2,
    name: 'ラウム',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 9069,
    offense: 955,
    deffense: 618,
    speed: 282,
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
        name: '仁王立ち＋',
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
        name: '御礼参り＋（最大倍率）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.75,
            hit: 1
          }
        ]
      },
      {
        name: '魔武駄致＋',
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
