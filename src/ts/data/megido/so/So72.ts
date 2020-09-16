import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So72: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 72,
    id: 1,
    name: 'アンドロマリウス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7094,
    offense: 752,
    deffense: 472,
    speed: 643,
    ability: {name: '臆病者', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: '飴玉シャワー＋',
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
        name: '雪玉スコール＋',
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
        name: 'ウィズダムスペル＋',
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
