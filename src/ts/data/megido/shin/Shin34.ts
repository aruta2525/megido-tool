import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 34,
    id: 1,
    name: 'マスティマ',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 7587,
    offense: 1072,
    defense: 496,
    speed: 492,
    ability: {
      name: '悲劇の騎士',
      text: 'ソウルの数が多いほど自身の攻撃力が上昇する【1つにつき+5%、最大30%】'
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
        name: '嘆きの宣誓＋',
        type: SkillType.Skill,
        text: `味方全体にレイズギフトを付与し、味方編成をネクロ状態にする<br>
              【レイズギフト効果】蘇生された1ターン後に、2ターンの間、味方全体の攻撃力と防御力を30%上昇する	`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '戒めの魔蔦＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.3,
            hit: 1,
            text: '	敵横一列に攻撃力1.3倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 1.6,
            hit: 1,
            text: '	敵横一列に攻撃力1.6倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 1.9,
            hit: 1,
            text: '	敵横一列に攻撃力1.9倍のダメージ'
          }
        ]
      },
      {
        name: '悲劇の発露＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2.25,
            hit: 2,
            text: '敵単体に攻撃力2.25倍の2連続ダメージ'
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 3,
            hit: 2,
            text: 'ソウルを2つ消費し、敵単体に掛かっている強化を解除し、攻撃力3倍の2連続ダメージ'
          }
        ],
        increment: 0.025
      }
    ]
  }
];

export default megido;
