import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: 'レッドサーチャー',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Big,
    hp: 0,
    offense: 28,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: 'ミラーストーン',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 208,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: 'スウィートパウダー',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 28,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: 'プレミアムメタル',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Big,
    hp: 0,
    offense: 24,
    defense: 4,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: '悪魔殺しの槌',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 177,
    offense: 4,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: '深緑の絞り汁',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 31,
    offense: 0,
    defense: 24,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: 'グリーンスケイル',
    styleType: StyleType.Counter,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 177,
    offense: 0,
    defense: 4,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: ''}
  },
  {
    name: 'ルーメンレンズ',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 50,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '攻撃を受けたとき、5%の確率で攻撃力1.2倍のダメージで反撃する'}
  },
  {
    name: 'シルバーミラー',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 0,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '受けるダメージを3%軽減する'}
  },
  {
    name: 'ビーンズペースト',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 110,
    offense: 0,
    defense: 35,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '毎ターン終了時、HPが2%回復する'}
  },
  {
    name: '極銀の片眼鏡',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 35,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '状態異常命中率が3%上昇する'}
  },
  {
    name: '破魔の盾',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 15,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '3%の確率でダメージを無効にする'}
  },
  {
    name: '若草のケーキ',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 55,
    offense: 0,
    defense: 42,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '自身が与える回復量が3%上昇する'}
  },
  {
    name: '毒除けの盾',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 0,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '5%の確率で、味方への単体攻撃を受け持つ'}
  },
  {
    name: '冥界ノ栞',
    styleType: StyleType.Counter,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 0,
    offense: 15,
    defense: 35,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '自身のHPが50%以下のとき、 毎ターン終了時、HPが4%回復する'}
  },
  {
    name: 'ハンターゴーグル',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 69,
    defense: 0,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: '攻撃を受けたとき、8%の確率で攻撃力1.2倍のダメージで反撃する'}
  },
  {
    name: '紅のプロトポロス',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 58,
    defense: 10,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: '状態異常命中率が4%上昇する'}
  },
  {
    name: '蒼のエピファネイア',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 58,
    defense: 10,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: 'ステータス弱体の命中率が4%上昇する'}
  },
  {
    name: '極光の金鏡',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: '受けるダメージを4%軽減する'}
  },
  {
    name: '神罰の重盾',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: '4%の確率でダメージを無効にする'}
  },
  {
    name: '断罪の重盾',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Gouken,
    ability: {value: 0, text: '6%の確率で、味方への単体攻撃を受け持つ'}
  },
  {
    name: '紫芋のケーキ',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 152,
    offense: 0,
    defense: 0,
    speed: 12,
    type: Type.Gouken,
    ability: {value: 0, text: '毎ターン終了時、 HPが3%回復する'}
  },
  {
    name: 'カフェモカロール',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 76,
    offense: 0,
    defense: 0,
    speed: 15,
    type: Type.Gouken,
    ability: {value: 0, text: '自身が与える回復量が5%上昇する'}
  },
  {
    name: 'マグワートロール',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 76,
    offense: 0,
    defense: 0,
    speed: 15,
    type: Type.Gouken,
    ability: {value: 0, text: '全ての状態異常への耐性が8%上昇する'}
  }
];

export default sacredTreasureList;
