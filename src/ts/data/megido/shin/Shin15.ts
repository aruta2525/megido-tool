import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 15,
    id: 1,
    name: 'サタナキア',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 8818,
    offense: 624,
    defense: 646,
    speed: 505,
    ability: {name: '功利的策略', text: '戦闘不能時、ラッシュの味方全体の点穴を＋15する'},
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
        name: '禁断の晩餐＋',
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
        name: '禁忌の実験譚＋',
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
        name: 'トキシックガスト＋',
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
    clockType: ClockType.Shin,
    no: 15,
    id: 2,
    name: 'サタナキア',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8986,
    offense: 815,
    defense: 475,
    speed: 537,
    ability: {name: '疑似生命の培養', text: '毎ターン終了時、25%の確率で自身以外の覚醒ゲージを+1する'},
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
        name: 'プロテクトセル＋',
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
        name: 'ミュータントパワー＋',
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
        name: '勝利の最適解＋',
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
