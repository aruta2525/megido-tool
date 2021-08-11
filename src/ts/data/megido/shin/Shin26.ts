import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 26,
    id: 1,
    name: 'オレイ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7291,
    offense: 922,
    defense: 538,
    speed: 471,
    ability: {name: '盗争への渇望', text: '執心状態の敵から受けるダメージを25%軽減する'},
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
        name: '華麗なる予告状＋',
        type: SkillType.Skill,
        text: '2ターンの間、敵単体を執心状態にする。さらに80%の確率で、攻撃力を15%低下させる。チェイン中、味方単体にチェイン',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '奇跡の霊砂＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: 'Ch0',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を30%上昇。味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 2,
            label: 'Ch1',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方全体の攻撃力を30%上昇。さらに次の行動対象のスキルを強化し、フォトンをスキルに変化させチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 3,
            label: 'Ch2',
            magnification: 0,
            hit: 0,
            text: '	2ターンの間、味方全体の攻撃力を30%上昇。さらに次の行動対象のアタックを強化し、フォトンをアタックに変化させチェイン'
          }
        ]
      },
      {
        name: 'スティールジオール＋',
        type: SkillType.Mysteries,
        text: '敵全体の強化状態を解除し、攻撃力1.75倍のダメージ。味方単体にチェイン',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
