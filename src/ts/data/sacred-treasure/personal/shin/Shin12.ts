import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞深海の捕食者',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、スキル、覚醒スキルが変化する'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 12,
      name: 'ジニマル',
      ability: {
        name: '蒼海の滅王',
        text: '行動開始時、40%の確率でスキルが追加される'
      },
      skills: [
        {
          name: '【専】トーテンタンツ＋',
          type: SkillType.Skill,
          text: '敵横一列に攻撃力1倍のダメージ。さらにそれぞれ80%（状態異常の敵の場合100%）の確率で2ターンの間、敵を病気、ゾンビ状態にする',
          levels: [
            {
              level: 1,
              magnification: 1,
              hit: 1
            }
          ]
        },
        {
          name: '【専】ギフトヴィアベル＋',
          type: SkillType.AwakeningSkill,
          text: '敵横一列に攻撃力1.5倍のダメージ。さらに50%（状態異常の敵の場合100%）の確率で2ターンの間、敵を毒状態にする',
          levels: [
            {
              level: 1,
              magnification: 1.5,
              hit: 1
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
