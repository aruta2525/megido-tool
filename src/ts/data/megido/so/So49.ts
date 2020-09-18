import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So49: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 49,
    id: 1,
    name: 'クロケル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5688,
    offense: 1197,
    defense: 287,
    speed: 703,
    ability: {name: 'リズムに乗るのです！', text: '戦闘中、徐々に素早さが上昇する（最大値50%）'},
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
        name: '応援です！＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ぶっ飛ぶのです！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'ぶっ飛ぶのです！＋（大協奏）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'ロイヤルスワール＋',
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
    no: 49,
    id: 2,
    name: 'クロケル',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 5835,
    offense: 1164,
    defense: 476,
    speed: 500,
    ability: {name: 'ポジティブスコア', text: 'アタック時、2ターンの間、継続する音符を1つ付与する'},
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
        name: '容赦しないです！＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '容赦しないです！（大協奏）',
        type: SkillType.Skill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'コテンパンです！＋',
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
        name: 'コテンパンです！＋（大協奏）',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'デュナミスクリーヴ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: 'デュナミスクリーヴ＋（大協奏）',
        type: SkillType.Mysteries,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
