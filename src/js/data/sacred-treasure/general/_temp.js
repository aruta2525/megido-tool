import { StyleType } from '../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../enum/SacredTreasure';
const sacredTreasureList = [
    {
        name: 'なし',
        styleType: StyleType.All,
        rank: Rank.Blue,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '' }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=_temp.js.map