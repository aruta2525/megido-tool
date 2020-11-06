import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 30,
    id: 1,
    name: 'バラキエル',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 6568,
    offense: 739,
    defense: 643,
    speed: 531,
    ability: {
      name: '自称最強メギド',
      text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'
    },
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
        name: 'エイドクリスタル＋',
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
        name: 'ワンダーヘルメット＋',
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
        name: 'エヴァーフローズン＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'エヴァーフローズン＋（オーラ消費）',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
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
