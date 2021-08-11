import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 58,
    id: 1,
    name: 'ダゴン',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 9316,
    offense: 1200,
    defense: 420,
    speed: 276,
    ability: {name: '美味しいとこ取り', text: '自身がバーサーク状態のとき、防御力と素早さが毎ターン25%ずつ上昇する（最大値100%）'},
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
        name: 'ホイップベリーラブ＋',
        type: SkillType.Skill,
        text: '敵全体に攻撃力0.9倍のダメージ。さらに、与えたダメージの15%を吸収する	',
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 1
          }
        ]
      },
      {
        name: 'キャラメルクランチ＋',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力1.35倍の3連続ダメージ。さらに2ターンの間、自身のスキルを強化する',
        levels: [
          {
            level: 1,
            magnification: 1.35,
            hit: 3
          }
        ]
      },
      {
        name: '無尽の欲求＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2.75,
            hit: 1,
            text:
              '敵横一列に攻撃力2.75倍のダメージ。自身攻撃力50%上昇。自身バーサーク（25%毎上昇 最大150% HP10%ダメージ）【使用後Lv2：自身＋両隣（カウンター）】'
          },
          {
            level: 2,
            magnification: 2.75,
            hit: 1,
            text: '	敵横一列に攻撃力2.75倍のダメージ。自身とカウンターの両隣に攻撃力50%上昇とバーサーク（25%毎上昇 最大150% HP10%ダメージ）'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
