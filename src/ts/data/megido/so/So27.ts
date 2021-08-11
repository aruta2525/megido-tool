import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So27: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 27,
    id: 1,
    name: 'ロノウェ',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10836,
    offense: 645,
    defense: 714,
    speed: 285,
    ability: {name: '正義のヒーロー', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: 'ウェポンガード＋',
        type: SkillType.Skill,
        text: '2ターンの間、すべての単体攻撃を受け持ちスキルフォトンからのダメージを60%軽減する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ブランディッシュ＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.5倍の2連続ダメージ。さらに積まれているフォトンを1つ破壊する',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 2
          }
        ]
      },
      {
        name: 'エクトプラズム＋',
        type: SkillType.Mysteries,
        text: '2ターンの間、味方単体を無敵状態にし、HPを20%回復させる',
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
