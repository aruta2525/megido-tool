import $ from 'jquery';
import {IMegido} from '../../interface/IMegido';
import {convertToStyleName} from '../../enum/Megido';
//#region メギドimport
import {So01} from './so/So01';
import {So02} from './so/So02';
import {So03} from './so/So03';
import {So04} from './so/So04';
import {So05} from './so/So05';
import {So06} from './so/So06';
import {So07} from './so/So07';
import {So08} from './so/So08';
import {So09} from './so/So09';
import {So10} from './so/So10';
import {So11} from './so/So11';
import {So12} from './so/So12';
import {So13} from './so/So13';
import {So14} from './so/So14';
import {So15} from './so/So15';
import {So16} from './so/So16';
import {So17} from './so/So17';
import {So18} from './so/So18';
import {So19} from './so/So19';
import {So20} from './so/So20';
import {So21} from './so/So21';
import {So22} from './so/So22';
import {So23} from './so/So23';
import {So24} from './so/So24';
import {So25} from './so/So25';
import {So26} from './so/So26';
import {So27} from './so/So27';
import {So28} from './so/So28';
import {So29} from './so/So29';
import {So30} from './so/So30';
import {So31} from './so/So31';
import {So32} from './so/So32';
import {So33} from './so/So33';
import {So34} from './so/So34';
import {So35} from './so/So35';
import {So36} from './so/So36';
import {So37} from './so/So37';
import {So38} from './so/So38';
import {So39} from './so/So39';
import {So40} from './so/So40';
import {So41} from './so/So41';
import {So42} from './so/So42';
import {So43} from './so/So43';
import {So44} from './so/So44';
import {So45} from './so/So45';
import {So46} from './so/So46';
import {So47} from './so/So47';
import {So48} from './so/So48';
import {So49} from './so/So49';
import {So50} from './so/So50';
import {So51} from './so/So51';
import {So52} from './so/So52';
import {So53} from './so/So53';
import {So54} from './so/So54';
import {So55} from './so/So55';
import {So56} from './so/So56';
import {So57} from './so/So57';
import {So58} from './so/So58';
import {So59} from './so/So59';
import {So60} from './so/So60';
import {So61} from './so/So61';
import {So62} from './so/So62';
import {So63} from './so/So63';
import {So64} from './so/So64';
import {So65} from './so/So65';
import {So66} from './so/So66';
import {So67} from './so/So67';
import {So68} from './so/So68';
import {So69} from './so/So69';
import {So70} from './so/So70';
import {So71} from './so/So71';
import {So72} from './so/So72';
import Shin01 from './shin/Shin01';
import Shin02 from './shin/Shin02';
import Shin03 from './shin/Shin03';
import Shin04 from './shin/Shin04';
import Shin05 from './shin/Shin05';
import Shin06 from './shin/Shin06';
import Shin07 from './shin/Shin07';
import Shin08 from './shin/Shin08';
import Shin09 from './shin/Shin09';
import Shin10 from './shin/Shin10';
import Shin11 from './shin/Shin11';
import Shin12 from './shin/Shin12';
import Shin13 from './shin/Shin13';
import Shin14 from './shin/Shin14';
import Shin15 from './shin/Shin15';
import Shin16 from './shin/Shin16';
import Shin17 from './shin/Shin17';
import Shin18 from './shin/Shin18';
import Shin19 from './shin/Shin19';
// import Shin20 from './shin/Shin20';
import Shin21 from './shin/Shin21';
import Shin22 from './shin/Shin22';
import Shin23 from './shin/Shin23';
import Shin24 from './shin/Shin24';
import Shin25 from './shin/Shin25';
import Shin26 from './shin/Shin26';
import Shin27 from './shin/Shin27';
import Shin28 from './shin/Shin28';
import Shin29 from './shin/Shin29';
import Shin30 from './shin/Shin30';
import Shin31 from './shin/Shin31';
// import Shin32 from './shin/Shin32';
import Shin33 from './shin/Shin33';
import Shin34 from './shin/Shin34';
import Shin35 from './shin/Shin35';
import Shin36 from './shin/Shin36';
import Shin37 from './shin/Shin37';
import Shin38 from './shin/Shin38';
import Shin39 from './shin/Shin39';
import Shin40 from './shin/Shin40';
import Shin41 from './shin/Shin41';
import Shin42 from './shin/Shin42';
import Shin43 from './shin/Shin43';
import Shin44 from './shin/Shin44';
import Shin45 from './shin/Shin45';
import Shin46 from './shin/Shin46';
import Shin47 from './shin/Shin47';
import Shin48 from './shin/Shin48';
import Shin49 from './shin/Shin49';
import Shin50 from './shin/Shin50';
import Shin51 from './shin/Shin51';
import Shin52 from './shin/Shin52';
import Shin53 from './shin/Shin53';
import Shin54 from './shin/Shin54';
import Shin55 from './shin/Shin55';
import Shin56 from './shin/Shin56';
import Shin57 from './shin/Shin57';
import Shin58 from './shin/Shin58';
import Shin59 from './shin/Shin59';
// import Shin60 from './shin/Shin60';
import Shin61 from './shin/Shin61';
import Shin62 from './shin/Shin62';
import Shin63 from './shin/Shin63';
import Shin64 from './shin/Shin64';
import Shin65 from './shin/Shin65';
import Shin66 from './shin/Shin66';
// import Shin67 from './shin/Shin67';
import Shin68 from './shin/Shin68';
import Shin69 from './shin/Shin69';
import Shin70 from './shin/Shin70';
import Shin71 from './shin/Shin71';
import Shin72 from './shin/Shin72';
//#endregion

export const MegidoList: IMegido[] = [];

export function joinAndSortMegidoByName(): IMegido[] {
  let megidoList: IMegido[] = [];
  //#region メギド情報を配列にまとめる
  $.merge(megidoList, So01);
  $.merge(megidoList, So02);
  $.merge(megidoList, So03);
  $.merge(megidoList, So04);
  $.merge(megidoList, So05);
  $.merge(megidoList, So06);
  $.merge(megidoList, So07);
  $.merge(megidoList, So08);
  $.merge(megidoList, So09);
  $.merge(megidoList, So10);
  $.merge(megidoList, So11);
  $.merge(megidoList, So12);
  $.merge(megidoList, So13);
  $.merge(megidoList, So14);
  $.merge(megidoList, So15);
  $.merge(megidoList, So16);
  $.merge(megidoList, So17);
  $.merge(megidoList, So18);
  $.merge(megidoList, So19);
  $.merge(megidoList, So20);
  $.merge(megidoList, So21);
  $.merge(megidoList, So22);
  $.merge(megidoList, So23);
  $.merge(megidoList, So24);
  $.merge(megidoList, So25);
  $.merge(megidoList, So26);
  $.merge(megidoList, So27);
  $.merge(megidoList, So28);
  $.merge(megidoList, So29);
  $.merge(megidoList, So30);
  $.merge(megidoList, So31);
  $.merge(megidoList, So32);
  $.merge(megidoList, So33);
  $.merge(megidoList, So34);
  $.merge(megidoList, So35);
  $.merge(megidoList, So36);
  $.merge(megidoList, So37);
  $.merge(megidoList, So38);
  $.merge(megidoList, So39);
  $.merge(megidoList, So40);
  $.merge(megidoList, So41);
  $.merge(megidoList, So42);
  $.merge(megidoList, So43);
  $.merge(megidoList, So44);
  $.merge(megidoList, So45);
  $.merge(megidoList, So46);
  $.merge(megidoList, So47);
  $.merge(megidoList, So48);
  $.merge(megidoList, So49);
  $.merge(megidoList, So50);
  $.merge(megidoList, So51);
  $.merge(megidoList, So52);
  $.merge(megidoList, So53);
  $.merge(megidoList, So54);
  $.merge(megidoList, So55);
  $.merge(megidoList, So56);
  $.merge(megidoList, So57);
  $.merge(megidoList, So58);
  $.merge(megidoList, So59);
  $.merge(megidoList, So60);
  $.merge(megidoList, So61);
  $.merge(megidoList, So62);
  $.merge(megidoList, So63);
  $.merge(megidoList, So64);
  $.merge(megidoList, So65);
  $.merge(megidoList, So66);
  $.merge(megidoList, So67);
  $.merge(megidoList, So68);
  $.merge(megidoList, So69);
  $.merge(megidoList, So70);
  $.merge(megidoList, So71);
  $.merge(megidoList, So72);
  $.merge(megidoList, Shin01);
  $.merge(megidoList, Shin02);
  $.merge(megidoList, Shin03);
  $.merge(megidoList, Shin04);
  $.merge(megidoList, Shin05);
  $.merge(megidoList, Shin06);
  $.merge(megidoList, Shin07);
  $.merge(megidoList, Shin08);
  $.merge(megidoList, Shin09);
  $.merge(megidoList, Shin10);
  $.merge(megidoList, Shin11);
  $.merge(megidoList, Shin12);
  $.merge(megidoList, Shin13);
  $.merge(megidoList, Shin14);
  $.merge(megidoList, Shin15);
  $.merge(megidoList, Shin16);
  $.merge(megidoList, Shin17);
  $.merge(megidoList, Shin18);
  $.merge(megidoList, Shin19);
  // $.merge(megidoList, Shin20);
  $.merge(megidoList, Shin21);
  $.merge(megidoList, Shin22);
  $.merge(megidoList, Shin23);
  $.merge(megidoList, Shin24);
  $.merge(megidoList, Shin25);
  $.merge(megidoList, Shin26);
  $.merge(megidoList, Shin27);
  $.merge(megidoList, Shin28);
  $.merge(megidoList, Shin29);
  $.merge(megidoList, Shin30);
  $.merge(megidoList, Shin31);
  // $.merge(megidoList, Shin32);
  $.merge(megidoList, Shin33);
  $.merge(megidoList, Shin34);
  $.merge(megidoList, Shin35);
  $.merge(megidoList, Shin36);
  $.merge(megidoList, Shin37);
  $.merge(megidoList, Shin38);
  $.merge(megidoList, Shin39);
  $.merge(megidoList, Shin40);
  $.merge(megidoList, Shin41);
  $.merge(megidoList, Shin42);
  $.merge(megidoList, Shin43);
  $.merge(megidoList, Shin44);
  $.merge(megidoList, Shin45);
  $.merge(megidoList, Shin46);
  $.merge(megidoList, Shin47);
  $.merge(megidoList, Shin48);
  $.merge(megidoList, Shin49);
  $.merge(megidoList, Shin50);
  $.merge(megidoList, Shin51);
  $.merge(megidoList, Shin52);
  $.merge(megidoList, Shin53);
  $.merge(megidoList, Shin54);
  $.merge(megidoList, Shin55);
  $.merge(megidoList, Shin56);
  $.merge(megidoList, Shin57);
  $.merge(megidoList, Shin58);
  $.merge(megidoList, Shin59);
  // $.merge(megidoList, Shin60);
  $.merge(megidoList, Shin61);
  $.merge(megidoList, Shin62);
  $.merge(megidoList, Shin63);
  $.merge(megidoList, Shin64);
  $.merge(megidoList, Shin65);
  $.merge(megidoList, Shin66);
  // $.merge(megidoList, Shin67);
  $.merge(megidoList, Shin68);
  $.merge(megidoList, Shin69);
  $.merge(megidoList, Shin70);
  $.merge(megidoList, Shin71);
  $.merge(megidoList, Shin72);
  //#endregion

  $.merge(megidoList, MegidoList);
  return megidoList.sort(function (a, b) {
    if (a.name == b.name) {
      a.name += `（${convertToStyleName(a.styleType)}）`;
      b.name += `（${convertToStyleName(b.styleType)}）`;
      if (a.id > b.id) return 1;
      else return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
}
