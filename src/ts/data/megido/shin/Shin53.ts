import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 53,
    id: 1,
    name: 'ベバル',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7228,
    offense: 789,
    defense: 617,
    speed: 504,
    ability: {name: 'アタシがハイライト！', text: '大協奏状態のとき、すべての覚醒ゲージ増加量が+1される'},
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
        name: 'エーリアルターン＋',
        type: SkillType.Skill,
        text: '自身への攻撃を2回無効化する。さらに、味方編成を協奏状態にし、蓄積されている1ターン音符を最大3個まで1ターン延長する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'チアフルマーチ＋',
        type: SkillType.AwakeningSkill,
        text: '味方全体にエールを付与する。さらに2ターンの間、ターン終了時にHPが15%回復。ただし、蓄積されている音符最大5個消費',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'カウント・メロディ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2,
            hit: 1,
            text: '敵全体に攻撃力2倍のダメージ。さらに味方全体のHPを20%回復する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 2,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵全体に攻撃力2倍の響撃ダメージ。さらに味方全体のHPを35%回復する'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
