import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So37: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 37,
    id: 1,
    name: 'フェニックス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7259,
    offense: 967,
    deffense: 472,
    speed: 490,
    ability: {name: '断罪', text: '攻撃時、敵の防御力を無視する'},
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
        name: '紅焔剣+',
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
        name: '処刑剣+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: '不死鳥の羽ばたき+',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 37,
    id: 2,
    name: 'フェニックス',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 7571,
    offense: 1144,
    deffense: 413,
    speed: 600,
    ability: {name: '悪を断ずる覚悟', text: '自身蘇生時、1ターンの間、自身を無敵状態にする'},
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
        name: '業火剣＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '不鎮の炎＋',
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
        name: '不死鳥の抱擁＋',
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
