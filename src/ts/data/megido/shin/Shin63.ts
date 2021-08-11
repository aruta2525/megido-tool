import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 63,
    id: 1,
    name: 'アマゼロト',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 6816,
    offense: 1280,
    defense: 393,
    speed: 527,
    ability: {name: '臍下金剛', text: '封印状態中、自身の全ての状態異常への耐性が100%上昇する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: '廻転凍突き＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに60%の確率で、2ターンの間、敵を凍結状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '槍塵跳天燕落とし＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.75倍のダメージ。さらに自身にアタックフォトンを2つ追加する',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '氷氷武踏攻備＋',
        type: SkillType.Mysteries,
        text: '3ターンの間、味方全体の素早さを30%上昇させる。さらにラッシュの場合、封印状態にし封印状態の味方の数だけ攻撃力を10%上昇させアタックを強化する',
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
