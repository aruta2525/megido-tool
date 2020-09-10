import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So16: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 16,
    id: 1,
    name: 'ゼパル',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6210,
    offense: 1209,
    deffense: 271,
    speed: 693,
    ability: {name: '結婚願望', text: '男性キャラクターがパーティに居る場合、攻撃力が20%上昇する'},
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
        name: '三枚下ろし＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 3
          }
        ]
      },
      {
        name: '微塵切り＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 6
          }
        ]
      },
      {
        name: 'タービュランス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 5
          }
        ],
        increment: 0.0125
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 16,
    id: 2,
    name: 'ゼパル',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 6210,
    offense: 1150,
    deffense: 409,
    speed: 642,
    ability: {name: '過激エンパシー', text: 'バーサーク状態の味方の数が多いほど、受けるダメージを軽減する（最大50%）'},
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
        name: '四枚下ろし+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: 'アングリーオーダー+',
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
        name: '伝播する情動+',
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
