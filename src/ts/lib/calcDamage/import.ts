import $ from 'jquery';
import {ID_LIST as ids, DATA_VERSION} from './const';
import {IInputtedData} from '../..//interface/IInputtedData';
import rison from 'rison';

/**
 * ファイルから
 *
 * @export
 */
export function setupImportForm() {
  $(`#${ids.importButton}`).on('click touchend', (ev: Event) => {
    ev.preventDefault();

    const importFilePath: any = document.getElementById(ids.importFilePath);
    const fileReader = new FileReader();

    fileReader.addEventListener('load', (ev: ProgressEvent) => {
      let jsonStr = (ev.target as any).result;
      const result = importFromJSONString(jsonStr);

      if (result) {
        alert('読み込みが完了しました');
      } else {
      }
    });

    if (importFilePath.value == '') {
      alert('ファイルを指定してください');
      return;
    }
    fileReader.readAsText(importFilePath.files[0]);
  });
}

/**
 * urlパラメータから初期データを取得する関数です
 *
 * @export
 * @returns
 */
export function importFromURL() {
  const params = new URLSearchParams(location.search);
  const risonStr = params.get('import') || '';

  if (risonStr == '') return;
  // パラメータ読み込み
  const json: IInputtedData = rison.decode(risonStr);

  importData(json);
}
/**
 * Fileから初期データを取得する関数です
 *
 * @export
 * @returns {boolean} 成功したのならtrue 失敗したのならfalseを返します。
 */
export function importFromJSONString(jsonStr: string) {
  // パラメータ読み込み
  const json: IInputtedData = JSON.parse(jsonStr);

  return importData(json);
}

/**
 *クエリパラメータから入力要素に代入
 *
 * @param {IInputtedData} json
 * @return {boolean} 成功したのならtrue 失敗したのならfalseを返します。
 */
function importData(json: IInputtedData) {
  if (json.version != DATA_VERSION) {
    if (!confirm('データ形式のバージョンが違うため、正しく反映されない可能性があります。\nこのままインポートを実行しますか？')) {
      return false;
    } else {
    }
  }
  // input要素に代入
  $(`#${ids.megido}`).val(json.megido).trigger('change');
  $(`#${ids.offense}`).val(json.offense).trigger('change');
  $(`#${ids.offensiveBuff}`).val(json.offensiveBuff).trigger('change');
  $(`#${ids.offensiveDebuff}`).val(json.offensiveDebuff).trigger('change');
  $(`#${ids.defense}`).val(json.defense).trigger('change');
  $(`#${ids.defensiveBuff}`).val(json.defensiveBuff).trigger('change');
  $(`#${ids.defensiveDebuff}`).val(json.defensiveDebuff).trigger('change');
  $(`#${ids.speed}`).val(json.speed).trigger('change');
  $(`#${ids.speedilyBuff}`).val(json.speedilyBuff).trigger('change');
  $(`#${ids.speedilyDebuff}`).val(json.speedilyDebuff).trigger('change');
  $(`#${ids.sacredTreasure1}`).val(json.sacredTreasure1).trigger('change');
  $(`#${ids.sacredTreasure2}`).val(json.sacredTreasure2).trigger('change');
  $(`#${ids.sacredTreasure3}`).val(json.sacredTreasure3).trigger('change');
  $(`#${ids.sacredTreasure4}`).val(json.sacredTreasure4).trigger('change');
  $(`#${ids.personalSacredTreasure}`).val(json.personalSacredTreasure).trigger('change');
  $(`#${ids.skill}`).val(json.skill).trigger('change');
  $(`#${ids.skillLevels}`).val(json.skillLevels).trigger('change');
  $(`#${ids.mysteriesLevels}`).val(json.mysteriesLevels).trigger('change');
  $(`#${ids.magnification}`).val(json.magnification).trigger('change');
  $(`#${ids.hit}`).val(json.hit).trigger('change');
  $(`#${ids.referralStatus}`).val(json.referralStatus).trigger('change');
  $(`#${ids.attribute}`).val(json.attribute).trigger('change');
  $(`#${ids.photon}`).val(json.photon).trigger('change');
  $(`#${ids.classCorrection}`).val(json.classCorrection).trigger('change');
  $(`#${ids.freeze}`).prop('checked', json.freeze).trigger('change');
  $(`#${ids.zombie}`).prop('checked', json.zombie).trigger('change');
  $(`#${ids.attributeBuff}`).val(json.attributeBuff).trigger('change');
  $(`#${ids.species}`).val(json.species).trigger('change');
  $(`#${ids.statusAbnormality}`).val(json.statusAbnormality).trigger('change');
  $(`#${ids.supplementaryDamage}`).val(json.supplementaryDamage).trigger('change');
  $(`#${ids.specialEfficacy1}`).val(json.specialEfficacy1).trigger('change');
  $(`#${ids.specialEfficacy2}`).val(json.specialEfficacy2).trigger('change');
  $(`#${ids.additionalDamage}`).val(json.additionalDamage).trigger('change');
  $(`#${ids.stage}`).val(json.stage).trigger('change');
  $(`#${ids.enemy}`).val(json.enemy).trigger('change');
  $(`#${ids.difficultyLevel}`).val(json.difficultyLevel).trigger('change');
  $(`#${ids.enemyDefense}`).val(json.enemyDefense).trigger('change');
  $(`#${ids.enemyDefensiveBuff}`).val(json.enemyDefensiveBuff).trigger('change');
  $(`#${ids.enemyDefensiveDebuff}`).val(json.enemyDefensiveDebuff).trigger('change');
  $(`#${ids.ignoreEnemyDefense}`).val(json.ignoreEnemyDefense).trigger('change');
  $(`#${ids.enemyDamageReduction}`).val(json.enemyDamageReduction).trigger('change');

  return true;
}
