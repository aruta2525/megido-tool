import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 46,
    id: 1,
    name: 'アガシオン',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8444,
    offense: 700,
    defense: 700,
    speed: 410,
    ability: {
      name: '壺入り少年',
      text: '貫通による防御力無視を無効化する	'
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
        name: '決死の挑発＋',
        type: SkillType.Skill,
        text: `自身にレイズギフトを付与する。さらに2ターンの間、敵単体を執心状態にする<br>
              【レイズギフト効果】蘇生されたとき、自身のHPを35%回復し、さらに2ターンの間、敵単体を執心状態にする`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'タフネスアルケミー＋',
        type: SkillType.AwakeningSkill,
        text: `味方全体自然回復、全体ダメージ軽減、全体自動蘇生の3つからランダムで効果が発生。3回まで使用可能で、同じ効果は発生しない<br>
              2ターンの間、ターン終了時に味方全体のHPが40%回復する／2ターンの間、味方全体へのダメージを40%軽減する／味方全体が戦闘不能時にHP40%で蘇生する状態になる	`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'フォートシールド＋',
        type: SkillType.Mysteries,
        text: `味方全体に強化解除無効1回を付与し、レイズギフトを付与する。さらに2ターンの間、防御力を40%上昇させる<br>
              【レイズギフト効果】蘇生されたとき、自身への攻撃を3回無効化し、さらに2ターンの間、素早さを30%上昇する`,
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
