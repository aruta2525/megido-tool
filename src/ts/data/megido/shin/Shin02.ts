import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 2,
    id: 1,
    name: 'ニバス',
    classType: ClassType.Rush,
    styleType: StyleType.Sniper,
    hp: 6143,
    offense: 1429,
    deffense: 406,
    speed: 480,
    ability: {name: 'ムードメーカー', text: '毎ターン終了時、25%の確率で自身以外の覚醒ゲージを+1する'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ラブリージャグラー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          },
          {
            level: 2,
            magnification: 1.25,
            hit: 2
          },
          {
            level: 3,
            magnification: 1.25,
            hit: 3
          },
          {
            level: 4,
            magnification: 1.25,
            hit: 4
          }
        ]
      },
      {
        name: 'ハッピーカーニバル＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ブレイブドール＋',
        type: SkillType.Mysteries,
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
    clockType: ClockType.Shin,
    no: 2,
    id: 2,
    name: 'ニバス',
    classType: ClassType.Burst,
    styleType: StyleType.Sniper,
    hp: 9089,
    offense: 1058,
    deffense: 482,
    speed: 420,
    ability: {name: '新ネタ披露の大一番', text: '大協奏中、致死ダメージを受けたとき、35%の確率で踏みとどまる'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'プリティダンス＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ジョークコースター＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'ジョークコースター＋（大協奏）',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: 'パペットラプソディ＋',
        type: SkillType.Mysteries,
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
