import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞乱・千風開花',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキルが変化する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 36,
      name: 'ストラス',
      skills: [
        {
          name: '【専】紫陽爛漫＋',
          type: SkillType.Skill,
          levels: [
            {
              level: 1,
              label: 'なし',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。自身の点穴の値に応じて自身点穴上昇【点穴30:+35%/点穴50:+40%/点穴80:+45%/点穴100:+50%】'
            },
            {
              level: 1,
              label: '三分咲',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴の35%を得る'
            },
            {
              level: 1,
              label: '五分咲',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴の40%を得る'
            },
            {
              level: 1,
              label: '八分咲',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴の45%を得る'
            },
            {
              level: 1,
              label: '満開',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の点穴の50%を得る'
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
