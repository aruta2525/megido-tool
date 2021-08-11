import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞クルンロッド',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキルが変化する。自身がブレイク待機状態のとき、自身が受けるダメージを25%軽減する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 53,
      name: 'カイム',
      skills: [
        {
          name: '【専】マインドクラッシュ+',
          type: SkillType.Skill,
          text: `敵単体に攻撃力1.25倍のダメージ。さらに覚醒ゲージを-1し、自身をアタックブレイク状態にする<br>
              【アタックブレイク】80%の確率で、1ターンの間、敵単体を封印状態にする`,
          levels: [
            {
              level: 1,
              magnification: 1.25,
              hit: 1
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
