import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞憤怒の旗印',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性、覚醒スキルが変化する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 13,
            name: 'ベレト',
            megidoAbility: {
                name: '憤怒の瞳',
                text: 'バーサーク時、毎ターン開始時にアタックフォトンを1つ追加する'
            }
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So13.js.map