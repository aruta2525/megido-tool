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
  },
  {
    clockType: ClockType.Shin,
    no: 10,
    id: 2,
    name: 'グリマルキン',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7705,
    offense: 726,
    defense: 473,
    speed: 655,
    ability: {name: 'パチパチバリア', text: 'エネルギーの数に応じて、受けるダメージを軽減する（最大60%）'},
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
        name: 'ねこねこマジック！＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        text: `味方編成をFインパルス状態にする。さらにリリースにリリース効果を付与し、自身のエネルギーを+30する<br>
              【リリース効果】与えたダメージの15%を味方全体に吸収する`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '秘技！ねこ電撃星！＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.85倍の3連続雷ダメージ。さらに2ターンの間、防御力を30%低下させる',
        levels: [
          {
            level: 1,
            magnification: 0.85,
            hit: 3,
            attribute: Attribute.Thunder
          }
        ]
      },
      {
        name: '曇りのち猫ニャ！＋',
        text: '2ターンの間、味方単体の攻撃力を50%上昇させ、積めるフォトンの量を+1する',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
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
