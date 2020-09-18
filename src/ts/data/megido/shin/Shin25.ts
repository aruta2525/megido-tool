import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 25,
    id: 1,
    name: 'ニスロク',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 8840,
    offense: 1226,
    defense: 421,
    speed: 438,
    ability: {name: '飽くなき食への探求', text: '敵の数が少ないほど、攻撃力が上昇する（最大値20%）'},
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
        name: '壱、専心研磨＋',
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
        name: '弐、味加減精査＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: '弐、味加減精査＋(Bアーツ)',
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
        name: '参、仕上之一撃＋(Bアーツ)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 2,
            hit: 1
          },
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 4.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 5.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
