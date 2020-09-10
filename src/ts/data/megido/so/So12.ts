import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So12: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 12,
    id: 1,
    name: 'シトリー',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 5667,
    offense: 1176,
    deffense: 494,
    speed: 476,
    ability: {name: 'ハルマニアの槍', text: '覚醒ゲージが多いほど攻撃力が上昇する(最大値25%)'},
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
        name: 'ジャスティスライト+',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 3
          }
        ]
      },
      {
        name: 'エクスプロージョン+',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.45,
            hit: 1
          }
        ]
      },
      {
        name: 'エアリアルグロー+',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 12,
    id: 2,
    name: 'シトリー',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 8547,
    offense: 1001,
    deffense: 487,
    speed: 421,
    ability: {name: '変幻自在の槍', text: '敵全体にHボムが付与されているほど、攻撃力が上昇する（最大45%）'},
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
        name: '水天彷彿戟＋',
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
        name: '水落魚竜ノ夜＋',
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
        name: 'ハイドロブラスト＋',
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
  }
];
