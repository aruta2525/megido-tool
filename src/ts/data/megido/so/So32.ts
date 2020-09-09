import { ICharacter } from '../../../interface/ICharacter';
import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/MegidoType';

export const So32: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 32,
    id: 1,
    name: 'アスモデウス',
    classType: ClassType.Burst,
    styleType: StyleType.Fighter,
    hp: 8686,
    offense: 1402,
    deffense: 423,
    speed: 283,
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
