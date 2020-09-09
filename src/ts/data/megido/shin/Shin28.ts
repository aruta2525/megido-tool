import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 28,
    id: 1,
    name: 'アザゼル',
    classType: ClassType.Rush,
    styleType: StyleType.Fighter,
    hp: 7098,
    offense: 1222,
    deffense: 409,
    speed: 497,
    ability: {name: '翳なる者', text: '25%の確率で、受ける攻撃をMISSにする（奥義、秘奥義、オーブによる攻撃を除く）'},
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
        name: '暗器投げ＋(Bアーツ)',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.75,
            hit: 1
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: '暗器調整＋',
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
        name: '個にして全＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 6
          },
          {
            level: 2,
            magnification: 1.2,
            hit: 6
          },
          {
            level: 3,
            magnification: 1.6,
            hit: 6
          },
          {
            level: 4,
            magnification: 2,
            hit: 6
          }
        ],
        increment: 0
      }
    ]
  }
];

export default megido;
