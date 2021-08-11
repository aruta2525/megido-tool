import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 27,
    id: 1,
    name: 'マルチネ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 6697,
    offense: 1353,
    defense: 417,
    speed: 488,
    ability: {name: '特攻少女', text: 'チェイン中に行動する度、覚醒ゲージが+1される'},
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
        name: 'バーニアダンス＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            label: 'Ch0',
            magnification: 0.75,
            hit: 1,
            text: '敵単体に攻撃力0.75倍のダメージ。チェイン数に応じて倍率と効果が変化'
          },
          {
            level: 1,
            label: 'Ch1',
            magnification: 1.75,
            hit: 1,
            text: '敵単体に攻撃力1.75倍のダメージ。さらに90%の確率で積まれているフォトンを1つ破壊する'
          }
        ]
      },
      {
        name: 'フルスロットル＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1,
            text: '自身の覚醒ゲージをすべて消費し、敵単体に攻撃力2倍のダメージ。2ターンの間、味方単体の攻撃力を50%上昇し回数チェイン1回を付与する'
          }
        ]
      },
      {
        name: '祖弐苦武羽霧＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 0,
            label: 'Ch0',
            magnification: 2,
            hit: 1,
            text: '敵横一列攻撃力2倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。チェイン数に応じて倍率変化'
          },
          {
            level: 1,
            label: 'Ch1',
            magnification: 2.25,
            hit: 1,
            text: '敵横一列攻撃力2.25倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。チェイン数に応じて倍率変化'
          },
          {
            level: 2,
            label: 'Ch2',
            magnification: 2.75,
            hit: 1,
            text: '敵横一列攻撃力2.75倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。チェイン数に応じて倍率変化'
          },
          {
            level: 3,
            label: 'Ch3',
            magnification: 3.25,
            hit: 1,
            text: '敵横一列攻撃力3.25倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。チェイン数に応じて倍率変化'
          },
          {
            level: 4,
            label: 'Ch4',
            magnification: 4,
            hit: 1,
            text: '敵横一列攻撃力4倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
