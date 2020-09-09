import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 19,
    id: 1,
    name: 'オリエンス',
    classType: ClassType.Rush,
    styleType: StyleType.Sniper,
    hp: 6612,
    offense: 1124,
    deffense: 423,
    speed: 558,
    ability: {name: '遅いわねっ！', text: '自身より素早さが低い対象へのダメージが50％上昇する'},
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
        name: '余裕でしょっ！＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 3
          }
        ]
      },
      {
        name: '余裕でしょっ！＋(Bアーツ)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.95,
            hit: 3
          }
        ]
      },
      {
        name: 'くらいなさいぃぃぃ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'くらいなさいぃぃぃ＋(Bアーツ)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          },
          {
            level: 2,
            magnification: 2,
            hit: 2
          },
          {
            level: 3,
            magnification: 2,
            hit: 3
          },
          {
            level: 4,
            magnification: 2,
            hit: 4
          },
          {
            level: 5,
            magnification: 2,
            hit: 5
          },
          {
            level: 6,
            magnification: 2,
            hit: 6
          },
          {
            level: 7,
            magnification: 2,
            hit: 7
          },
          {
            level: 8,
            magnification: 2,
            hit: 8
          },
          {
            level: 9,
            magnification: 2,
            hit: 9
          },
          {
            level: 10,
            magnification: 2,
            hit: 10
          }
        ]
      },
      {
        name: 'コンバットラビット＋',
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

export default megido;
