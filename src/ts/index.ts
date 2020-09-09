import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';

import {joinAndSortMegidoByName} from './data/megido/Megido';
import {sacredTreasureList} from './data/sacred-treasure/SacredTreasure';
import {ISkillData, ISkillLevel, defaultSkills} from './interface/ISkillData';
import {getPhotonCorrection} from './util/MegidoUtil';
import {PhotonType, StyleType} from './enum/MegidoType';
import {GenealogyType, convertToGenealogySizeName} from './enum/MegidoType';

const megidoList = joinAndSortMegidoByName();
const ids = {
  megido: 'megido',
  offense: 'offense',
  offensiveBuff: 'offensiveBuff',
  skill: 'skill',
  skillLevels: 'skillLevels',
  mysteriesLevels: 'mysteriesLevels',
  magnification: 'magnification',
  hit: 'hit',
  photon: 'photon',
  classCorrection: 'classCorrection',
  freeze: 'freeze',
  defense: 'defense',
  ignoreDefense: 'ignoreDefense',
  defensiveDebuff: 'defensiveDebuff',
  attribute: 'attribute',
  species: 'species',
  statusAbnormality: 'statusAbnormality',
  specialEfficacy1: 'specialEfficacy1',
  specialEfficacy2: 'specialEfficacy2',
  specialEfficacy3: 'specialEfficacy3',
  additionalDamage: 'additionalDamage',
  damagePerHit: 'damagePerHit',
  offensiveDebuff: 'offensiveDebuff',
  defensiveBuff: 'defensiveBuff',
  totalDamage: 'totalDamage',
  sacredTreasure1: 'sacredTreasure1',
  sacredTreasureText1: 'sacredTreasureText1',
  sacredTreasure2: 'sacredTreasure2',
  sacredTreasureText2: 'sacredTreasureText2',
  sacredTreasure3: 'sacredTreasure3',
  sacredTreasureText3: 'sacredTreasureText3',
  sacredTreasure4: 'sacredTreasure4',
  sacredTreasureText4: 'sacredTreasureText4'
};
let nowSkill: ISkillData = defaultSkills[0];

$(document).ready(function () {
  const megidoSelect = $(`#${ids.megido}`);
  megidoList.forEach((megido, i) => {
    megidoSelect.append(`<option value="${i}">${megido.name}</option>`);
  });
  megidoSelect.selectpicker('refresh');

  megidoSelect.change(function () {
    const index = megidoSelect.val();
    const megido = megidoList[Number(index)];
    $(`#${ids.offense}`).val(megido.offense);
    setupSkills(megido.skills);
    setupSacredTreasures(megido.styleType);
  });
  megidoSelect.change();

  const mysteriesLevels = $(`#${ids.mysteriesLevels}`);
  mysteriesLevels.change(() => {
    calculateMagnification();
  });
});

$(document).change(() => {
  calculateDamage();
});

/**
 * スキルをセットする関数です。
 * @param skills
 */
function setupSkills(skills: ISkillData[] = defaultSkills) {
  const skillSelect = $(`#${ids.skill}`);

  skillSelect.empty();
  skills.forEach((skill, i) => {
    skillSelect.append(`<option value="${i}">${skill.name}</option>`);
  });
  // skillSelect.selectpicker('val', '1');
  skillSelect.selectpicker('render').selectpicker('refresh');

  skillSelect.off('change');
  skillSelect.change(() => {
    const index = skillSelect.val();
    skillSelect.selectpicker('val', String(index));
    const skill = skills[Number(index)];
    nowSkill = skill;

    if (skill.increment != null) {
      $(`#${ids.mysteriesLevels}`).prop('disabled', false);
    } else {
      $(`#${ids.mysteriesLevels}`).prop('disabled', true);
    }
    $(`#${ids.mysteriesLevels}`).selectpicker('render').selectpicker('refresh');

    setupLevels(skill.levels);
  });
  skillSelect.change();
}

/**
 * levelsSelectをセットアップする関数です。
 * @param levels
 */
function setupLevels(levels: ISkillLevel[]) {
  const levelSelect = $(`#${ids.skillLevels}`);

  levelSelect.empty();
  levels.forEach((level, i) => {
    levelSelect.append(`<option value="${i}">${level.level}</option>`);
  });

  if (levels.length != 1) {
    levelSelect.prop('disabled', false);
  } else {
    levelSelect.prop('disabled', true);
  }
  levelSelect.selectpicker('render').selectpicker('refresh');

  levelSelect.off('change');
  levelSelect.change(() => {
    const index = levelSelect.val();
    levelSelect.selectpicker('val', String(index));
    calculateMagnification();
  });
  levelSelect.change();
}

/**
 * 全霊宝selectの設定
 * @param styleType 表示する霊宝のスタイル
 */
function setupSacredTreasures(styleType: StyleType) {
  setupSacredTreasure(ids.sacredTreasure1, ids.sacredTreasureText1, styleType);
  setupSacredTreasure(ids.sacredTreasure2, ids.sacredTreasureText2, styleType);
  setupSacredTreasure(ids.sacredTreasure3, ids.sacredTreasureText3, styleType);
  setupSacredTreasure(ids.sacredTreasure4, ids.sacredTreasureText4, styleType);
}

/**
 * 霊宝selectの設定
 *
 * @param selectId selectのID
 * @param textId divのID
 * @param styleType 表示する霊宝のスタイル
 */
function setupSacredTreasure(selectId: string, textId: string, styleType: StyleType) {
  const stList = $(`#${selectId}`);
  const stText = $(`#${textId}`);
  let beforeOffense = 0;

  let genealogyList: {
    [GenealogyType: string]: JQuery;
  } = {};
  Object.entries(GenealogyType).forEach(([key, value]) => {
    genealogyList[value] = $(`<optgroup label="系譜: ${value}"></optgroup>`);
  });

  stList.empty();
  sacredTreasureList.forEach((st, i) => {
    if ((st.styleType & styleType) == styleType) {
      genealogyList[st.type].append(`<option value="${i}">${st.name}(${convertToGenealogySizeName(st.size)})</option>`);
    }
  });
  Object.keys(genealogyList).forEach((key) => {
    if (genealogyList[key].children.length != 0) {
      stList.append(genealogyList[key]);
    }
  });
  stList.selectpicker('render').selectpicker('refresh');

  stList.off('change');
  stList.change(() => {
    const offenseInput = $(`#${ids.offense}`);
    const index = stList.val();
    stList.selectpicker('val', String(index));
    const st = sacredTreasureList[Number(index)];
    const offense = st.offense;
    const ability = st.ability != undefined ? st.ability : {value: 0, text: ''};
    stText.text(ability.text);
    const o = Number(offenseInput.val()) - beforeOffense + offense;
    beforeOffense = offense;
    offenseInput.val(o);

    calculateMagnification();
  });
  stList.change();
}

/**
 * 倍率とhit数を計算しセットする関数です。
 */
function calculateMagnification() {
  const magnification = $(`#${ids.magnification}`);
  const hit = $(`#${ids.hit}`);
  const skill = nowSkill;
  let mag;
  const levelSelect = $(`#${ids.skillLevels}`);
  const level = skill.levels[Number(levelSelect.val())];
  mag = level.magnification;

  if (skill.increment != null) {
    mag += skill.increment * Number($(`#${ids.mysteriesLevels}`).val());
  }

  magnification.val(mag);
  hit.val(level.hit);
}

/**
 * ダメージ計算する関数です。
 * ([攻撃力] * [攻撃力バフ累計] *[攻撃力デバフ累計]* [技倍率]-[敵防御]*[防御力バフ累計]*[防御力デバフ累計]) * [アタック/スキル強化] * [クラス補正] * [特効(特効a*特効b*…*特効x)] * [属性補正] * [凍結補正] * [ダメージ補正] * [乱数]
 */
function calculateDamage() {
  const offense = Number($(`#${ids.offense}`).val());
  const offensiveBuff = Number($(`#${ids.offensiveBuff}`).val()) / 100 + 1;
  const magnification = Number($(`#${ids.magnification}`).val());
  const photonType = getPhotonType(Number($(`#${ids.photon}`).val()));
  const photonCorrection = getPhotonCorrection(nowSkill.type, photonType);
  const classCorrection = Number($(`#${ids.classCorrection}`).val());
  const freeze = $(`#${ids.freeze}`).prop('checked') ? 2 : 1;
  const defense = Number($(`#${ids.defense}`).val());
  const ignoreDefense = 1 - Number($(`#${ids.ignoreDefense}`).val()) / 100;
  const defensiveDebuff = 1 - Number($(`#${ids.defensiveDebuff}`).val()) / 100;
  const attribute = Number($(`#${ids.attribute}`).val()) / 100 + 1;
  const speceis = Number($(`#${ids.species}`).val()) / 100 + 1;
  const statusAbnormality = Number($(`#${ids.statusAbnormality}`).val()) / 100 + 1;
  const specialEfficacy1 = Number($(`#${ids.specialEfficacy1}`).val()) / 100 + 1;
  const specialEfficacy2 = Number($(`#${ids.specialEfficacy2}`).val()) / 100 + 1;
  const specialEfficacy3 = Number($(`#${ids.specialEfficacy3}`).val()) / 100 + 1;
  const additionalDamage = Number($(`#${ids.additionalDamage}`).val());
  const offensiveDebuff = 1 - Number($(`#${ids.offensiveDebuff}`).val()) / 100;
  const defensiveBuff = Number($(`#${ids.defensiveBuff}`).val()) / 100;
  const hit = Number($(`#${ids.hit}`).val());

  const damage =
    (offense * offensiveBuff * offensiveDebuff * magnification - defense * defensiveBuff * defensiveDebuff * ignoreDefense) *
    photonCorrection *
    classCorrection *
    attribute *
    speceis *
    statusAbnormality *
    freeze *
    specialEfficacy1 *
    specialEfficacy2 *
    specialEfficacy3;
  const minDamage = Math.round(damage * 0.95) + additionalDamage;
  const maxDamage = Math.round(damage * 1.05) + additionalDamage;
  const totalMinDamage = minDamage * hit;
  const totalMaxDamage = maxDamage * hit;

  $(`#${ids.damagePerHit}`).val(`${minDamage.toLocaleString()} ～ ${maxDamage.toLocaleString()}`);
  $(`#${ids.totalDamage}`).val(`${totalMinDamage.toLocaleString()} ～ ${totalMaxDamage.toLocaleString()}`);
}

function getPhotonType(num: number): PhotonType {
  switch (num) {
    case 0:
      return PhotonType.Normal;
    case 1:
      return PhotonType.Strengthening;
    case 2:
      return PhotonType.Deterioration;
    default:
      return PhotonType.Normal;
  }
}
