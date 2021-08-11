import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So34: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 34,
    id: 1,
    name: 'フルフル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8688,
    offense: 1178,
    defense: 487,
    speed: 285,
    ability: {name: 'ものぐさ', text: '睡眠状態のとき、毎ターン終了時、覚醒ゲージが+2される'},
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
        name: 'うたた寝＋',
        type: SkillType.Skill,
        text: '3ターンの間、自身が睡眠状態になり、ターン終了時にHPが20%回復する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '召雷針＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.4,
            hit: 2,
            text: '敵横一列に攻撃力1.4倍の2連続雷ダメージ。2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 1.4,
            hit: 2,
            text: 'バレットを消費し、敵全体に攻撃力1.4倍の2連続雷ダメージ。2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる'
          }
        ]
      },
      {
        name: 'カオティックレイ＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        text: '敵全体に攻撃力2.75倍の雷ダメージ【睡眠状態でのみ使用可能】',
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 34,
    id: 2,
    name: 'フルフル',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 8517,
    offense: 1089,
    defense: 524,
    speed: 308,
    ability: {name: '寝る子は育つ', text: '自身が睡眠状態かつエレキ状態のとき、フォトンによる行動がキャンセルされた場合自身のエレキレベルを+3する'},
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
        name: '常在就寝＋',
        type: SkillType.Skill,
        attribute: Attribute.Thunder,
        text: `2ターンの間、自身が睡眠状態になり、ターン終了時にHPが10%回復する。さらにエレキ状態とスキルブレイク状態を付与する<br>
              【スキルブレイク】敵単体に自身のエレキレベルを転位する。さらに攻撃力0.8倍の3連続雷ダメージ【睡眠状態でも使用可能、睡眠状態を治癒】`,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          }
        ]
      },
      {
        name: '雷召電弧＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        text: '敵横一列に攻撃力1.75倍の雷ダメージ。さらに80%の確率で、2ターンの間、敵を感電状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ケイオスボルト＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 2,
            text: '敵単体に攻撃力2.25倍の2連続雷ダメージ。さらにエレキ状態を解除する【自身ブレイク1回発動ごとにLv上昇】'
          },
          {
            level: 2,
            magnification: 2.25,
            hit: 4,
            text: '敵単体に攻撃力2.25倍の4連続雷ダメージ。さらにエレキ状態を解除する【自身ブレイク1回発動ごとにLv上昇】'
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 6,
            text: '敵単体に攻撃力2.25倍の6連続雷ダメージ。さらにエレキ状態を解除する'
          }
        ],
        increment: 0.05
      }
    ]
  }
];
