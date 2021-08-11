import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 36,
    id: 1,
    name: 'メフィスト',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5899,
    offense: 1194,
    defense: 417,
    speed: 648,
    ability: {name: '出たとこ勝負！', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: 'ロール・ロール＋',
        type: SkillType.Skill,
        text: '出目で効果決定 1:効果なし/2,3:単体覚醒+1,防御10%上昇/4,5:列覚醒+1,防御15%上昇/6:全体覚醒+1,防御20%上昇(防御上昇2ターン)	',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'イービル・ダイス＋',
        type: SkillType.AwakeningSkill,
        text: '出目で効果決定1:敵単体に攻撃力4.8倍のダメージ/2～6:敵単体に攻撃力0.75倍の出目数連続ダメージ',
        levels: [
          {
            level: 1,
            magnification: 4.8,
            hit: 1
          },
          {
            level: 2,
            magnification: 0.75,
            hit: 2
          },
          {
            level: 3,
            magnification: 0.75,
            hit: 3
          },
          {
            level: 4,
            magnification: 0.75,
            hit: 4
          },
          {
            level: 5,
            magnification: 0.75,
            hit: 5
          },
          {
            level: 6,
            magnification: 0.75,
            hit: 6
          }
        ]
      },
      {
        name: 'キリングヒット＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1,
            text: '	敵全体に攻撃力1.75倍の防御無視ダメージ。1%の確率で対象を即死させる【ロール・ロール3回使用でLv上昇/最大Lv3】'
          },
          {
            level: 2,
            magnification: 2,
            hit: 1,
            text: '敵全体に攻撃力2倍の防御無視ダメージ。1%の確率で対象を即死させる【ロール・ロール3回使用でLv上昇/最大Lv3】'
          },
          {
            level: 3,
            magnification: 2.25,
            hit: 1,
            text: '敵全体に攻撃力2.25倍の防御無視ダメージ。1%の確率で対象を即死させる'
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 36,
    id: 2,
    name: 'メフィスト',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 7452,
    offense: 615,
    defense: 637,
    speed: 634,
    ability: {name: '悪魔の勝負師', text: '自身のHPが33.3%以下のとき、覚醒スキルの出目が必ず「8」になる'},
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
        name: '景気付けの一発＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '味方単体のHPを最大HPの25%減らす。さらに対象への攻撃を2回無効化し、2ターンの間、攻撃力を20%上昇させる'
          }
        ]
      },
      {
        name: 'イービルダイス・盛＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 1,
            text: '敵単体に、ダイスの出目×自身のLv×13の固定ダメージ'
          },
          {
            level: 1,
            label: '奥義使用後',
            magnification: 0,
            hit: 1,
            text: '敵単体に、ダイスの出目の和×自身のLv×13の固定ダメージ'
          }
        ]
      },
      {
        name: 'フォーチュンロア＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、自身へのダメージを40%軽減。さらに、覚醒スキルで使用するダイスを3個に増やす【使用後1回につき1度のみ】',
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

export default megido;
