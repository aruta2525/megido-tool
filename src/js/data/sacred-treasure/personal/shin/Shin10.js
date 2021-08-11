import { StyleType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>セタリアの杖',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性、スキル、奥義が変化する。アタックが雷ダメージになる' },
        personal: {
            clockType: ClockType.Shin,
            megidoNo: 10,
            name: 'グリマルキン',
            megidoAbility: {
                name: 'バチバチしますニャ',
                text: '自身が雷ダメージを与えたとき、対象のエレキレベルが25以下ならエレキレベルの上昇量を＋2する（連続ダメージは1回としてカウントする）'
            }
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Shin10.js.map