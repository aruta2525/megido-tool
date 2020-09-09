import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 58,
    id: 1,
    name: 'ダゴン',
    classType: ClassType.Counter,
    styleType: StyleType.Trooper,
    hp: 9316,
    offense: 1200,
    deffense: 420,
    speed: 276,
    ability: {name: '美味しいとこ取り', text: '自身がバーサーク状態のとき、防御力と素早さが毎ターン25%ずつ上昇する（最大値100%）'},
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
        name: 'ホイップベリーラブ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 1
          }
        ]
      },
      {
        name: 'キャラメルクランチ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 3
          }
        ]
      },
      {
        name: '無尽の欲求＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          },
          {
            level: 2,
            magnification: 2.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
