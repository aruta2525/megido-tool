import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So17: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 17,
    id: 1,
    name: 'ボティス',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 8845,
    offense: 761,
    defense: 717,
    speed: 286,
    ability: {name: '誇り高きメギド', text: 'HPが100%のとき、受けるダメージを30%軽減'},
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
        name: 'カバーリング＋',
        type: SkillType.Skill,
        text: '2ターンの間、すべての単体攻撃を受け持ち自身への攻撃を2回無効化する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ペンデュラム＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1,
            text: '敵横一列に攻撃力1.75倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 2,
            hit: 1,
            text: '敵横一列に攻撃力2倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 1,
            text: '敵横一列に攻撃力2.25倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 2.5,
            hit: 1,
            text: '敵横一列に攻撃力2.5倍のダメージ'
          }
        ]
      },
      {
        name: '穢れなき守護者＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方全体への最大HPの30%以下のダメージを無効化する',
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
    no: 17,
    id: 2,
    name: 'ボティス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 6545,
    offense: 1070,
    defense: 505,
    speed: 500,
    ability: {name: '戦う者の加護', text: 'コロッセオ状態中、ターン終了時に自身のHPを25%回復する'},
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
        name: '想いの障壁+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方単体への攻撃を2回無効化し、2ターンの間、素早さを20%上昇させる'
          },
          {
            level: 1,
            label: 'コロッセオ',
            magnification: 0,
            hit: 0,
            text: '味方単体への攻撃を2回無効化する。さらに2ターンの間攻撃力と素早さを20%上昇させ、スキルを強化する'
          }
        ]
      },
      {
        name: 'インパクトチェーン＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.5,
            hit: 1,
            text: '敵単体に攻撃力1.5倍のダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する'
          },
          {
            level: 2,
            label: 'コロッセオ',
            magnification: 2.5,
            hit: 1,
            text: '敵単体に攻撃力2.5倍のダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する'
          }
        ]
      },
      {
        name: '決闘のゴング＋',
        type: SkillType.Mysteries,
        text: '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）さらに3ターンの間、敵味方単体の攻撃力を50%上昇させる',
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
