import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 9,
    id: 1,
    name: 'インキュバス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 6209,
    offense: 1177,
    defense: 489,
    speed: 497,
    ability: {name: '傲慢たる夢魔', text: 'めまい、混乱、悪夢のいずれかの状態異常が付与されている敵へのダメージが20%上昇する(効果は重複可能/最大60%上昇)'},
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
        name: 'ファスキナーレ＋',
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
        name: 'ヒュプノインパーケ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 3
          }
        ]
      },
      {
        name: 'ドゥルケソムニウム＋',
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
        name: 'ドゥルケソムニウム＋【専用霊宝】',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            magnification: 2.25,
            hit: 1
          },
          {
            level: 1,
            magnification: 2.6,
            hit: 1
          },
          {
            level: 2,
            magnification: 2.95,
            hit: 1
          },
          {
            level: 3,
            magnification: 3.3,
            hit: 1
          },
          {
            level: 4,
            magnification: 3.65,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 9,
    id: 2,
    name: 'インキュバスC',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8527,
    offense: 1370,
    defense: 302,
    speed: 449,
    ability: {name: '反逆の夢魔', text: '自身のHPが33.3%以下のとき、奥義使用時、覚醒ゲージの消費が0になる'},
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
        name: 'インクブスドルミーレ＋',
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
        name: 'フェルムプロピーナ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: 'フェルムプロピーナ＋(Bアーツ)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: 'グランフィニス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4,
            hit: 1
          },
          {
            level: 2,
            magnification: 5,
            hit: 1
          },
          {
            level: 3,
            magnification: 6,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
