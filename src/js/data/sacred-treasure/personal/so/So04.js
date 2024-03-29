import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞玉砕の棍棒',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性が変化する。防御力が30%上昇する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 4,
            name: 'ガミジン',
            ability: {
                name: '強襲ヒット',
                text: '自身より防御力が低い対象へのダメージが150%上昇する'
            },
            skills: []
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So04.js.map