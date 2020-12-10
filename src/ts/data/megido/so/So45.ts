import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So45: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 45,
    id: 1,
    name: 'ヴィネ',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7394,
    offense: 841,
    defense: 416,
    speed: 708,
    ability: {name: '慈愛の心', text: 'HPが50%以下の味方への回復量が50%上昇する'},
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
        name: '聖女の祈り＋',
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
        name: '気高き願い＋',
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
        name: '蒼海のアガペー＋',
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
  },
  {
    clockType: ClockType.So,
    no: 45,
    id: 2,
    name: 'ヴィネ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7354,
    offense: 746,
    defense: 495,
    speed: 647,
    ability: {name: 'お転婆姫君', text: 'HPが33.3%以下のとき、スキルの効果範囲が敵全体になる'},
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
        name: '水刃のエラルド＋',
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
        name: '水盾のラクス＋',
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
        name: '戦姫の洗礼＋',
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
/*
 */
