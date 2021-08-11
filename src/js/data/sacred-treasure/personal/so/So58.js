import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞糸繰師の糸',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '攻撃力が30%上昇し、 敵がノックバック、引き寄せ状態の場合ダメージが2倍になる' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 58,
            name: 'アミー'
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So58.js.map