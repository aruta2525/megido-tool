import { StyleType } from '../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../enum/SacredTreasure';
const sacredTreasureList = [
    {
        name: '霹靂の大盾',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Big,
        hp: 431,
        offense: 0,
        defense: 10,
        speed: 0,
        type: Type.Metric,
        ability: { name: '', text: '防御力が8%上昇し、 素早さが5%減少する' }
    },
    {
        name: '紅蓮の大盾',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Big,
        hp: 431,
        offense: 0,
        defense: 10,
        speed: 0,
        type: Type.Metric,
        ability: { name: '', text: '防御力が8%上昇し、 素早さが5%減少する' }
    },
    {
        name: '堅氷の大盾',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Big,
        hp: 431,
        offense: 0,
        defense: 10,
        speed: 0,
        type: Type.Metric,
        ability: { name: '', text: '防御力が8%上昇し、 素早さが5%減少する' }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Metric.js.map