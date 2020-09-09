import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 55,
    id: 1,
    name: 'アリトン',
    classType: ClassType.Counter,
    styleType: StyleType.Sniper,
    hp: 6020,
    offense: 841,
    deffense: 628,
    speed: 648,
    ability: {name: '執事の矜持', text: 'HPが33.3%以下の味方への単体攻撃を受け持つ'},
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
        name: 'キラースナイプ＋',
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
        name: 'キラースナイプ＋()Bアーツ',
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
        name: '非情なる粛清＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 2
          }
        ]
      },
      {
        name: '非情なる粛清＋(Bアーツ)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 2
          }
        ]
      },
      {
        name: 'ハウンド・ドッグ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*
 */

export default megido;
