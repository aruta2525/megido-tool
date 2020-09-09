import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 49,
    id: 1,
    name: 'サタナイル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 8189,
    offense: 838,
    deffense: 459,
    speed: 630,
    ability: {name: 'マエストロ', text: '音符が多いほど、攻撃力が上昇する（最大値50%）音符数×10%（5以上で50%）'},
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
        name: '戦いのコンチェルト＋',
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
        name: 'ピウ・ブリッランテ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ピウ・ブリッランテ＋(専用霊宝)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: 'ラ・ヌッラロンド＋',
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
        name: 'ラ・ヌッラロンド＋(専用霊宝)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
