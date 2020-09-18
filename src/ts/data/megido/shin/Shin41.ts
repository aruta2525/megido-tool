import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 41,
    id: 1,
    name: 'アマイモン',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5997,
    offense: 1354,
    defense: 429,
    speed: 503,
    ability: {name: '死を紡ぐ策王', text: '攻撃を受けたとき、10%の確率で呪い攻撃で反撃する'},
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
        name: '妄執ノ太刀＋',
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
        name: '轟竜刃＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ノワールアヴェルス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 3.5,
            hit: 1
          },
          {
            level: 1,
            magnification: 4,
            hit: 1
          },
          {
            level: 2,
            magnification: 4.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 5,
            hit: 1
          },
          {
            level: 4,
            magnification: 5.5,
            hit: 1
          },
          {
            level: 5,
            magnification: 6,
            hit: 1
          },
          {
            level: 6,
            magnification: 6.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
