import $ from 'jquery';
import {IPersonalSacredTreasure} from '../../interface/IPersonalSacredTreasure';
import {ClockType, StyleType} from '../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../enum/SacredTreasure';

//#region 専用霊宝import
// import So01 from './personal/so/So01';
import So02 from './personal/so/So02';
// import So03 from './personal/so/So03';
import So04 from './personal/so/So04';
// import So05 from './personal/so/So05';
// import So06 from './personal/so/So06';
import So07 from './personal/so/So07';
import So08 from './personal/so/So08';
// import So09 from './personal/so/So09';
// import So10 from './personal/so/So10';
import So11 from './personal/so/So11';
import So12 from './personal/so/So12';
import So13 from './personal/so/So13';
import So14 from './personal/so/So14';
import So15 from './personal/so/So15';
// import So16 from './personal/so/So16';
// import So17 from './personal/so/So17';
import So18 from './personal/so/So18';
// import So19 from './personal/so/So19';
import So20 from './personal/so/So20';
// import So21 from './personal/so/So21';
import So22 from './personal/so/So22';
// import So23 from './personal/so/So23';
// import So24 from './personal/so/So24';
import So25 from './personal/so/So25';
import So26 from './personal/so/So26';
// import So27 from './personal/so/So27';
import So28 from './personal/so/So28';
import So29 from './personal/so/So29';
import So30 from './personal/so/So30';
// import So31 from './personal/so/So31';
// import So32 from './personal/so/So32';
// import So33 from './personal/so/So33';
import So34 from './personal/so/So34';
import So35 from './personal/so/So35';
import So36 from './personal/so/So36';
import So37 from './personal/so/So37';
// import So38 from './personal/so/So38';
import So39 from './personal/so/So39';
// import So40 from './personal/so/So40';
// import So41 from './personal/so/So41';
import So42 from './personal/so/So42';
// import So43 from './personal/so/So43';
// import So44 from './personal/so/So44';
import So45 from './personal/so/So45';
// import So46 from './personal/so/So46';
// import So47 from './personal/so/So47';
import So48 from './personal/so/So48';
// import So49 from './personal/so/So49';
// import So50 from './personal/so/So50';
import So51 from './personal/so/So51';
// import So52 from './personal/so/So52';
import So53 from './personal/so/So53';
// import So54 from './personal/so/So54';
// import So55 from './personal/so/So55';
// import So56 from './personal/so/So56';
import So57 from './personal/so/So57';
import So58 from './personal/so/So58';
import So59 from './personal/so/So59';
import So60 from './personal/so/So60';
// import So61 from './personal/so/So61';
// import So62 from './personal/so/So62';
import So63 from './personal/so/So63';
// import So64 from './personal/so/So64';
// import So65 from './personal/so/So65';
import So66 from './personal/so/So66';
// import So67 from './personal/so/So67';
// import So68 from './personal/so/So68';
import So69 from './personal/so/So69';
// import So70 from './personal/so/So70';
// import So71 from './personal/so/So71';
// import So72 from './personal/so/So72';
// import Shin01 from './personal/shin/Shin01';
// import Shin02 from './personal/shin/Shin02';
// import Shin03 from './personal/shin/Shin03';
// import Shin04 from './personal/shin/Shin04';
// import Shin05 from './personal/shin/Shin05';
// import Shin06 from './personal/shin/Shin06';
// import Shin07 from './personal/shin/Shin07';
// import Shin08 from './personal/shin/Shin08';
import Shin09 from './personal/shin/Shin09';
import Shin10 from './personal/shin/Shin10';
// import Shin11 from './personal/shin/Shin11';
import Shin12 from './personal/shin/Shin12';
// import Shin13 from './personal/shin/Shin13';
// import Shin14 from './personal/shin/Shin14';
// import Shin15 from './personal/shin/Shin15';
// import Shin16 from './personal/shin/Shin16';
// import Shin17 from './personal/shin/Shin17';
// import Shin18 from './personal/shin/Shin18';
// import Shin19 from './personal/shin/Shin19';
// import Shin20 from './personal/shin/Shin20';
import Shin21 from './personal/shin/Shin21';
// import Shin22 from './personal/shin/Shin22';
// import Shin23 from './personal/shin/Shin23';
// import Shin24 from './personal/shin/Shin24';
// import Shin25 from './personal/shin/Shin25';
// import Shin26 from './personal/shin/Shin26';
import Shin27 from './personal/shin/Shin27';
// import Shin28 from './personal/shin/Shin28';
// import Shin29 from './personal/shin/Shin29';
// import Shin30 from './personal/shin/Shin30';
// import Shin31 from './personal/shin/Shin31';
// import Shin32 from './personal/shin/Shin32';
// import Shin33 from './personal/shin/Shin33';
// import Shin34 from './personal/shin/Shin34';
// import Shin35 from './personal/shin/Shin35';
import Shin36 from './personal/shin/Shin36';
// import Shin37 from './personal/shin/Shin37';
import Shin38 from './personal/shin/Shin38';
// import Shin39 from './personal/shin/Shin39';
// import Shin40 from './personal/shin/Shin40';
// import Shin41 from './personal/shin/Shin41';
// import Shin42 from './personal/shin/Shin42';
// import Shin43 from './personal/shin/Shin43';
// import Shin44 from './personal/shin/Shin44';
// import Shin45 from './personal/shin/Shin45';
// import Shin46 from './personal/shin/Shin46';
// import Shin47 from './personal/shin/Shin47';
// import Shin48 from './personal/shin/Shin48';
import Shin49 from './personal/shin/Shin49';
import Shin50 from './personal/shin/Shin50';
import Shin51 from './personal/shin/Shin51';
// import Shin52 from './personal/shin/Shin52';
// import Shin53 from './personal/shin/Shin53';
// import Shin54 from './personal/shin/Shin54';
// import Shin55 from './personal/shin/Shin55';
// import Shin56 from './personal/shin/Shin56';
// import Shin57 from './personal/shin/Shin57';
// import Shin58 from './personal/shin/Shin58';
// import Shin59 from './personal/shin/Shin59';
// import Shin60 from './personal/shin/Shin60';
// import Shin61 from './personal/shin/Shin61';
// import Shin62 from './personal/shin/Shin62';
// import Shin63 from './personal/shin/Shin63';
import Shin64 from './personal/shin/Shin64';
import Shin65 from './personal/shin/Shin65';
import Shin66 from './personal/shin/Shin66';
// import Shin67 from './personal/shin/Shin67';
// import Shin68 from './personal/shin/Shin68';
// import Shin69 from './personal/shin/Shin69';
// import Shin70 from './personal/shin/Shin70';
// import Shin71 from './personal/shin/Shin71';
// import Shin72 from './personal/shin/Shin72';
//#endregion

const SacredTreasureList: IPersonalSacredTreasure[] = [];
const defaultSacredTreasure: IPersonalSacredTreasure = {
  name: 'なし',
  styleType: StyleType.All,
  rank: Rank.Blue,
  size: Size.Small,
  hp: 0,
  offense: 0,
  defense: 0,
  speed: 0,
  type: Type.None,
  ability: {name: '', text: ''},
  personal: {
    clockType: ClockType.Shin,
    megidoNo: 0,
    name: '',
    skills: []
  }
};

//#region 専用霊宝結合
// $.merge(SacredTreasureList, So01);
$.merge(SacredTreasureList, So02);
// $.merge(SacredTreasureList, So03);
$.merge(SacredTreasureList, So04);
// $.merge(SacredTreasureList, So05);
// $.merge(SacredTreasureList, So06);
$.merge(SacredTreasureList, So07);
$.merge(SacredTreasureList, So08);
// $.merge(SacredTreasureList, So09);
// $.merge(SacredTreasureList, So10);
$.merge(SacredTreasureList, So11);
$.merge(SacredTreasureList, So12);
$.merge(SacredTreasureList, So13);
$.merge(SacredTreasureList, So14);
$.merge(SacredTreasureList, So15);
// $.merge(SacredTreasureList, So16);
// $.merge(SacredTreasureList, So17);
$.merge(SacredTreasureList, So18);
// $.merge(SacredTreasureList, So19);
$.merge(SacredTreasureList, So20);
// $.merge(SacredTreasureList, So21);
$.merge(SacredTreasureList, So22);
// $.merge(SacredTreasureList, So23);
// $.merge(SacredTreasureList, So24);
$.merge(SacredTreasureList, So25);
$.merge(SacredTreasureList, So26);
// $.merge(SacredTreasureList, So27);
$.merge(SacredTreasureList, So28);
$.merge(SacredTreasureList, So29);
$.merge(SacredTreasureList, So30);
// $.merge(SacredTreasureList, So31);
// $.merge(SacredTreasureList, So32);
// $.merge(SacredTreasureList, So33);
$.merge(SacredTreasureList, So34);
$.merge(SacredTreasureList, So35);
$.merge(SacredTreasureList, So36);
$.merge(SacredTreasureList, So37);
// $.merge(SacredTreasureList, So38);
$.merge(SacredTreasureList, So39);
// $.merge(SacredTreasureList, So40);
// $.merge(SacredTreasureList, So41);
$.merge(SacredTreasureList, So42);
// $.merge(SacredTreasureList, So43);
// $.merge(SacredTreasureList, So44);
$.merge(SacredTreasureList, So45);
// $.merge(SacredTreasureList, So46);
// $.merge(SacredTreasureList, So47);
$.merge(SacredTreasureList, So48);
// $.merge(SacredTreasureList, So49);
// $.merge(SacredTreasureList, So50);
$.merge(SacredTreasureList, So51);
// $.merge(SacredTreasureList, So52);
$.merge(SacredTreasureList, So53);
// $.merge(SacredTreasureList, So54);
// $.merge(SacredTreasureList, So55);
// $.merge(SacredTreasureList, So56);
$.merge(SacredTreasureList, So57);
$.merge(SacredTreasureList, So58);
$.merge(SacredTreasureList, So59);
$.merge(SacredTreasureList, So60);
// $.merge(SacredTreasureList, So61);
// $.merge(SacredTreasureList, So62);
$.merge(SacredTreasureList, So63);
// $.merge(SacredTreasureList, So64);
// $.merge(SacredTreasureList, So65);
$.merge(SacredTreasureList, So66);
// $.merge(SacredTreasureList, So67);
// $.merge(SacredTreasureList, So68);
$.merge(SacredTreasureList, So69);
// $.merge(SacredTreasureList, So70);
// $.merge(SacredTreasureList, So71);
// $.merge(SacredTreasureList, So72);
// $.merge(SacredTreasureList, Shin01);
// $.merge(SacredTreasureList, Shin02);
// $.merge(SacredTreasureList, Shin03);
// $.merge(SacredTreasureList, Shin04);
// $.merge(SacredTreasureList, Shin05);
// $.merge(SacredTreasureList, Shin06);
// $.merge(SacredTreasureList, Shin07);
// $.merge(SacredTreasureList, Shin08);
$.merge(SacredTreasureList, Shin09);
$.merge(SacredTreasureList, Shin10);
// $.merge(SacredTreasureList, Shin11);
$.merge(SacredTreasureList, Shin12);
// $.merge(SacredTreasureList, Shin13);
// $.merge(SacredTreasureList, Shin14);
// $.merge(SacredTreasureList, Shin15);
// $.merge(SacredTreasureList, Shin16);
// $.merge(SacredTreasureList, Shin17);
// $.merge(SacredTreasureList, Shin18);
// $.merge(SacredTreasureList, Shin19);
// $.merge(SacredTreasureList, Shin20);
$.merge(SacredTreasureList, Shin21);
// $.merge(SacredTreasureList, Shin22);
// $.merge(SacredTreasureList, Shin23);
// $.merge(SacredTreasureList, Shin24);
// $.merge(SacredTreasureList, Shin25);
// $.merge(SacredTreasureList, Shin26);
$.merge(SacredTreasureList, Shin27);
// $.merge(SacredTreasureList, Shin28);
// $.merge(SacredTreasureList, Shin29);
// $.merge(SacredTreasureList, Shin30);
// $.merge(SacredTreasureList, Shin31);
// $.merge(SacredTreasureList, Shin32);
// $.merge(SacredTreasureList, Shin33);
// $.merge(SacredTreasureList, Shin34);
// $.merge(SacredTreasureList, Shin35);
$.merge(SacredTreasureList, Shin36);
// $.merge(SacredTreasureList, Shin37);
$.merge(SacredTreasureList, Shin38);
// $.merge(SacredTreasureList, Shin39);
// $.merge(SacredTreasureList, Shin40);
// $.merge(SacredTreasureList, Shin41);
// $.merge(SacredTreasureList, Shin42);
// $.merge(SacredTreasureList, Shin43);
// $.merge(SacredTreasureList, Shin44);
// $.merge(SacredTreasureList, Shin45);
// $.merge(SacredTreasureList, Shin46);
// $.merge(SacredTreasureList, Shin47);
// $.merge(SacredTreasureList, Shin48);
$.merge(SacredTreasureList, Shin49);
$.merge(SacredTreasureList, Shin50);
$.merge(SacredTreasureList, Shin51);
// $.merge(SacredTreasureList, Shin52);
// $.merge(SacredTreasureList, Shin53);
// $.merge(SacredTreasureList, Shin54);
// $.merge(SacredTreasureList, Shin55);
// $.merge(SacredTreasureList, Shin56);
// $.merge(SacredTreasureList, Shin57);
// $.merge(SacredTreasureList, Shin58);
// $.merge(SacredTreasureList, Shin59);
// $.merge(SacredTreasureList, Shin60);
// $.merge(SacredTreasureList, Shin61);
// $.merge(SacredTreasureList, Shin62);
// $.merge(SacredTreasureList, Shin63);
$.merge(SacredTreasureList, Shin64);
$.merge(SacredTreasureList, Shin65);
$.merge(SacredTreasureList, Shin66);
// $.merge(SacredTreasureList, Shin67);
// $.merge(SacredTreasureList, Shin68);
// $.merge(SacredTreasureList, Shin69);
// $.merge(SacredTreasureList, Shin70);
// $.merge(SacredTreasureList, Shin71);
// $.merge(SacredTreasureList, Shin72);
//#endregion

/**
 * 条件に一致する専用霊宝配列を取得する関数です。
 * @param clockType 時計タイプ
 * @param megidoNo メギド番号
 * @param styleType メギドスタイル
 * @return 専用霊宝配列
 */
export function getPersonalSacredTreasureList(clockType: ClockType, megidoNo: number, styleType: StyleType): IPersonalSacredTreasure[] {
  const list = SacredTreasureList.filter(
    (st) => st.personal.clockType == clockType && st.personal.megidoNo == megidoNo && (st.styleType & styleType) == styleType
  );
  list.unshift(defaultSacredTreasure);

  return list;
}
