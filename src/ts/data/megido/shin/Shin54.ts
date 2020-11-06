import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 54,
    id: 1,
    name: 'アバラム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7286,
    offense: 1176,
    defense: 497,
    speed: 414,
    ability: {name: '勇士の律動', text: '協奏状態のとき、アタック時の覚醒ゲージ増加量が+1される'},
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
        name: 'サウンドステップ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.05,
            hit: 1
          }
        ]
      },
      {
        name: 'サウンドステップ＋(大協奏)',
        type: SkillType.Skill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'ビートショット＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 4
          }
        ]
      },
      {
        name: 'ビートショット＋(大協奏)',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 4
          }
        ]
      },
      {
        name: 'ブレイクメドレー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'ブレイクメドレー＋(大協奏)',
        type: SkillType.Mysteries,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
