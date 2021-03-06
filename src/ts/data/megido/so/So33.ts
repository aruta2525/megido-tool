import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So33: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 33,
    id: 1,
    name: 'ガープ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10133,
    offense: 854,
    defense: 642,
    speed: 279,
    ability: {name: 'リボルトストライク', text: '攻撃を受けたとき、10%の確率でめまい攻撃で反撃する'},
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
        name: 'ザ・ウォール＋',
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
        name: 'ジールバッシュ＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 4,
            hit: 1
          }
        ]
      },
      {
        name: 'ヴァルカンの聖域＋',
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
