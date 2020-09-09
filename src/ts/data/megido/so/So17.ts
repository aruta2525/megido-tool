import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So17: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 17,
    id: 1,
    name: 'ボティス',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 8845,
    offense: 761,
    deffense: 717,
    speed: 286,
    ability: { name: '', text: '' },
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
        name: 'カバーリング＋',
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
        name: 'ペンデュラム＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 2,
            hit: 1
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 1
          },
          {
            level: 4,
            magnification: 2.5,
            hit: 1
          }
        ]
      },
      {
        name: '穢れなき守護者＋',
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
