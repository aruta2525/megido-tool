import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So27: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 27,
    id: 1,
    name: 'ロノウェ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10836,
    offense: 645,
    defense: 714,
    speed: 285,
    ability: {name: '正義のヒーロー', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: 'ウェポンガード＋',
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
        name: 'ブランディッシュ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'エクトプラズム＋',
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
