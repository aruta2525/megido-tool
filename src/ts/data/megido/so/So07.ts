import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So07: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 7,
    id: 1,
    name: 'アモン',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 4598,
    offense: 1194,
    defense: 417,
    speed: 685,
    ability: {name: '隠密行動', text: '敵から狙われにくくなり、攻撃力が10%上昇する'},
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
        name: '巾着切り+',
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
        name: 'ダーティレイド+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: '世界を包む炎獄+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 7,
    id: 2,
    name: 'アモン',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6039,
    offense: 1200,
    defense: 420,
    speed: 627,
    ability: {name: '間隙突き', text: '覚醒ゲージが0の対象に1.5倍のダメージ'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 3
          }
        ]
      },
      {
        name: 'クレセント＋',
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
        name: 'サイレンスリーパー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: 'リヴィールエッジ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.2,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  }
];
