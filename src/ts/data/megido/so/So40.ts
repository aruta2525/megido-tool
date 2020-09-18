import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So40: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 40,
    id: 1,
    name: 'ラウム',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 10094,
    offense: 1155,
    defense: 418,
    speed: 277,
    ability: {name: '拾ったぞコラァッ！', text: '行動開始時、20%の確率でチャージが追加される'},
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
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 9069,
    offense: 955,
    defense: 618,
    speed: 282,
    ability: {name: '不屈の執念', text: '自身のHPが少ないほど、受けるダメージを軽減する（最大70%）'},
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
