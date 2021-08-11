import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 66,
    id: 1,
    name: 'マモン',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 8102,
    offense: 1274,
    defense: 496,
    speed: 449,
    ability: {
      name: '鉄火の貴婦人',
      text: '味方編成がバレットアーツ状態中、バレットが1個以上あるとき、アタック時、バレットを1個消費する'
    },
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
        name: 'クロススリンガー+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0.65,
            hit: 4,
            text: '敵単体に攻撃力0.65倍の4連続ダメージ'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 0.65,
            hit: 4,
            text: 'バレットを消費し、敵単体に攻撃力0.65倍の4連続ダメージ。さらに自身にアタックを1つ追加する'
          }
        ]
      },
      {
        name: 'ガン・ホー・ダイ+',
        type: SkillType.AwakeningSkill,
        text: `自身覚醒全消費、2ターンの間リザーブ状態<br>
              【リザーブ効果】敵単体に攻撃力1.5倍ダメージ、バレット2個作成。攻撃時にバレットがあれば1個消費し、さらに2回跳弾させる<br>
              【バレット効果】攻撃時、ダメージを40%上昇＋2ターンの間、攻撃力20%低下`,
        levels: [
          {
            level: 0,
            label: '通常',
            magnification: 1.5,
            hit: 1
          },
          {
            level: 1,
            label: 'バレットあり',
            magnification: 1.5,
            hit: 3
          }
        ]
      },
      {
        name: 'ゴールデンハント+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに味方編成をBアーツ状態にする'
          },
          {
            level: 1,
            label: 'Bアーツ(1個)',
            magnification: 1.25,
            hit: 2,
            text: 'バレットを1個消費し、敵単体に攻撃力1.25倍のダメージ。さらに1回跳弾させる【バレットの消費が多いほど効果変化】'
          },
          {
            level: 2,
            label: 'Bアーツ(2個)',
            magnification: 1.25,
            hit: 3,
            text: 'バレットを同時に2個消費し、敵単体に攻撃力1.25倍のダメージ。さらに2回跳弾させる【バレットの消費が多いほど効果変化】'
          },
          {
            level: 3,
            label: 'Bアーツ(3個)',
            magnification: 1.25,
            hit: 4,
            text: 'バレットを同時に3個消費し、敵単体に攻撃力1.25倍のダメージ。さらに3回跳弾させ、自身を覚醒状態にする'
          }
        ],
        increment: 0.05
      },
      {
        name: 'グリードモアメタル',
        type: SkillType.SecretMysteries,
        text: '自身に掛かっている状態異常と弱体を治癒。さらに2ターンの間、状態異常と弱体を無効化する状態になり、Lv×30の固定追加ダメージを付与する',
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
