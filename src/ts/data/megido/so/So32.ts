import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So32: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 32,
    id: 1,
    name: 'アスモデウス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 8686,
    offense: 1402,
    defense: 423,
    speed: 283,
    ability: {name: '混沌を孕む者', text: '自身のHPが33.3%以下のとき、通常攻撃、スキル、覚醒スキル、奥義の効果範囲が敵全体になる'},
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
        name: '蒼炎の剣＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '絶対者の息吹＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ]
      },
      {
        name: '破滅を齎す黒炎＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 6.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
