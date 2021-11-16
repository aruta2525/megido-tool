import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 33,
    id: 1,
    name: 'ハック',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8902,
    offense: 1001,
    defense: 287,
    speed: 629,
    ability: {name: '指導者の矜持', text: '致死ダメージを受けたとき、生存している味方が多いほど、高確率で踏みとどまる(最大40%)'},
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
        name: '筋骨隆々の舞＋',
        type: SkillType.Skill,
        text: '敵横一列に攻撃力1.15倍のダメージ。さらに2ターンの間、敵をノックバック状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1
          }
        ]
      },
      {
        name: 'かかってこんかい！＋(最大)',
        type: SkillType.AwakeningSkill,
        text: '自身への攻撃を1回無効化し、1度だけHPが少ないほど威力の高いダメージで反撃（最大で攻撃力の5.75倍のダメージ）',
        levels: [
          {
            level: 1,
            magnification: 5.75,
            hit: 1
          }
        ]
      },
      {
        name: '根源なる筋肉の胎動＋',
        type: SkillType.Mysteries,
        text: '敵横一列に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の5.25倍）。2ターンの間、0.75倍の地割れ地形にする',
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
    no: 33,
    id: 2,
    name: 'ハック',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7969,
    offense: 848,
    defense: 464,
    speed: 618,
    ability: {name: '熱血セコンド', text: '自身がチェインを発動したときチェイン先の味方単体のHPを15%回復する'},
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
        name: 'よし、行ってこい！＋',
        type: SkillType.Skill,
        text: '2ターンの間、味方単体のスキルを強化する。さらに、ターゲットに関係なく最も攻撃力の高い味方にチェイン',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ハックヒップバット＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力2倍のダメージ。さらに敵に掛かっている強化を解除する。自身に回数チェイン1回を付与する',
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ]
      },
      {
        name: '熱き筋肉の至宝＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方単体の攻撃力を70%上昇させ、積めるフォトンの量を+1する。味方単体にチェイン',
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
