import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 54,
    id: 1,
    name: 'アバラム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7286,
    offense: 1176,
    defense: 497,
    speed: 414,
    ability: {name: '勇士の律動', text: '協奏状態のとき、アタック時の覚醒ゲージ増加量が+1される'},
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
        name: 'サウンドステップ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.05,
            hit: 1,
            text: '敵全体に攻撃力1.05倍のダメージ'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 1.25,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵全体に攻撃力1.25倍の響撃ダメージ'
          }
        ]
      },
      {
        name: 'ビートショット＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0.7,
            hit: 4,
            text: '敵全体に攻撃力0.7倍の4連続ダメージ。ただし、味方編成に蓄積されている全ての2ターン音符の継続ターンを-1する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0.8,
            hit: 4,
            attribute: Attribute.Sound,
            text: '敵全体に攻撃力0.8倍の4連続響撃ダメージ。ただし、味方編成に蓄積されている全ての2ターン音符の継続ターンを-1する'
          }
        ]
      },
      {
        name: 'ブレイクメドレー＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2.25,
            hit: 1,
            text: '敵全体に攻撃力2.25倍のダメージ。さらに60%の確率で、2ターンの間、敵の素早さを0にする'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 2.25,
            attribute: Attribute.Sound,
            hit: 1,
            text: '敵全体に攻撃力2.25倍の響撃ダメージ。さらに80%の確率で、2ターンの間、敵の素早さを0にする'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
