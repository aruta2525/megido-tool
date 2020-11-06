import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So34: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 34,
    id: 1,
    name: 'フルフル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8688,
    offense: 1178,
    defense: 487,
    speed: 285,
    ability: {name: 'ものぐさ', text: '睡眠状態のとき、毎ターン終了時、覚醒ゲージが+2される'},
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
        name: 'うたた寝＋',
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
        name: '召雷針＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          }
        ]
      },
      {
        name: '召雷針＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 2
          }
        ]
      },
      {
        name: 'カオティックレイ＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 34,
    id: 2,
    name: 'フルフル',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 8517,
    offense: 1089,
    defense: 524,
    speed: 308,
    ability: {name: '寝る子は育つ', text: '自身が睡眠状態かつエレキ状態のとき、フォトンによる行動がキャンセルされた場合自身のエレキレベルを+3する'},
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
        name: '常在就寝＋（スキルブレイク）',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          }
        ]
      },
      {
        name: '雷召電弧＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ケイオスボルト＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 2
          },
          {
            level: 2,
            magnification: 2.25,
            hit: 4
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 6
          }
        ],
        increment: 0.05
      }
    ]
  }
];
