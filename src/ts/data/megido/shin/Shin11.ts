import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 11,
    id: 1,
    name: 'コルソン',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8949,
    offense: 788,
    defense: 416,
    speed: 563,
    ability: {name: '魂無き軍団の王', text: '束縛状態の敵1人につき、自身の攻撃力が10%上昇する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ヒミツのおまじない＋',
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
        name: 'みんなで突撃～＋(ぬいぐるみ巨大化)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.85,
            hit: 0
          }
        ]
      },
      {
        name: '一緒にあそぼっ！＋',
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
        name: 'コーちゃん怒った！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 4,
            hit: 1
          }
        ]
      },
      {
        name: 'ストレイシープ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  }
];

export default megido;
