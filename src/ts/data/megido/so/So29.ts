import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So29: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 29,
    id: 1,
    name: 'アスタロト',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7365,
    offense: 1075,
    defense: 496,
    speed: 476,
    ability: {name: 'ピンチはチャンス', text: 'HPが50%以下のとき、すべての覚醒ゲージ増加量が+1される'},
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
        name: '元気にしてあげる♪＋',
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
        name: 'ノコ斬り＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極北のブレス＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 29,
    id: 2,
    name: 'アスタロト',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 5945,
    offense: 1216,
    defense: 545,
    speed: 413,
    ability: {name: 'コールドリーディング', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: '一汗かこうヨ+',
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
        name: '悩殺スカルブレイク+',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極彩ナイトスター+',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*

*/
