import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So28: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 28,
    id: 1,
    name: 'ベリト',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5631,
    offense: 1226,
    deffense: 428,
    speed: 623,
    ability: {name: '恥かかすなよ！', text: 'HPが50%以下のとき、攻撃力が30%上昇する'},
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
        name: 'グリムスティンガー＋',
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
        name: 'エンペラーグラブ＋',
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
        name: 'ワールドイズマイン＋',
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
    no: 28,
    id: 2,
    name: 'ベリト',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7942,
    offense: 1053,
    deffense: 518,
    speed: 432,
    ability: {name: '帯電体質', text: 'チェイン中、自身のアタックとスキルが雷ダメージになる'},
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
        name: '閃光刃＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: '無限の施し＋',
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
        name: '稲妻の裁断＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 0,
            magnification: 3.75,
            hit: 1
          },
          {
            level: 1,
            magnification: 4.5,
            hit: 1
          },
          {
            level: 2,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
