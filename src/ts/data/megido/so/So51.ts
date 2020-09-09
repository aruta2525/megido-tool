import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So51: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 51,
    id: 1,
    name: 'バラム',
    classType: ClassType.Counter,
    styleType: StyleType.Fighter,
    hp: 5846,
    offense: 838,
    deffense: 594,
    speed: 676,
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
        name: 'バインドダガー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.57,
            hit: 2
          }
        ]
      },
      {
        name: '非戦の調停＋',
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
        name: 'ディザスターボム＋',
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
