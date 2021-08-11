import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 43,
    id: 1,
    name: 'サルガタナス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 6503,
    offense: 763,
    defense: 618,
    speed: 608,
    ability: {name: 'オムニッセント', text: '毎ターン終了時、HPを15%回復する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'イレイズミスト+',
        type: SkillType.Skill,
        text: '敵単体に掛かっている強化を解除する。さらに2ターンの間、防御力を20%低下させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ソウルプリズン+',
        type: SkillType.AwakeningSkill,
        text: '敵全体を完殺状態（永続）にする。さらに2ターンの間、攻撃力を25%低下させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '海闊天空の息吹+',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方全体のアタックを強化し、攻撃力を10%上昇させる。味方単体にチェイン	',
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
