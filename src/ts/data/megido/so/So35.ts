import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So35: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 35,
    id: 1,
    name: 'マルコシアス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7701,
    offense: 1152,
    defense: 431,
    speed: 473,
    ability: {name: '悪魔狩り', text: '悪魔系のモンスターに2倍のダメージ'},
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
        name: 'デュアルショット＋',
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
        name: 'デュアルショット＋（Bアーツ）',
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
        name: 'ラピッドファイア＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ラピッドファイア＋（Bアーツ）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ライトジャベリン＋',
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
        name: 'ライトジャベリン＋（Bアーツ）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 35,
    id: 2,
    name: 'マルコシアス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 6761,
    offense: 1338,
    defense: 465,
    speed: 462,
    ability: {name: '正義の執行者【専用霊宝】', text: 'チェイン中、攻撃力が4%上昇する'},
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
        name: 'サプレスファイア＋',
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
        name: 'サプレスファイア＋（Bアーツ）',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'レイジングブル＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 0,
            magnification: 1.25,
            hit: 2
          },
          {
            level: 1,
            magnification: 1.25,
            hit: 4
          },
          {
            level: 2,
            magnification: 1.25,
            hit: 6
          }
        ]
      },
      {
        name: 'スターバースト＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 5,
            hit: 1
          },
          {
            level: 1,
            magnification: 5.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 6.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 8,
            hit: 1
          },
          {
            level: 4,
            magnification: 10,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'スターバースト＋【専用霊宝】',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 5,
            hit: 1
          },
          {
            level: 1,
            magnification: 5.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 6.5,
            hit: 1
          },
          {
            level: 3,
            magnification: 8,
            hit: 1
          },
          {
            level: 4,
            magnification: 12,
            hit: 1
          },
          {
            level: 5,
            magnification: 15,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
