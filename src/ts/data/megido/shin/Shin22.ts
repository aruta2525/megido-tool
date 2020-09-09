import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 22,
    id: 1,
    name: 'カスピエル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7399,
    offense: 1053,
    deffense: 490,
    speed: 478,
    ability: {name: 'ムーンコレクター', text: '自身の覚醒ゲージが最大の50%以上のとき、敵を状態異常にした際の持続ターンが+1される'},
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
        name: 'ナイトストーカー+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 1
          }
        ]
      },
      {
        name: 'シークレットコール+',
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
        name: '鮮血の一夜+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 22,
    id: 2,
    name: 'カスピエル',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 6797,
    offense: 1269,
    deffense: 288,
    speed: 617,
    ability: {name: 'デンジャラスゲーム', text: '致死ダメージを受けたとき、一度だけ踏みとどまる'},
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
        name: 'スカーレットレディ＋',
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
        name: 'デッドリーガーデン＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 4
          },
          {
            level: 1,
            magnification: 0.9,
            hit: 6
          },
          {
            level: 1,
            magnification: 0.9,
            hit: 8
          }
        ]
      },
      {
        name: '至極天の終夜＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
