import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 17,
    id: 1,
    name: 'ティアマト',
    classType: ClassType.Counter,
    styleType: StyleType.Fighter,
    hp: 7349,
    offense: 1155,
    deffense: 621,
    speed: 280,
    ability: {
      name: '乙女の恋心',
      text: '自身にフォトンが与えられなかった場合ターン終了時、1ターンの間自身の攻撃力を25%上昇させ、バーサーク状態になる（攻撃力最大125%上昇　HP10%ダメージ）'
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
        name: '栄養満点スープ＋',
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
        name: '憎悪のポタージュ＋(シフト)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '快復マル秘レシピ＋',
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
        name: '念入りの下処理＋(シフト)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 6
          }
        ]
      },
      {
        name: '重量級の愛＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 5.25,
            hit: 1
          },
          {
            level: 3,
            magnification: 6.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 7.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
