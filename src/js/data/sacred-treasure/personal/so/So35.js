import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞レイメーカー',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性、奥義が変化する。アタック時、自身にチェインする' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 35,
            name: 'マルコシアス'
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So35.js.map