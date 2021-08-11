import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 7,
    id: 1,
    name: 'ヒュトギン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7616,
    offense: 784,
    defense: 493,
    speed: 619,
    ability: {name: '巧みな交渉術', text: '行動開始時、20%の確率でチャージが追加される'},
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
        name: 'ラ・フォンターナ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 1,
            text: '敵横一列に攻撃力0.9倍のダメージ。さらに80%の確率で、0.5倍で3ターン後に弾けるハイドロボム速を付与する'
          }
        ]
      },
      {
        name: 'サルーテ！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '味方全体の状態異常を治癒する。さらにHPを15%回復させる'
          }
        ]
      },
      {
        name: 'ヴァンタジオルチェ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '敵全体に付与されているハイドロボムのダメージを40%上昇させる。さらに2ターンの間攻撃力を15%低下させる'
          }
        ],
        increment: 0
      }
    ]
  }
];

export default megido;
