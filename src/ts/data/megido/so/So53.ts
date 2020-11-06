import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So53: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 53,
    id: 1,
    name: 'カイム',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 9032,
    offense: 615,
    defense: 472,
    speed: 636,
    ability: {name: '傲岸不遜', text: '受けるダメージを15%軽減する'},
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
        name: 'マインドクラッシュ+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'オブリビオン+',
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
        name: 'トリックスター+',
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
