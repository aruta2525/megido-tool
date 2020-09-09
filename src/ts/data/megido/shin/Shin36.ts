import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 36,
    id: 1,
    name: 'メフィスト',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5899,
    offense: 1194,
    deffense: 417,
    speed: 648,
    ability: {name: '出たとこ勝負！', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: 'ロール・ロール＋',
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
        name: 'イービル・ダイス＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 4.8,
            hit: 1
          },
          {
            level: 2,
            magnification: 0.75,
            hit: 2
          },
          {
            level: 3,
            magnification: 0.75,
            hit: 3
          },
          {
            level: 4,
            magnification: 0.75,
            hit: 4
          },
          {
            level: 5,
            magnification: 0.75,
            hit: 5
          },
          {
            level: 6,
            magnification: 0.75,
            hit: 6
          }
        ]
      },
      {
        name: 'キリングヒット＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 2,
            hit: 1
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 36,
    id: 2,
    name: 'メフィスト',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7452,
    offense: 615,
    deffense: 637,
    speed: 634,
    ability: {name: '悪魔の勝負師', text: '自身のHPが33.3%以下のとき、覚醒スキルの出目が必ず「8」になる'},
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
        name: '景気付けの一発＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 1
          }
        ]
      },
      {
        name: 'イービルダイス・盛＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'フォーチュンロア＋',
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
