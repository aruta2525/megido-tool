import { StyleType } from '../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../enum/SacredTreasure';
const sacredTreasureList = [
    {
        name: 'シトロンの塗料',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Big,
        hp: 0,
        offense: 69,
        defense: 0,
        speed: 0,
        type: Type.Gourai,
        ability: { name: '', text: '雷ダメージが4%上昇する' }
    },
    {
        name: 'スリリングトリック',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Medium,
        hp: 431,
        offense: 0,
        defense: 10,
        speed: 0,
        type: Type.Gourai,
        ability: { name: '', text: '3%の確率で、敵に雷ダメージで反撃する' }
    },
    {
        name: 'プランダー・スカル',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 21,
        defense: 0,
        speed: 12,
        type: Type.Gourai,
        ability: { name: '', text: '自身が発生させた帯電による、感電付与確率が8%上昇する' }
    },
    {
        name: '紫雲の雷霆液',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Big,
        hp: 0,
        offense: 69,
        defense: 0,
        speed: 0,
        type: Type.Gourai,
        ability: { name: '', text: '雷ダメージが4%上昇する' }
    },
    {
        name: 'ゴールドトラッシュ',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Medium,
        hp: 431,
        offense: 0,
        defense: 10,
        speed: 0,
        type: Type.Gourai,
        ability: { name: '', text: '全体攻撃のダメージが7%上昇する' }
    },
    {
        name: '深淵の黒髑髏',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 21,
        defense: 0,
        speed: 12,
        type: Type.Gourai,
        ability: { name: '', text: '自身が発生させた帯電による、感電付与確率が8%上昇する' }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Gourai.js.map