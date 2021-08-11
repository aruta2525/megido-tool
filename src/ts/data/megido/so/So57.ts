import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So57: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 57,
    id: 1,
    name: 'オセ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7351,
    offense: 1152,
    defense: 283,
    speed: 614,
    ability: {name: '豹の化身', text: '自身の攻撃力が15%上昇する'},
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
        name: 'ポイズンクロー＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を毒状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'マッハクロー＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.75倍の4連続ダメージ。さらに自身にアタックフォトンを1つ追加する',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: '猛りの暴獣爪＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力1.1倍の3連続ダメージ。さらに2ターンの間、自身のアタックを強化する',
        levels: [
          {
            level: 1,
            magnification: 1.1,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  }
];
