import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 48,
    id: 1,
    name: 'ウトゥック',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6982,
    offense: 927,
    defense: 479,
    speed: 624,
    ability: {name: '火砲は撃って待て', text: 'バレットアーツ状態時、受けるダメージを20%軽減する'},
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
        name: 'ラウズアップカノン+',
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
        name: 'チャージボンバード+',
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
        name: 'チャージボンバード+(Bアーツ)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ]
      },
      {
        name: '撃滅の導弾+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: '撃滅の導弾+(Bアーツ)',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 3.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
