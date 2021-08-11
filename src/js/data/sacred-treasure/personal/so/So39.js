import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞風薙の朱鎌',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '奥義が変化する。素早さが40%上昇する。覚醒に必要なゲージを-1する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 39,
            name: 'マルファス'
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So39.js.map