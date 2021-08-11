import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So68: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 68,
    id: 1,
    name: 'ベリアル',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7630,
    offense: 976,
    defense: 431,
    speed: 644,
    ability: {name: '虚心坦懐', text: '自身の点穴の値が高いほど、受けるダメージを軽減する（最大40%）'},
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
        name: '命脈穿ち＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+15する'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 1.25,
            hit: 1,
            text: 'バレットを消費し、敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴を+25する'
          }
        ]
      },
      {
        name: '不撓の眼光＋',
        type: SkillType.AwakeningSkill,
        text: '自身の点穴を+5し、2ターンの間、自身が固定砲台状態になる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '凶星墜とし＋',
        type: SkillType.Mysteries,
        text: '敵単体に掛かっている強化を解除し、攻撃力3.25倍のダメージ',
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 68,
    id: 2,
    name: 'ベリアル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7915,
    offense: 1096,
    defense: 628,
    speed: 381,
    ability: {name: '巫女の冥助', text: '炎上・狂炎地形がある敵から、受けるダメージを20%軽減する'},
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
        name: '焙烙射撃＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 1.4,
            hit: 1,
            text: 'バレットを消費し、敵単体に攻撃力1.4倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える'
          }
        ]
      },
      {
        name: '不撓の眼光＋',
        type: SkillType.AwakeningSkill,
        text: `2ターンの間、自身が焼夷砲火状態になり、積めるフォトンの量を+1する`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '凶星の煌き＋',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力1.35倍の5連続火ダメージ。さらに対象の位置に炎上・狂炎地形が存在する場合、ダメージが1.5倍になる',
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 5
          }
        ],
        increment: 0.01
      }
    ]
  }
];
