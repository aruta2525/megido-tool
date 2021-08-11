import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So29: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 29,
    id: 1,
    name: 'アスタロト',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7365,
    offense: 1075,
    defense: 496,
    speed: 476,
    ability: {name: 'ピンチはチャンス', text: 'HPが50%以下のとき、すべての覚醒ゲージ増加量が+1される'},
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
        name: '元気にしてあげる♪＋',
        type: SkillType.Skill,
        text: '2ターンの間、味方単体の攻撃にLv×10の固定追加ダメージを付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ノコ斬り＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1倍の3連続ダメージ。さらに敵のHPが50%以下のとき、ダメージが2倍になる',
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極北のブレス＋',
        type: SkillType.Mysteries,
        text: '敵横一列に攻撃力1.25倍の2連続ダメージ。さらに60%の確率で、2ターンの間、敵を凍結状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 2
          }
        ],
        increment: 0.025
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 29,
    id: 2,
    name: 'アスタロト',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 5945,
    offense: 1216,
    defense: 545,
    speed: 413,
    ability: {name: 'コールドリーディング', text: '戦闘中、徐々に攻撃力が上昇する（最大値25%）'},
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
        name: '一汗かこうヨ+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを25%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを50%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを75%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを100%上昇させる'
          }
        ]
      },
      {
        name: '【専】一汗かこうヨ+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを25%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを50%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、自身のアタックを強化し、雷ダメージを75%上昇させる【使用するごとにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 0,
            hit: 0,
            text: '3ターンの間、自身のアタックを強化し、雷ダメージを100%上昇させ、攻撃力を100%上昇させる'
          }
        ]
      },
      {
        name: '悩殺スカルブレイク+',
        type: SkillType.AwakeningSkill,
        attribute: Attribute.Thunder,
        text: '敵単体に攻撃力1倍の3連続雷ダメージ',
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: '極彩ナイトスター+',
        type: SkillType.Mysteries,
        attribute: Attribute.Thunder,
        text: '敵全体に攻撃力2.25倍の雷ダメージ。さらに敵が感電状態の場合、ダメージが2倍になる',
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
  }
];
/*

*/
