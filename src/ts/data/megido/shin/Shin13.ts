import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 13,
    id: 1,
    name: 'バフォメット',
    classType: ClassType.Rush,
    styleType: StyleType.Sniper,
    hp: 6898,
    offense: 1180,
    deffense: 369,
    speed: 645,
    ability: {name: '魔術の心得', text: '50%の確率で、ターン終了時に自身にかかっている状態異常を治癒する'},
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
        name: '風の紡ぎ唄＋',
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
        name: '封邪のコントラクト＋',
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
        name: 'タブー・マジック＋',
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

export default megido;
