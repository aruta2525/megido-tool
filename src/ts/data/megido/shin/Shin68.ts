import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 68,
    id: 1,
    name: 'ネルガル',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 8302,
    offense: 1359,
    defense: 491,
    speed: 279,
    ability: {name: 'オートパイロット', text: '戦闘不能時、一度だけ最大HPの50%で蘇生し自身の特性によって蘇生した場合、自動操縦モードにシフトする'},
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
        name: 'アイアンドーム＋',
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
        name: '危険対象物除去＋(自動操縦)',
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
        name: 'ハンマーフィスト＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.5,
            hit: 4
          }
        ]
      },
      {
        name: '緊急回避行動＋(自動操縦)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'グランドコンバイン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
