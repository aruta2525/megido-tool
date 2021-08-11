import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So08: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 8,
    id: 1,
    name: 'バルバトス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7659,
    offense: 960,
    defense: 476,
    speed: 474,
    ability: {name: '恋心をひとつまみ', text: '女性キャラクターへの回復量が30%上昇する'},
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
        name: '暴風のワルツ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに60%の確率で、自身にチャージフォトンを1つ追加する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 1.25,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵単体に攻撃力1.25倍の響撃ダメージ。さらに自身にチャージフォトンを1つ追加する'
          }
        ]
      },
      {
        name: '妖精たちのダンス＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方前列の攻撃力を40%上昇させる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '味方前列の攻撃力を50%上昇させる'
          }
        ]
      },
      {
        name: 'ホメロスの風讃歌＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方単体のHPを55%回復させる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '味方単体のHPを55%回復させる。さらに2ターンの間、ターン終了時にHPが60%回復する'
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 8,
    id: 2,
    name: 'バルバトス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7713,
    offense: 1226,
    defense: 421,
    speed: 492,
    ability: {name: '流離いの吟遊詩人', text: '大協奏中なら自身のチャージが強化される'},
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
        name: '激情のプレリュード＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに味方編成を協奏状態にする'
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
        name: '嵐のシンフォニー＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0.65,
            hit: 3,
            text: '敵単体に攻撃力0.65倍の3連続ダメージ。さらに味方編成を協奏状態にする'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0.65,
            hit: 3,
            attribute: Attribute.Sound,
            text: '敵全体に攻撃力0.65倍の3連続響撃ダメージ'
          }
        ]
      },
      {
        name: '還る者への鎮魂歌＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Sound,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.5,
            hit: 1,
            text: '敵全体に攻撃力1.5倍の響撃ダメージ'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 2,
            hit: 1,
            text: '敵全体に攻撃力2倍の響撃ダメージ'
          }
        ],
        increment: 0.05
      }
    ]
  }
];
