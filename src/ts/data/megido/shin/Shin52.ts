import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 52,
    id: 1,
    name: 'ジズ',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5955,
    offense: 840,
    defense: 494,
    speed: 687,
    ability: {name: '自己防衛本能', text: '戦闘中、徐々に防御力が上昇する（最大値50%）'},
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
        name: '青天のとっぷう＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 1
          }
        ]
      },
      {
        name: '大いなる風のしらべ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 1
          }
        ]
      },
      {
        name: '終焉のモンスーン＋',
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
    clockType: ClockType.Shin,
    no: 52,
    id: 2,
    name: 'ジズ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7004,
    offense: 1309,
    defense: 397,
    speed: 514,
    ability: {name: '大いなる風の導き', text: '暴奏状態のとき、アタック、スキル、覚醒スキルの効果範囲が敵全体になる'},
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
        name: '風のカンタービレ＋',
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
        name: '風のカンタービレ＋(大協奏)',
        type: SkillType.Skill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '魔笛の風音＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '魔笛の風音＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '暴魔のソナタ＋',
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
