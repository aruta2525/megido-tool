import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So45: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 45,
    id: 1,
    name: 'ヴィネ',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7394,
    offense: 841,
    defense: 416,
    speed: 708,
    ability: {name: '慈愛の心', text: 'HPが50%以下の味方への回復量が50%上昇する'},
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
        name: '聖女の祈り＋',
        type: SkillType.Skill,
        text: '味方横一列のHPを20%回復させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '【専】聖女の祈り＋',
        type: SkillType.Skill,
        text: '味方横一列のHPを20%回復させる。さらにHPが60%以上の味方に対して、2ターンの間、アタックフォトンからのダメージを30%軽減する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '気高き願い＋',
        type: SkillType.AwakeningSkill,
        text: '味方全体の覚醒ゲージを+1する。さらに2ターンの間、攻撃力を30%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '蒼海のアガペー＋',
        type: SkillType.Mysteries,
        text: '味方全体のHPを40%回復させる',
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
  },
  {
    clockType: ClockType.So,
    no: 45,
    id: 2,
    name: 'ヴィネ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7354,
    offense: 746,
    defense: 495,
    speed: 647,
    ability: {name: 'お転婆姫君', text: 'HPが33.3%以下のとき、スキルの効果範囲が敵全体になる'},
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
        name: '水刃のエラルド＋',
        type: SkillType.Skill,
        text: '敵単体に2ターン後に弾ける威力0.5倍のハイドロボム速を付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '水盾のラクス＋',
        type: SkillType.AwakeningSkill,
        text: '味方全体への攻撃を1回無効化する。さらに2ターンの間、防御力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '戦姫の洗礼＋',
        type: SkillType.Mysteries,
        text: '敵横一列に0.5倍で2ターン後に弾けるハイドロボム速を付与し、2ターンの間、攻撃力を20%低下させる',
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
/*
 */
