import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 44,
    id: 1,
    name: '',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7970,
    offense: 1141,
    defense: 415,
    speed: 493,
    ability: {
      name: '機械整備',
      text: '連結武器中、毎ターン終了時、HPを20%回復する'
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
        name: '赤熱レンチ！＋(分離武器)',
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
        name: 'ブラストフレイム＋(連結武器)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: '熱狂フューエル！＋(分離武器)',
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
        name: 'フルブラストフレイム＋(連結武器)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 8
          }
        ]
      },
      {
        name: '焦熱リーサルフレア＋',
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

export default megido;
