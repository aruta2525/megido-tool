import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>狩人の弓',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキル、奥義が変化する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 14,
      name: 'レラジェ',
      skills: [
        {
          name: '【専】シャープショット＋',
          type: SkillType.Skill,
          levels: [
            {
              level: 1,
              label: '通常',
              magnification: 1.25,
              hit: 1,
              text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、自身にアタックフォトンを1つ追加する'
            },
            {
              level: 1,
              label: 'Bアーツ',
              magnification: 1.25,
              hit: 1,
              text: 'バレットを消費し、敵単体に攻撃力1.25倍のダメージ。さらに自身にアタックフォトンを1つ追加する'
            }
          ]
        },
        {
          name: '【専】パワースナイプ＋',
          type: SkillType.Mysteries,
          levels: [
            {
              level: 1,
              magnification: 2.75,
              hit: 1,
              text: '敵単体に攻撃力2.75倍のダメージ。さらに55%の確率で、敵を即死させる【シャープショット2回使用でスキルLv上昇】	'
            },
            {
              level: 2,
              magnification: 3.75,
              hit: 1,
              text: '敵単体に攻撃力3.75倍のダメージ。さらに55%の確率で、敵を即死させる【シャープショット2回使用でスキルLv上昇】	'
            },
            {
              level: 3,
              magnification: 4.75,
              hit: 1,
              text: '敵単体に攻撃力4.75倍のダメージ。さらに55%の確率で、敵を即死させる【シャープショット2回使用でスキルLv上昇】	'
            },
            {
              level: 4,
              magnification: 5.75,
              hit: 1,
              text: '敵単体に攻撃力5.75倍のダメージ。さらに55%の確率で、敵を即死させる'
            }
          ],
          increment: 0.05
        }
      ]
    }
  }
];

export default sacredTreasureList;
