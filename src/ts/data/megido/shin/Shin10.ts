import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 10,
    id: 1,
    name: 'グリマルキン',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7347,
    offense: 859,
    defense: 483,
    speed: 652,
    ability: {name: 'バチバチしますニャ', text: '攻撃を受けたとき、10%の確率で雷ダメージで反撃する'},
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
        name: 'ねこねこパニック！＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        text: '敵単体に攻撃力1.25倍の雷ダメージ。さらにエレキ状態を付与する',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '秘技！にゃん張り手＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.5倍の2連続ダメージ。さらに2ターンの間、受ける雷ダメージを50%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'プァプァランブル！＋',
        text: '敵単体に攻撃力5.25倍の雷ダメージ。さらにエレキ状態を解除する',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
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

export default megido;
