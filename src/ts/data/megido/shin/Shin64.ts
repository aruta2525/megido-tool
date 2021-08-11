import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 64,
    id: 1,
    name: 'プロメテウス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 8712,
    offense: 637,
    defense: 625,
    speed: 569,
    ability: {name: 'ハピネスライブ', text: '自分が発動させたライブの効果が継続中、自身の受けるダメージを20％軽減する'},
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
        name: '♪キミに届くように＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '2ターンの間ライブ状態になり、火攻撃時、覚醒+1。攻撃力30%アップ/ダメージ軽減25%/ターン終了時HP20%回復を付与可能になる'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '3ターンの間ライブ状態になり、火攻撃時、覚醒+1。攻撃力35%アップ/ダメージ軽減30%/ターン終了時HP25%回復を付与可能になる'
          }
        ]
      },
      {
        name: '歌のチカラは∞！＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方単体の全フォトンを強化し、さらに、ターン終了時にHPが15%回復する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ルルディダロス＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵横一列に攻撃力3倍の火ダメージ。さらに自身以外の味方にスキルフォトンを1つ追加	',
        levels: [
          {
            level: 1,
            magnification: 3,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
