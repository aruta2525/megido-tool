import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So36: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 36,
    id: 1,
    name: 'ストラス',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7407,
    offense: 1167,
    defense: 411,
    speed: 488,
    ability: {name: '花鳥風月', text: '行動開始時、20%の確率でスキルが追加される'},
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
        name: '天地万象＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力1.25倍のダメージ。さらに30%の確率で、スキルを追加する',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '百花繚乱＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.75倍の2連続ダメージ。さらに2ターンの間、自身のスキルを強化する',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 2
          }
        ]
      },
      {
        name: 'ハリケーンダンス＋',
        type: SkillType.Mysteries,
        text: '敵全体に攻撃力2倍のダメージ。2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 36,
    id: 2,
    name: 'ストラス',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 7952,
    offense: 1081,
    defense: 420,
    speed: 479,
    ability: {name: '慈雨育苗', text: '自身がチャージフォトン使用時、自身の点穴を+5する'},
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
        name: '紫陽爛漫＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: 'なし',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。自身の点穴の値に応じて自身点穴上昇【点穴30:+10/点穴50:+15/点穴80:+25/点穴100:+45】'
          },
          {
            level: 1,
            label: '三分咲',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+10する'
          },
          {
            level: 1,
            label: '五分咲',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+15する'
          },
          {
            level: 1,
            label: '八分咲',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+25する'
          },
          {
            level: 1,
            label: '満開',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+45する'
          }
        ]
      },
      {
        name: '八仙開花＋',
        type: SkillType.AwakeningSkill,
        text: '自身以外の味方前列から点穴を最大20ずつ徴収。さらに自身のHPを30%回復する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '激・才華爛発＋',
        type: SkillType.Mysteries,
        text: '自身が得られる点穴の値が2度だけ2倍になる。さらに2ターンの間、自身の防御力を50%上昇させる',
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
