import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So70: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 70,
    id: 1,
    name: 'セーレ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 5741,
    offense: 944,
    defense: 416,
    speed: 711,
    ability: {name: 'トレジャーハンター', text: 'ラッシュのモンスターからのレアドロップ率が50%上昇する'},
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
        name: 'ポーション投げ+',
        type: SkillType.Skill,
        text: '味方単体の状態異常を治癒する。さらにHPを25%回復させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'スパイラルエッジ+',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.75倍の2連続ダメージ。2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 2
          }
        ]
      },
      {
        name: 'ランプの魔人+',
        type: SkillType.Mysteries,
        text: '敵全体ダメージ(攻撃力2.5倍)、全体ダメージ軽減(3ターン/60%)、全体回復(55%)の3つからランダムで効果が発生。3回まで使用可能で、同じ効果は発生しない',
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 70,
    id: 2,
    name: 'セーレ',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7922,
    offense: 884,
    defense: 646,
    speed: 413,
    ability: {name: '準備は万全！', text: '自身封印中、ターン終了時、味方単体の状態異常を治癒する'},
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
        name: 'バーストエッジ＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.6倍の4連続ダメージ',
        levels: [
          {
            level: 1,
            magnification: 0.6,
            hit: 4
          }
        ]
      },
      {
        name: 'とびきりドリンク＋',
        type: SkillType.AwakeningSkill,
        text: `味方全体のHPを10%回復させ、さらに2ターンの間、Lv×10の固定追加ダメージを付与する<br>
              【自身封印中の場合、味方全体のHP15%回復。2ターン間Lv×15の固定追加ダメージ】`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ひらめきロケット＋',
        type: SkillType.Mysteries,
        text: '味方全体の状態異常を治癒する。さらに3ターンの間、防御力を70%上昇させる。ラッシュの場合、封印状態にする',
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
