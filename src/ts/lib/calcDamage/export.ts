import $ from 'jquery';
import {ID_LIST as ids, DATA_VERSION} from './const';
import {IInputtedData} from '../..//interface/IInputtedData';
import rison from 'rison';

/**
 * エクスポートフォームをセットアップする関数です
 *
 */
export function setupExportForm() {
  $('#download').on('click touchend', (ev: Event) => {
    ev.preventDefault();

    const json = getInputtedData();

    const type = $('#export [name=downloadType]:checked').val();
    switch (type) {
      case 'text':
        downloadText(json);
        break;
      case 'csv':
        downloadCSV(json);
        break;
      case 'json':
        downloadJSON(json);
        break;
      default:
        break;
    }
  });
}

/**
 * 入力済みデータをクエリパラメータにしたURLを作成します
 *
 * @export
 * @return {string}
 */
export function generateURL() {
  const json = getInputtedData();
  delete json.megidoName;
  delete json.skillName;
  delete json.skillLevelsName;
  delete json.referralStatusName;
  delete json.attributeName;
  delete json.photonName;
  delete json.damagePerHit;
  delete json.totalDamage;
  delete json.sacredTreasure1Name;
  delete json.sacredTreasure2Name;
  delete json.sacredTreasure3Name;
  delete json.sacredTreasure4Name;
  delete json.personalSacredTreasureName;
  delete json.stageName;
  delete json.enemyName;
  delete json.difficultyLevelName;
  delete json.hp;
  delete json.dph;
  const url = new URL(location.href);
  url.searchParams.set('import', rison.encode(json));

  return url.toString();
}

// #region export関連
/**
 * 入力された値を取得する関数です
 *
 * @return {IInputtedData}
 */
function getInputtedData() {
  const megido = $(`#${ids.megido}`).val();
  const megidoName = $(`#${ids.megido} option:selected`).text();
  const offense = $(`#${ids.offense}`).val();
  const offensiveBuff = $(`#${ids.offensiveBuff}`).val();
  const defense = $(`#${ids.defense}`).val();
  const defensiveBuff = $(`#${ids.defensiveBuff}`).val();
  const defensiveDebuff = $(`#${ids.defensiveDebuff}`).val();
  const speed = $(`#${ids.speed}`).val();
  const speedilyBuff = $(`#${ids.speedilyBuff}`).val();
  const speedilyDebuff = $(`#${ids.speedilyDebuff}`).val();
  const skill = $(`#${ids.skill}`).val();
  const skillName = $(`#${ids.skill} option:selected`).text();
  const skillLevels = $(`#${ids.skillLevels}`).val();
  const skillLevelsName = $(`#${ids.skillLevels} option:selected`).text();
  const mysteriesLevels = $(`#${ids.mysteriesLevels}`).val();
  const magnification = $(`#${ids.magnification}`).val();
  const hit = $(`#${ids.hit}`).val();
  const referralStatus = $(`#${ids.referralStatus}`).val();
  const referralStatusName = $(`#${ids.referralStatus} option:selected`).text();
  const attribute = $(`#${ids.attribute}`).val();
  const attributeName = $(`#${ids.attribute} option:selected`).text();
  const photon = $(`#${ids.photon}`).val();
  const photonName = $(`#${ids.photon} option:selected`).text();
  const classCorrection = $(`#${ids.classCorrection}`).val();
  const freeze = $(`#${ids.freeze}`).prop('checked');
  const zombie = $(`#${ids.zombie}`).prop('checked');
  const enemyDefense = $(`#${ids.enemyDefense}`).val();
  const ignoreEnemyDefense = $(`#${ids.ignoreEnemyDefense}`).val();
  const enemyDefensiveDebuff = $(`#${ids.enemyDefensiveDebuff}`).val();
  const attributeBuff = $(`#${ids.attributeBuff}`).val();
  const species = $(`#${ids.species}`).val();
  const statusAbnormality = $(`#${ids.statusAbnormality}`).val();
  const supplementaryDamage = $(`#${ids.supplementaryDamage}`).val();
  const specialEfficacy1 = $(`#${ids.specialEfficacy1}`).val();
  const specialEfficacy2 = $(`#${ids.specialEfficacy2}`).val();
  const enemyDamageReduction = $(`#${ids.enemyDamageReduction}`).val();
  const additionalDamage = $(`#${ids.additionalDamage}`).val();
  const damagePerHit = ($(`#${ids.damagePerHit}`).val() || '').toString().replace(/,/g, '');
  const offensiveDebuff = $(`#${ids.offensiveDebuff}`).val();
  const enemyDefensiveBuff = $(`#${ids.enemyDefensiveBuff}`).val();
  const totalDamage = ($(`#${ids.totalDamage}`).val() || '').toString().replace(/,/g, '');
  const sacredTreasure1 = $(`#${ids.sacredTreasure1}`).val();
  const sacredTreasure1Name = $(`#${ids.sacredTreasure1} option:selected`).text();
  const sacredTreasure2 = $(`#${ids.sacredTreasure2}`).val();
  const sacredTreasure2Name = $(`#${ids.sacredTreasure2} option:selected`).text();
  const sacredTreasure3 = $(`#${ids.sacredTreasure3}`).val();
  const sacredTreasure3Name = $(`#${ids.sacredTreasure3} option:selected`).text();
  const sacredTreasure4 = $(`#${ids.sacredTreasure4}`).val();
  const sacredTreasure4Name = $(`#${ids.sacredTreasure4} option:selected`).text();
  const genealogy = $(`#${ids.genealogy}`).val();
  const personalSacredTreasure = $(`#${ids.personalSacredTreasure}`).val();
  const personalSacredTreasureName = $(`#${ids.personalSacredTreasure} option:selected`).text();
  const stage = $(`#${ids.stage}`).val();
  const stageName = $(`#${ids.stage} option:selected`).text();
  const enemy = $(`#${ids.enemy}`).val();
  const enemyName = $(`#${ids.enemy} option:selected`).text();
  const difficultyLevel = $(`#${ids.difficultyLevel}`).val();
  const difficultyLevelName = $(`#${ids.difficultyLevel} option:selected`).text();
  const hp = ($(`#${ids.hp}`).val() || '').toString().replace(/,/g, '');
  const dph = ($(`#${ids.dph}`).val() || '').toString().replace(/,/g, '');

  const json: IInputtedData = {
    version: DATA_VERSION,
    megido: megido,
    megidoName: megidoName,
    offense: offense,
    offensiveBuff: offensiveBuff,
    offensiveDebuff: offensiveDebuff,
    defense: defense,
    defensiveBuff: defensiveBuff,
    defensiveDebuff: defensiveDebuff,
    speed: speed,
    speedilyBuff: speedilyBuff,
    speedilyDebuff: speedilyDebuff,
    sacredTreasure1: sacredTreasure1,
    sacredTreasure1Name: sacredTreasure1Name,
    sacredTreasure2: sacredTreasure2,
    sacredTreasure2Name: sacredTreasure2Name,
    sacredTreasure3: sacredTreasure3,
    sacredTreasure3Name: sacredTreasure3Name,
    sacredTreasure4: sacredTreasure4,
    sacredTreasure4Name: sacredTreasure4Name,
    genealogy: genealogy,
    personalSacredTreasure: personalSacredTreasure,
    personalSacredTreasureName: personalSacredTreasureName,
    skill: skill,
    skillName: skillName,
    skillLevels: skillLevels,
    skillLevelsName: skillLevelsName,
    mysteriesLevels: mysteriesLevels,
    magnification: magnification,
    hit: hit,
    referralStatus: referralStatus,
    referralStatusName: referralStatusName,
    attribute: attribute,
    attributeName: attributeName,
    photon: photon,
    photonName: photonName,
    classCorrection: classCorrection,
    freeze: freeze,
    zombie: zombie,
    attributeBuff: attributeBuff,
    species: species,
    statusAbnormality: statusAbnormality,
    supplementaryDamage: supplementaryDamage,
    specialEfficacy1: specialEfficacy1,
    specialEfficacy2: specialEfficacy2,
    additionalDamage: additionalDamage,
    stage: stage,
    stageName: stageName,
    enemy: enemy,
    enemyName: enemyName,
    difficultyLevel: difficultyLevel,
    difficultyLevelName: difficultyLevelName,
    enemyDefense: enemyDefense,
    enemyDefensiveBuff: enemyDefensiveBuff,
    enemyDefensiveDebuff: enemyDefensiveDebuff,
    ignoreEnemyDefense: ignoreEnemyDefense,
    enemyDamageReduction: enemyDamageReduction,
    hp: hp,
    dph: dph,
    damagePerHit: damagePerHit,
    totalDamage: totalDamage
  };

  return json;
}

/**
 * 入力データObjectを文字列に変換する関数です
 *
 * @param {IInputtedData} json
 * @return {string}
 */
function convertText(json: IInputtedData) {
  let str = '';
  str = 'メギド: ' + json.megidoName + '\n';
  str += '霊宝1: ' + json.sacredTreasure1Name + '\n';
  str += '霊宝2: ' + json.sacredTreasure2Name + '\n';
  str += '霊宝3: ' + json.sacredTreasure3Name + '\n';
  str += '霊宝4: ' + json.sacredTreasure4Name + '\n';
  str += '系譜: ' + json.genealogy + '\n';
  str += '専用霊宝: ' + json.personalSacredTreasureName + '\n';
  str += '攻撃力: ' + json.offense + '\n';
  str += '攻撃バフ: ' + json.offensiveBuff + '\n';
  str += '攻撃デバフ: ' + json.offensiveDebuff + '\n';
  str += '防御力: ' + json.defense + '\n';
  str += '防御バフ: ' + json.defensiveBuff + '\n';
  str += '防御デバフ: ' + json.defensiveDebuff + '\n';
  str += '素早さ: ' + json.speed + '\n';
  str += '素早さバフ: ' + json.speedilyBuff + '\n';
  str += '素早さデバフ: ' + json.speedilyDebuff + '\n';
  str += 'スキル: ' + json.skillName + '\n';
  str += 'スキルLv: ' + json.skillLevelsName + '\n';
  str += '奥義Lv: ' + json.mysteriesLevels + '\n';
  str += '倍率: ' + json.magnification + '\n';
  str += 'ヒット数: ' + json.hit + '\n';
  str += '参照ステータス: ' + json.referralStatusName + '\n';
  str += '属性: ' + json.attributeName + '\n';
  str += 'フォトン状態: ' + json.photonName + '\n';
  str += 'クラス補正: ' + json.classCorrection + '\n';
  str += '凍結: ' + json.freeze + '\n';
  str += 'ゾンビ化: ' + json.zombie + '\n';
  str += '属性補正: ' + json.attributeBuff + '\n';
  str += '種族特攻: ' + json.species + '\n';
  str += '状態異常特攻: ' + json.statusAbnormality + '\n';
  str += 'ダメージ補正: ' + json.supplementaryDamage + '\n';
  str += 'その他特攻1: ' + json.specialEfficacy1 + '\n';
  str += 'その他特攻2: ' + json.specialEfficacy2 + '\n';
  str += '追加ダメージ: ' + json.additionalDamage + '\n';
  str += 'ステージ: ' + json.stageName + '\n';
  str += '敵: ' + json.enemyName + '\n';
  str += '難易度: ' + json.difficultyLevelName + '\n';
  str += '敵防御力: ' + json.enemyDefense + '\n';
  str += '敵防御バフ: ' + json.enemyDefensiveBuff + '\n';
  str += '敵防御デバフ: ' + json.enemyDefensiveDebuff + '\n';
  str += '防御無視: ' + json.ignoreEnemyDefense + '\n';
  str += 'ダメージ軽減: ' + json.enemyDamageReduction + '\n';
  str += '敵HP: ' + json.hp + '\n';
  str += '総ダメージ下限 / 敵HP: ' + json.dph + '\n';
  str += '1Hitあたりのダメージ: ' + json.damagePerHit + '\n';
  str += '総ダメージ: ' + json.totalDamage + '\n';

  return str;
}
/**
 * 入力データObjectをCSV文字列に変換する関数です
 *
 * @param {IInputtedData} json
 * @return {string}
 */
function convertCSV(json: IInputtedData) {
  let header = 'メギド';
  header += ', ' + '霊宝1';
  header += ', ' + '霊宝2';
  header += ', ' + '霊宝3';
  header += ', ' + '霊宝4';
  header += ', ' + '系譜';
  header += ', ' + '専用霊宝';
  header += ', ' + '攻撃力';
  header += ', ' + '攻撃バフ';
  header += ', ' + '攻撃デバフ';
  header += ', ' + '防御力';
  header += ', ' + '防御バフ';
  header += ', ' + '防御デバフ';
  header += ', ' + '素早さ';
  header += ', ' + '素早さバフ';
  header += ', ' + '素早さデバフ';
  header += ', ' + 'スキル';
  header += ', ' + 'スキルLv';
  header += ', ' + '奥義Lv';
  header += ', ' + '倍率';
  header += ', ' + 'ヒット数';
  header += ', ' + '参照ステータス';
  header += ', ' + '属性';
  header += ', ' + 'フォトン状態';
  header += ', ' + 'クラス補正';
  header += ', ' + '凍結';
  header += ', ' + 'ゾンビ化';
  header += ', ' + '属性補正';
  header += ', ' + '種族特攻';
  header += ', ' + '状態異常特攻';
  header += ', ' + 'ダメージ補正';
  header += ', ' + 'その他特攻1';
  header += ', ' + 'その他特攻2';
  header += ', ' + '追加ダメージ';
  header += ', ' + 'ステージ';
  header += ', ' + '敵';
  header += ', ' + '難易度';
  header += ', ' + '敵防御力';
  header += ', ' + '敵防御バフ';
  header += ', ' + '敵防御デバフ';
  header += ', ' + '防御無視';
  header += ', ' + 'ダメージ軽減';
  header += ', ' + '敵HP';
  header += ', ' + '総ダメージ下限 / 敵HP';
  header += ', ' + '1Hitあたりのダメージ';
  header += ', ' + '総ダメージ';
  header += '\n';
  let body = json.megidoName;
  body += ', ' + json.sacredTreasure1Name;
  body += ', ' + json.sacredTreasure2Name;
  body += ', ' + json.sacredTreasure3Name;
  body += ', ' + json.sacredTreasure4Name;
  body += ', ' + json.genealogy;
  body += ', ' + json.personalSacredTreasureName;
  body += ', ' + json.offense;
  body += ', ' + json.offensiveBuff;
  body += ', ' + json.offensiveDebuff;
  body += ', ' + json.defense;
  body += ', ' + json.defensiveBuff;
  body += ', ' + json.defensiveDebuff;
  body += ', ' + json.speed;
  body += ', ' + json.speedilyBuff;
  body += ', ' + json.speedilyDebuff;
  body += ', ' + json.skillName;
  body += ', ' + json.skillLevelsName;
  body += ', ' + json.mysteriesLevels;
  body += ', ' + json.magnification;
  body += ', ' + json.hit;
  body += ', ' + json.referralStatusName;
  body += ', ' + json.attributeName;
  body += ', ' + json.photonName;
  body += ', ' + json.classCorrection;
  body += ', ' + json.freeze;
  body += ', ' + json.zombie;
  body += ', ' + json.attributeBuff;
  body += ', ' + json.species;
  body += ', ' + json.statusAbnormality;
  body += ', ' + json.supplementaryDamage;
  body += ', ' + json.specialEfficacy1;
  body += ', ' + json.specialEfficacy2;
  body += ', ' + json.additionalDamage;
  body += ', ' + json.stageName;
  body += ', ' + json.enemyName;
  body += ', ' + json.difficultyLevelName;
  body += ', ' + json.enemyDefense;
  body += ', ' + json.enemyDefensiveBuff;
  body += ', ' + json.enemyDefensiveDebuff;
  body += ', ' + json.ignoreEnemyDefense;
  body += ', ' + json.enemyDamageReduction;
  body += ', ' + json.hp;
  body += ', ' + json.dph;
  body += ', ' + json.damagePerHit;
  body += ', ' + json.totalDamage;

  return header + body;
}

/**
 * 入力データをCSVとしてダウンロードする関数です
 *
 * @param {IInputtedData} json
 */
function downloadText(json: IInputtedData) {
  const jsonStr = convertText(json);

  const blob = new Blob([jsonStr], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  document.body.appendChild(a);
  a.download = `${json.megidoName}.txt`;
  a.href = url;
  a.click();
  a.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e4);
}

/**
 * 入力データをCSVとしてダウンロードする関数です
 *
 * @param {IInputtedData} json
 */
function downloadCSV(json: IInputtedData) {
  const jsonStr = convertCSV(json);

  const blob = new Blob([jsonStr], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  document.body.appendChild(a);
  a.download = `${json.megidoName}.csv`;
  a.href = url;
  a.click();
  a.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e4);
}

/**
 * 入力データをJSONとしてダウンロードする関数です
 *
 * @param {IInputtedData} json
 */
function downloadJSON(json: IInputtedData) {
  const jsonStr = JSON.stringify(json);

  const blob = new Blob([jsonStr], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  document.body.appendChild(a);
  a.download = `${json.megidoName}.json`;
  a.href = url;
  a.click();
  a.remove();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1e4);
}
