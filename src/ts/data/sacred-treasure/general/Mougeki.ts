import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: 'コールドエッジ',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Big,
    hp: 0,
    offense: 28,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: '雨乞いの願糸',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 208,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: 'アルジェントパール',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 28,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: '魔蛇の彫像',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Big,
    hp: 0,
    offense: 24,
    defense: 4,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: 'ベルデエトワール',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 177,
    offense: 4,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: 'デビルズリング',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 31,
    offense: 0,
    defense: 24,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: 'マリスコスジェム',
    styleType: StyleType.Rush,
    rank: Rank.Blue,
    size: Size.Medium,
    hp: 177,
    offense: 0,
    defense: 4,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: ''}
  },
  {
    name: 'ゴシックダガー',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 50,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '攻撃時、敵の防御力を2%無視する'}
  },
  {
    name: 'スカイブルーファン',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 366,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '与えたダメージの3%を吸収する'}
  },
  {
    name: 'ハートブローチ',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 50,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '攻撃時、Lv×1の固定追加ダメージを付与する'}
  },
  {
    name: 'アルターエッジ',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 0,
    offense: 42,
    defense: 7,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '単体ダメージが3%上昇する'}
  },
  {
    name: '繁栄のフェイス',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 15,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '致死ダメージを受けたとき、3%の確率で踏みとどまる'}
  },
  {
    name: 'アムールリング',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 55,
    offense: 0,
    defense: 42,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '行動開始時、4%の確率でスキルフォトンが追加される'}
  },
  {
    name: 'エベーヌフェイス',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 256,
    offense: 0,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '素早さが5%上昇する'}
  },
  {
    name: 'アシストスープ',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Big,
    hp: 110,
    offense: 35,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '連続ダメージが5%上昇する'}
  },
  {
    name: '改良型テツマリ',
    styleType: StyleType.Rush,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 110,
    offense: 0,
    defense: 35,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '与えたダメージの4%を吸収する'}
  },
  {
    name: '金のアマルティア',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 48,
    defense: 0,
    speed: 5,
    type: Type.Mougeki,
    ability: {name: '', text: '攻撃時、敵の防御力を3%無視する'}
  },
  {
    name: '銀のティモリア',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 48,
    defense: 0,
    speed: 5,
    type: Type.Mougeki,
    ability: {name: '', text: '単体ダメージが4%上昇する'}
  },
  {
    name: 'ヴェリタスの彫像',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 48,
    defense: 0,
    speed: 5,
    type: Type.Mougeki,
    ability: {name: '', text: '連続ダメージが4%上昇する'}
  },
  {
    name: '情熱のパトス',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 0,
    speed: 3,
    type: Type.Mougeki,
    ability: {name: '', text: '与えたダメージの4%を吸収する'}
  },
  {
    name: '金色のエトス',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 0,
    speed: 3,
    type: Type.Mougeki,
    ability: {name: '', text: '致死ダメージを受けたとき、4%の確率で踏みとどまる'}
  },
  {
    name: '漆黒のロゴス',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 0,
    speed: 3,
    type: Type.Mougeki,
    ability: {name: '', text: '素早さが6%上昇する'}
  },
  {
    name: 'レディアントパール',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 55,
    speed: 3,
    type: Type.Mougeki,
    ability: {name: '', text: '攻撃時、Lv×1の固定追加ダメージを付与する'}
  },
  {
    name: '桃真珠の首輪',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 152,
    offense: 0,
    defense: 0,
    speed: 12,
    type: Type.Mougeki,
    ability: {name: '', text: '行動開始時、5%の確率でアタックフォトンが追加される'}
  },
  {
    name: 'トレラントリング',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 152,
    offense: 0,
    defense: 0,
    speed: 12,
    type: Type.Mougeki,
    ability: {name: '', text: '行動開始時、5%の確率でスキルフォトンが追加される'}
  }
];

export default sacredTreasureList;
