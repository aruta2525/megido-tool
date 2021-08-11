import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So09: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 9,
    id: 1,
    name: 'パイモン',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7172,
    offense: 1191,
    defense: 420,
    speed: 472,
    ability: {name: 'プレイボーイ', text: '女性キャラクターが多いほど、攻撃力が上昇する(最大値25%)'},
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
        name: 'ブラッディローズ＋',
        type: SkillType.Skill,
        text: '単体に攻撃力0.75倍の3連続ダメージ。さらに80%の確率で覚醒ゲージを-1する',
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 3
          }
        ]
      },
      {
        name: 'ローズプロポーズ＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、女性キャラクター1人を魅了状態にし、自身のアタックに追撃させ、攻撃力を20%上昇させる',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ユリシスアーク＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力3.25倍のダメージ。さらにアタックを追加する',
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
  }
];
