import $ from 'jquery';
import { StyleType } from '../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../enum/SacredTreasure';
import Mougeki from './general/Mougeki';
import Isshin from './general/Isshin';
import Metsugan from './general/Metsugan';
import Gouken from './general/Gouken';
import Gourai from './general/Gourai';
import Kaiten from './general/Kaiten';
import Kyoyu from './general/Kyoyu';
import Rekka from './general/Rekka';
import Rensa from './general/Rensa';
import Suishin from './general/Suishin';
import Lyric from './general/Lyric';
import Epic from './general/Epic';
import Metric from './general/Metric';
import Other from './general/Other';
export const SacredTreasureList = [
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
$.merge(SacredTreasureList, Mougeki);
$.merge(SacredTreasureList, Isshin);
$.merge(SacredTreasureList, Metsugan);
$.merge(SacredTreasureList, Gouken);
$.merge(SacredTreasureList, Gourai);
$.merge(SacredTreasureList, Kaiten);
$.merge(SacredTreasureList, Kyoyu);
$.merge(SacredTreasureList, Rekka);
$.merge(SacredTreasureList, Rensa);
$.merge(SacredTreasureList, Suishin);
$.merge(SacredTreasureList, Lyric);
$.merge(SacredTreasureList, Epic);
$.merge(SacredTreasureList, Metric);
$.merge(SacredTreasureList, Other);
//# sourceMappingURL=SacredTreasure.js.map