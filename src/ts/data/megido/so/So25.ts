import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So25: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 25,
    id: 1,
    name: 'グラシャラボラス',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7290,
    offense: 1170,
    defense: 416,
    speed: 494,
    ability: {name: '器物破損', text: '物体系のモンスターに2倍のダメージ'},
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
        name: 'ぶん回し＋',
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
        name: 'グレートぶん回し＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ピリオドの向こうへ＋',
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
  },
  {
    clockType: ClockType.So,
    no: 25,
    id: 2,
    name: 'グラシャラボラス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7356,
    offense: 1213,
    defense: 467,
    speed: 440,
    ability: {name: 'まだまだこっから！', text: 'HP10%以下のとき、自身の攻撃力が60%上昇する'},
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
        name: 'グレートスパーク＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          }
        ]
      },
      {
        name: 'バチバチ伝説＋',
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
        name: 'デスダンス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'デスダンス＋(HP10%以下)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 9.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
