import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So58: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 58,
    id: 1,
    name: 'アミー',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7331,
    offense: 953,
    defense: 406,
    speed: 626,
    ability: {
      name: '絃結界',
      text: '戦闘中、徐々に素早さが上昇する（最大値50%）'
    },
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
        name: '籠絡絃＋',
        type: SkillType.Skill,
        text: '敵横一列に攻撃力1.15倍のダメージ。さらに2ターンの間、敵を引き寄せ状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          }
        ]
      },
      {
        name: '捕縛陣＋',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に攻撃力2倍のダメージ。さらに80%の確率で、2ターンの間、敵の素早さを60%低下させる',
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: 'ブレイズスラッシュ＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力5.25倍の火ダメージ。さらに味方前列にアタックフォトンを1つ追加する',
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
