import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So56: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 56,
    id: 1,
    name: 'グレモリー',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8773,
    offense: 989,
    defense: 485,
    speed: 416,
    ability: {name: '上質な装備', text: '自身の防御力が30%上昇する'},
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
        name: '先陣を切る＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '突撃命令＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方前列のアタックを強化し攻撃力を10%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '光のヴェール＋',
        type: SkillType.Mysteries,
        text: '3ターンの間、味方全体へのアタックフォトンからのダメージを85%軽減する',
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
