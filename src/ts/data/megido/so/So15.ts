import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType, ReferralStatus} from '../../../enum/Megido';

export const So15: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 15,
    id: 1,
    name: 'エリゴス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 5896,
    offense: 768,
    defense: 622,
    speed: 627,
    ability: {name: '闘争心', text: '虫系のモンスターに2倍のダメージ'},
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
        name: 'トンファーガード＋',
        type: SkillType.Skill,
        text: '2ターンの間、自身が攻撃を受けたとき、反撃する状態になり、攻撃を2回無効化する(推定0.9倍 2hit)',
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: '滅多打ち＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力0.75倍の4連続ダメージ。さらに2ターンの間、敵をめまい状態にする',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 4
          }
        ]
      },
      {
        name: 'ラストガーディアン＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力2.25倍のダメージ。さらに2ターンの間、味方全体の防御力を50%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 15,
    id: 2,
    name: 'エリゴス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7119,
    offense: 1280,
    defense: 410,
    speed: 462,
    ability: {name: '湧き上がる闘志', text: '封印状態中、自身のフォトン容量を+2する'},
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
        name: '無法烈火＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力1.5倍の火ダメージ',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: '鋭鋒火急撃＋',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Fire,
        text: '敵横一列に攻撃力1.5倍の2連続火ダメージ',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'ライジングフロー＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、自身の攻撃力を150%上昇させさらにスキルを強化する。ただし2ターンの間、封印状態となる',
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
