import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 31,
    id: 1,
    name: 'フルーレティ',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7716,
    offense: 1004,
    deffense: 421,
    speed: 611,
    ability: {name: 'ノベリスターズハイ', text: '状態異常が付与されている敵1体につき、自身の攻撃力が8%上昇する'},
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
        name: '目眩く観察＋',
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
        name: '紙上の暴走＋',
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
        name: 'ブックカース＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 3,
            hit: 1
          },
          {
            level: 3,
            magnification: 3.5,
            hit: 1
          },
          {
            level: 4,
            magnification: 4,
            hit: 1
          },
          {
            level: 5,
            magnification: 4.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
