import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 55,
    id: 1,
    name: 'アリトン',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 6020,
    offense: 841,
    defense: 628,
    speed: 648,
    ability: {name: '執事の矜持', text: 'HPが33.3%以下の味方への単体攻撃を受け持つ'},
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
        name: 'キラースナイプ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 1.25,
            hit: 1,
            text: 'バレットを消費し、敵単体に攻撃力1.25倍のダメージ。さらに90%の確率で、積まれているフォトンを1つ破壊する	'
          }
        ]
      },
      {
        name: '非情なる粛清＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.1,
            hit: 2,
            text: '敵横一列に攻撃力1.1倍の2連続ダメージ。さらに80%の確率で、2ターンの間、攻撃力を25%低下させる'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 1.1,
            hit: 2,
            text: 'バレットを消費し、敵横一列に攻撃力1.1倍の2連続ダメージ。さらに90%の確率で、2ターンの間、攻撃力を25%低下させる'
          }
        ]
      },
      {
        name: 'ハウンド・ドッグ＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力4.25倍のダメージ。さらに、2ターンの間、敵が積めるフォトンの量を-1する',
        levels: [
          {
            level: 1,
            magnification: 4.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];
/*
 */

export default megido;
