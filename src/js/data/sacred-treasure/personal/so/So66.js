import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞千手の槍',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '覚醒に必要なゲージを-2する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 66,
            name: 'キマリス',
            skills: []
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So66.js.map