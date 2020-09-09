import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 1,
    id: 1,
    name: 'リリム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7342,
    offense: 1198,
    deffense: 415,
    speed: 496,
    ability: {
      name: '夢の世界の支配者',
      text: '敵味方合わせて、睡眠状態のキャラクター1人につき、自身の攻撃力、防御力、素早さが10%上昇する（最大値50%）'
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
        name: '白昼夢＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 3,
            magnification: 1.35,
            hit: 1
          },
          {
            level: 4,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: '苦痛のパトス＋',
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
        name: 'メルヘンダービー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 1,
    id: 2,
    name: 'リリム',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6022,
    offense: 814,
    deffense: 677,
    speed: 533,
    ability: {name: '正邪の双翼', text: '自身の素早さが30%上昇する'},
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
        name: '探りの夢見＋',
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
        name: '鬨夢＋',
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
        name: '魘夢のプフェーアト＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
