import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So50: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 50,
    id: 1,
    name: 'フルカス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7649,
    offense: 1190,
    defense: 406,
    speed: 477,
    ability: {name: '撲殺気分', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: 'ミートスパイク＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 2,
            text: '敵単体に攻撃力0.6倍の防御無視2連続ダメージ【使用するごとにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 0.7,
            hit: 2,
            text: '敵単体に攻撃力0.7倍の防御無視2連続ダメージ【使用するごとにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 0.8,
            hit: 2,
            text: '敵単体に攻撃力0.8倍の防御無視2連続ダメージ【使用するごとにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 0.9,
            hit: 2,
            text: '敵単体に攻撃力0.9倍の防御無視2連続ダメージ'
          }
        ]
      },
      {
        name: 'マッドスラローム＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力3倍のダメージ。2ターンの間、自身の攻撃力を60%上昇させ反動で両隣が最大HPの15%ダメージ',
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ]
      },
      {
        name: 'メルティアサルト＋',
        type: SkillType.Mysteries,
        text: '単体に攻撃力1.75倍の3連続ダメージ。さらに2ターンの間、防御力を0にする',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 3
          }
        ],
        increment: 0.0166
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 50,
    id: 2,
    name: 'フルカス',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 7671,
    offense: 1136,
    defense: 441,
    speed: 479,
    ability: {
      name: '恍々惚々',
      text: '行動開始時、自身が覚醒状態の場合、1ターンの間、自身の攻撃力を25%上昇させバーサーク状態になる(攻撃力最大125%上昇 HP10%ダメージ)'
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
        name: 'アレイジスパイク＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.9倍の2連続ダメージ。さらに味方編成を怒闘状態にする',
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: 'マッドゴーラウンド＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.65倍の防御無視4連続ダメージ。さらに与えたダメージの15%を吸収する',
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 4
          }
        ]
      },
      {
        name: 'クレイジーブルーム＋',
        type: SkillType.Mysteries,
        text: `味方単体にスキルを1つ追加し、2ターンの間ターン終了時にHPを15%回復する。さらにカウンターの場合、1ターンの間攻撃力を50%上昇、バーサーク状態にする<br>
              【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける`,
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
