import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So58: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 58,
    id: 1,
    name: 'アミー',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7331,
    offense: 953,
    deffense: 406,
    speed: 626,
    ability: {name: '絃結界', text: '戦闘中、徐々に素早さが上昇する（最大値50%）'},
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
        name: '籠絡絃＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          }
        ]
      },
      {
        name: '捕縛陣＋',
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
        name: 'ブレイズスラッシュ＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
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
  }
];
