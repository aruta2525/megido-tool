import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So31: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 31,
    id: 1,
    name: 'フォラス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 5724,
    offense: 746,
    defense: 491,
    speed: 691,
    ability: {name: '好奇心旺盛', text: 'オーブの使用可能までのターンを-1する'},
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
        name: 'デトネーション＋',
        type: SkillType.Skill,
        text: '2ターンの間、味方単体のアタックを強化し、攻撃力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ワイドマジック＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方単体の効果範囲を全体化し、攻撃力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'クラッシュハンマー＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力5.25倍の防御無視ダメージ',
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 31,
    id: 2,
    name: 'フォラス',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 6507,
    offense: 884,
    defense: 524,
    speed: 611,
    ability: {name: '湧き出る知識', text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'},
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
        name: 'ディライズ＋',
        type: SkillType.Skill,
        text: `2ターンの間、味方単体の防御力を20%上昇させる。さらに種族に【物体】を持つオーブを装備している対象に奮闘のオーラを2個付与する<br>
              奮闘のオーラ：1個につき、かばう確率が5%、防御力が8%上昇します`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'マイティカバー＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方前列へのダメージを40%軽減する。さらに対象にオーラが2個以上付与されている場合、2ターンの間、防御力を60%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'リードクラリティ＋',
        type: SkillType.Mysteries,
        text: `味方単体の素早さを3ターンの間、130%上昇させる。さらに対象にオーラが3個以上付与されている場合オーラを3個消費し堅忍不抜のオーラを1個付与する<br>
              堅忍不抜のオーラ：1個につき、かばう確率25%上昇・防御力40%上昇・自然回復10%の効果があります`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0.05
      }
    ]
  }
];
