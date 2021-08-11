import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So67: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 67,
    id: 1,
    name: 'アムドゥスキアス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7171,
    offense: 756,
    defense: 500,
    speed: 645,
    ability: {name: '漆黒の翼', text: '自身の素早さが30%上昇する'},
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
        name: '伏魔殿の結界+',
        type: SkillType.Skill,
        text: '味方単体への攻撃を2回無効化し、さらに2ターンの間、ターン終了時にHPが10%回復する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '眷属の帳+',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に攻撃力1.75倍のダメージ。さらに80%の確率で、2ターンの間、敵を暗闇状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ウィンドスピナー+',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力4.25倍のダメージ。さらに味方全体のHPを20%回復させる',
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
  },
  {
    clockType: ClockType.So,
    no: 67,
    id: 2,
    name: 'アムドゥスキアス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 6993,
    offense: 950,
    defense: 500,
    speed: 510,
    ability: {name: '孤高なる者', text: '生存している味方が少ないほど自身へのダメージを軽減する（最大20%）'},
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
        name: '円環なる冥府の魂＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: `味方単体にデスギフト(1)を付与し、さらに2ターンの間、攻撃力を20%上昇させる。味方編成をネクロ状態にする<br>
                  【デスギフト(1)効果】戦闘不能時、敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、敵の攻撃力を20%低下`
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 0,
            hit: 0,
            text: `ソウルを2つ消費し、味方単体にデスギフト(2)を付与し、さらに2ターンの間、攻撃力を20%上昇させる<br>
                  【デスギフト(2)効果】戦闘不能時、敵単体に攻撃力3.5倍のダメージ。さらに2ターンの間、敵の攻撃力を20%低下`
          }
        ]
      },
      {
        name: '黒き深淵の帳+',
        type: SkillType.AwakeningSkill,
        text: '敵全体に無敵と回数バリアの効果を無視する攻撃力1.4倍のダメージ。さらに、戦闘不能の味方単体を最大HPの25%で蘇生させる',
        levels: [
          {
            level: 1,
            magnification: 1.4,
            hit: 1
          }
        ]
      },
      {
        name: 'マラキアソムニウム+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2,
            hit: 1,
            text: '敵全体に攻撃力2倍のダメージ。3ターンの間、敵味方全体を浸食の地形にし、フォトンを使用するたび、3倍のダメージを与える'
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 2,
            hit: 1,
            text:
              'ソウルを2つ消費し、敵全体に攻撃力2倍のダメージ。3ターンの間、敵味方全体フォトンを使用するたび、3倍ダメージの浸食地形にし、味方全体の攻撃力30%上昇'
          }
        ],
        increment: 0.05
      }
    ]
  }
];
