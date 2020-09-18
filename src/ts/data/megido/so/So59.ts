import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So59: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 59,
    id: 1,
    name: 'オリアス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5947,
    offense: 1191,
    defense: 278,
    speed: 711,
    ability: {name: '不死の予言者', text: '次に出現するフォトンが亀裂の色でわかるようになる'},
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
        name: '変化の魔法＋',
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
        name: '冬の大三角＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 1
          }
        ]
      },
      {
        name: 'ヘイルキャノン＋',
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
    no: 59,
    id: 2,
    name: 'オリアス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7486,
    offense: 750,
    defense: 610,
    speed: 502,
    ability: {name: '雪華の予言者', text: '次に出現するフォトンが亀裂の色でわかるようになる'},
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
        name: 'ブリザードコフィン＋',
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
        name: 'アイオブプリザーブ＋',
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
        name: '占星なる聖域＋',
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
