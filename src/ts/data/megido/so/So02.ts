import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So02: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 2,
    id: 1,
    name: 'アガレス',
    classType: ClassType.Burst,
    styleType: StyleType.Sniper,
    hp: 10712,
    offense: 971,
    deffense: 418,
    speed: 427,
    ability: {name: '運命の導き', text: '致死ダメージを受けたとき、20%の確率で踏みとどまる'},
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
        name: 'ダブルトマホーク＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 2
          }
        ]
      },
      {
        name: 'ダブルトマホーク＋(Bアーツ)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 2
          }
        ]
      },
      {
        name: 'モータルハチェット＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.15,
            hit: 2
          }
        ]
      },
      {
        name: 'プラネットフォース＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 2,
    id: 2,
    name: 'アガレス',
    classType: ClassType.Counter,
    styleType: StyleType.Sniper,
    hp: 6106,
    offense: 1218,
    deffense: 394,
    speed: 616,
    ability: {name: '運命の裁き', text: '神系のモンスターに2倍のダメージ'},
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
        name: 'ハチェットスライス+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.55,
            hit: 2
          }
        ]
      },
      {
        name: 'ハチェットスライス+(Bアーツ)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.7,
            hit: 2
          }
        ]
      },
      {
        name: 'オーバーソウル+',
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
        name: '星砕き+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 4,
            hit: 1
          },
          {
            level: 3,
            magnification: 4.5,
            hit: 1
          },
          {
            level: 4,
            magnification: 5,
            hit: 1
          },
          {
            level: 5,
            magnification: 5.5,
            hit: 1
          },
          {
            level: 6,
            magnification: 6,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
