import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So68: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 68,
    id: 1,
    name: 'ベリアル',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7630,
    offense: 976,
    defense: 431,
    speed: 644,
    ability: {name: '虚心坦懐', text: '自身の点穴の値が高いほど、受けるダメージを軽減する（最大40%）'},
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
        name: '命脈穿ち＋',
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
        name: '命脈穿ち＋（Bアーツ）',
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
        name: '不撓の眼光＋',
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
        name: '凶星墜とし＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 68,
    id: 2,
    name: 'ベリアル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7915,
    offense: 1096,
    defense: 628,
    speed: 381,
    ability: {name: '巫女の冥助', text: '炎上・狂炎地形がある敵から、受けるダメージを20%軽減する'},
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
        name: '焙烙射撃＋',
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
        name: '焙烙射撃＋（Bアーツ）',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 1
          }
        ]
      },
      {
        name: '不撓の眼光＋',
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
        name: '凶星の煌き＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 5
          }
        ],
        increment: 0.01
      }
    ]
  }
];
