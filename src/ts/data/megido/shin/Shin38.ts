import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 38,
    id: 1,
    name: 'アガリアレプト',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7702,
    offense: 968,
    defense: 276,
    speed: 811,
    ability: {name: '軽快なステップ', text: '戦闘中、徐々に素早さが上昇する(最大値50％)'},
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
        name: 'メテオレイド+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          },
          {
            level: 2,
            magnification: 0.85,
            hit: 3
          },
          {
            level: 3,
            magnification: 0.9,
            hit: 3
          }
        ]
      },
      {
        name: 'ディストード+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          },
          {
            level: 2,
            magnification: 1.4,
            hit: 2
          },
          {
            level: 3,
            magnification: 1.4,
            hit: 2
          }
        ]
      },
      {
        name: 'ツインアブソーブ+',
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
  },
  {
    clockType: ClockType.Shin,
    no: 38,
    id: 2,
    name: 'アガリアレプト',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6390,
    offense: 1100,
    defense: 271,
    speed: 706,
    ability: {name: '因果律崩壊', text: '自身が励起状態のとき、攻撃力が30％上昇する'},
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
        name: 'プリズムノヴァ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.2,
            hit: 2
          },
          {
            level: 2,
            magnification: 1.2,
            hit: 2
          },
          {
            level: 3,
            magnification: 1.2,
            hit: 2
          },
          {
            level: 4,
            magnification: 1.2,
            hit: 2
          },
          {
            level: 5,
            magnification: 1.2,
            hit: 2
          }
        ]
      },
      {
        name: 'クロノスシフト＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.45,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.55,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.65,
            hit: 1
          }
        ]
      },
      {
        name: 'タキオンステップ＋',
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

export default megido;
