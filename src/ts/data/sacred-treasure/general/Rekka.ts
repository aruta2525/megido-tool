import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '冬至のピグメント',
    styleType: StyleType.Burst,
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
    name: 'ピーチマフラー',
    styleType: StyleType.Burst,
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
    name: 'ブラックトルク',
    styleType: StyleType.Burst,
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
    name: '紅の香炉',
    styleType: StyleType.Burst,
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
    name: '漆黒のマフラー',
    styleType: StyleType.Burst,
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
    name: 'アンデッドスカル',
    styleType: StyleType.Burst,
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
    name: 'ブルーポンチョ',
    styleType: StyleType.Burst,
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
    name: '魔毒の封瓶',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 50,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '火ダメージが3%上昇する'}
  },
  {
    name: 'スプリングフード',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 366,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: 'HPが3%上昇する'}
  },
  {
    name: 'タフネスチョーカー',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 50,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '自身のHPが50%以下のとき、4%の確率でダメージを無効にする'}
  },
  {
    name: 'ワンダーインセンス',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 35,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '全体攻撃のダメージが5%上昇する'}
  },
  {
    name: 'オンブラポンチョ',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 15,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '行動開始時、4%の確率でチャージフォトンが追加される'}
  },
  {
    name: 'メタリックネイル',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 55,
    offense: 0,
    defense: 42,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '覚醒ゲージ量が多いほど、防御力が上昇する（最大値6%）'}
  },
  {
    name: 'シアンフード',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 0,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '毎ターン終了時、 6%の確率で覚醒ゲージが+1される'}
  },
  {
    name: 'スピネルホーン',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 10,
    defense: 5,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '覚醒ゲージ量が多いほど、攻撃力が上昇する（最大値6%）'}
  },
  {
    name: 'グレイシアボトル',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 58,
    defense: 0,
    speed: 3,
    type: Type.Rekka,
    ability: {value: 0, text: '火ダメージが4%上昇する'}
  },
  {
    name: '雷魂の火種',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 58,
    defense: 0,
    speed: 3,
    type: Type.Rekka,
    ability: {value: 0, text: '覚醒ゲージ量が多いほど、攻撃力が上昇する（最大値6%）'}
  },
  {
    name: '紅蓮の塗料',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 69,
    defense: 0,
    speed: 0,
    type: Type.Rekka,
    ability: {value: 0, text: '全体攻撃のダメージが8%上昇する'}
  },
  {
    name: '桜花の法衣',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Rekka,
    ability: {value: 0, text: 'HPが4%上昇する'}
  },
  {
    name: '陽炎の法衣',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 10,
    defense: 0,
    speed: 0,
    type: Type.Rekka,
    ability: {value: 0, text: '行動開始時、5%の確率でチャージフォトンが追加される'}
  },
  {
    name: '水流の法衣',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 0,
    speed: 3,
    type: Type.Rekka,
    ability: {value: 0, text: '毎ターン終了時、8%の確率で覚醒ゲージが+1される'}
  },
  {
    name: 'クーリッシュカラー',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 21,
    defense: 0,
    speed: 12,
    type: Type.Rekka,
    ability: {value: 0, text: '自身のHPが50%以下のとき、6%の確率でダメージを無効にする'}
  },
  {
    name: 'ストラーナヘッド',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 21,
    defense: 0,
    speed: 12,
    type: Type.Rekka,
    ability: {value: 0, text: '覚醒ゲージ量が多いほど、防御力が上昇する（最大値9%）'}
  },
  {
    name: 'アルジャンスカル',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 21,
    defense: 0,
    speed: 12,
    type: Type.Rekka,
    ability: {value: 0, text: 'ステータス弱体耐性が13%上昇する'}
  }
];

export default sacredTreasureList;
