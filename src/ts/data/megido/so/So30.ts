import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So30: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 30,
    id: 1,
    name: 'フォルネウス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 8521,
    offense: 635,
    deffense: 487,
    speed: 616,
    ability: {name: '自信過剰', text: '受けるダメージを15%軽減する'},
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
        name: '一時の虚脱＋',
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
        name: '一時の虚脱＋',
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
        name: '紫霧のブレス＋',
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
