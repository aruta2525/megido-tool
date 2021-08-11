import $ from 'jquery';
import { ClassType, StyleType } from '../../enum/Megido';
import { Stage, DifficultyLevel } from '../../enum/Stage';
import ShiWoAyasumono from './kiniki/ShiWoAyasumono/ShiWoAyasumono';
import Beincheisaa from './kiniki/Beincheisaa/Beincheisaa';
import Abisugaado from './kiniki/Abisugaado/Abisugaado';
import PorutaagaisutoHoudai from './kiniki/Porutaagaisuto/PorutaagaisutoHoudai';
import Porutaagaisuto from './kiniki/Porutaagaisuto/Porutaagaisuto';
import Yugudorasiru from './kiniki/Yugudorasiru/Yugudorasiru';
import AsyutoretoHanasakinome from './kiniki/Asyutoreto/AsyutoretoHanasakinome';
import AsyutoretoMe from './kiniki/Asyutoreto/AsyutoretoMe';
import Asyutoreto from './kiniki/Asyutoreto/Asyutoreto';
import AsyutoretoHontaikoa from './kiniki/Asyutoreto/AsyutoretoHontaikoa';
import AsyutoretoTubasakoa from './kiniki/Asyutoreto/AsyutoretoTubasakoa';
import Ruru from './kiniki/Ruru/Ruru';
import Osukaa from './kiniki/Osukaa/Osukaa';
import Dwuumu1 from './kiniki/Dwuumu/Dwuumu1';
import Dwuumu2 from './kiniki/Dwuumu/Dwuumu2';
import Dwuumu3 from './kiniki/Dwuumu/Dwuumu3';
import Dwuumu4 from './kiniki/Dwuumu/Dwuumu4';
import Dwuumu5 from './kiniki/Dwuumu/Dwuumu5';
import Orochi from './kiniki/Orochi/Orochi';
import Jaganoto from './kiniki/Jaganoto/Jaganoto';
import Zabunbun from './shinshinken/kyotai/Zabunbun';
const noname = {
    stage: Stage.Chap1,
    difficultyLevel: DifficultyLevel.N,
    no: 0,
    id: 0,
    name: 'なし',
    classType: ClassType.Fighter,
    styleType: StyleType.Rush,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0
};
let enemyList = [];
enemyList.push(noname);
//#region 敵情報を配列にまとめる
$.merge(enemyList, ShiWoAyasumono);
$.merge(enemyList, Beincheisaa);
$.merge(enemyList, Abisugaado);
$.merge(enemyList, PorutaagaisutoHoudai);
$.merge(enemyList, Porutaagaisuto);
$.merge(enemyList, Yugudorasiru);
$.merge(enemyList, AsyutoretoHanasakinome);
$.merge(enemyList, AsyutoretoMe);
$.merge(enemyList, Asyutoreto);
$.merge(enemyList, AsyutoretoHontaikoa);
$.merge(enemyList, AsyutoretoTubasakoa);
$.merge(enemyList, Ruru);
$.merge(enemyList, Osukaa);
$.merge(enemyList, Dwuumu1);
$.merge(enemyList, Dwuumu2);
$.merge(enemyList, Dwuumu3);
$.merge(enemyList, Dwuumu4);
$.merge(enemyList, Dwuumu5);
$.merge(enemyList, Orochi);
$.merge(enemyList, Jaganoto);
$.merge(enemyList, Zabunbun);
//#endregion
export default enemyList;
/**
 * stageに一致するEnemy配列を返します。
 *
 * @export
 * @param {Stage} stage
 * @returns {IEnemy[]}
 */
export function matchEnemyStage(stage) {
    const list = enemyList
        .filter((e) => e.stage == stage)
        .filter((e, i, self) => {
        return self.findIndex((s) => e.name === s.name) === i;
    }) || [];
    // console.log(list);
    if (list.length == 0)
        list.unshift(noname);
    return list;
}
/**
 * nameと一致するEnemy配列を取得します。
 * 同名の要素がある場合は1つに絞られます。
 *
 * @export
 * @param {String} name
 * @returns {IEnemy[]}
 */
export function matchEnemyName(name) {
    const list = enemyList.filter((e) => e.name == name) || [];
    if (list.length == 0)
        list.unshift(noname);
    return list;
}
//# sourceMappingURL=Enemy.js.map