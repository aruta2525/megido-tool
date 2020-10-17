import $ from 'jquery';
import {IEnemy} from '../../interface/IEnemy';
import {ClassType, StyleType, Stage, DifficultyLevel} from '../../enum/MegidoType';

import ShiWoAyasumono from './kiniki/ShiWoAyasumono';
import Beincheisaa from './kiniki/Beincheisaa';
import Abisugaado from './kiniki/Abisugaado';
import PorutaagaisutoHoudai from './kiniki/PorutaagaisutoHoudai';
import Porutaagaisuto from './kiniki/Porutaagaisuto';
import Yugudorasiru from './kiniki/Yugudorasiru';
import AsyutoretoHanasakinome from './kiniki/AsyutoretoHanasakinome';
import AsyutoretoMe from './kiniki/AsyutoretoMe';
import Asyutoreto from './kiniki/Asyutoreto';
import AsyutoretoHontaikoa from './kiniki/AsyutoretoHontaikoa';
import AsyutoretoTubasakoa from './kiniki/AsyutoretoTubasakoa';
import Ruru from './kiniki/Ruru';
import Osukaa from './kiniki/Osukaa';
import Dwuumu1 from './kiniki/Dwuumu1';
import Dwuumu2 from './kiniki/Dwuumu2';
import Dwuumu3 from './kiniki/Dwuumu3';
import Dwuumu4 from './kiniki/Dwuumu4';
import Dwuumu5 from './kiniki/Dwuumu5';

const noname: IEnemy = {
  stage: Stage.Chap1,
  difficultyLevel: DifficultyLevel.N,
  no: 0,
  id: 0,
  name: 'なし',
  classType: ClassType.Fighter,
  styleType: StyleType.Rush,
  hp: 0,
  offense: 0,
  defense: 0
};

let enemyList: IEnemy[] = [];
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
//#endregion

export default enemyList;

/**
 * stageに一致するEnemy配列を返します。
 *
 * @export
 * @param {Stage} stage
 * @returns {IEnemy[]}
 */
export function matchEnemyStage(stage: Stage): IEnemy[] {
  const list =
    enemyList
      .filter((e) => e.stage == stage)
      .filter((e, i, self) => {
        return self.findIndex((s) => e.name === s.name) === i;
      }) || [];
  // console.log(list);
  if (list.length == 0) list.unshift(noname);
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
export function matchEnemyName(name: String): IEnemy[] {
  const list = enemyList.filter((e) => e.name == name) || [];

  if (list.length == 0) list.unshift(noname);
  return list;
}
