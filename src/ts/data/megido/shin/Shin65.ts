import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 65,
    id: 1,
    name: 'ベルフェゴール',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10192,
    offense: 1325,
    defense: 442,
    speed: 363,
    ability: {name: '男の勲章', text: 'HP50%以下のとき、自身のアタックフォトンが強化される'},
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
        name: '冥業四連撃+',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.8倍の4連続ダメージ。ただし反動で自身が最大HPの25%ダメージを受ける',
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 4
          }
        ]
      },
      {
        name: '懶惰の双天秤+',
        type: SkillType.AwakeningSkill,
        text: '自身以外の味方のHPを自身と同じ割合にする。さらに2ターンの間、味方全体の攻撃力を25%上昇させる	',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'アケディック・ロア+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            label: '0人',
            magnification: 2.75,
            hit: 1,
            text: '敵単体に攻撃力2.75倍のダメージ【HP50%以下の味方が多いほど効果上昇】'
          },
          {
            level: 1,
            label: '1人',
            magnification: 2.75,
            hit: 1,
            text: '敵全体に攻撃力2.75倍のダメージ【HP50%以下1人以上】'
          },
          {
            level: 2,
            label: '2人',
            magnification: 4,
            hit: 1,
            text: '敵全体に攻撃力4倍のダメージ【HP50%以下2人以上】'
          },
          {
            level: 3,
            label: '3人',
            magnification: 5.25,
            hit: 1,
            text: '	敵全体に攻撃力5.25倍のダメージ【HP50%以下3人以上】'
          },
          {
            level: 4,
            label: '4人',
            magnification: 6.5,
            hit: 1,
            text: '敵全体に攻撃力6.5倍のダメージ【HP50%以下4人以上】'
          },
          {
            level: 5,
            label: '5人',
            magnification: 7.75,
            hit: 1,
            text: '敵全体に攻撃力7.75倍のダメージ【HP50%以下5人以上】'
          }
        ],
        increment: 0.05
      },
      {
        name: 'カースオブレイジー',
        type: SkillType.SecretMysteries,
        text: '2ターンの間、敵全体の全てのフォトンを劣化させる。さらに味方全体のHPを最大HPの30%にし、攻撃を2回無効化させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      }
    ]
  }
];

export default megido;
