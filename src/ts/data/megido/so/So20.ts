import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So20: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 20,
    id: 1,
    name: 'プルソン',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 8688,
    offense: 975,
    deffense: 412,
    speed: 475,
    ability: {name: '俺はまだやれる！', text: '致死ダメージを受けたとき、20%の確率で踏みとどまる'},
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
        name: 'グランドドライバー＋',
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
        name: 'オーラテンペスト＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '大地を沈めし鉄槌＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
