import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';

import {joinAndSortMegidoByName} from './data/megido/Megido';
import {matchEnemyStage, matchEnemyName} from './data/enemy/Enemy';
import {sacredTreasureList} from './data/sacred-treasure/SacredTreasure';
import {genealogyList} from './data/sacred-treasure/Genealogy';
import {ISkillData, ISkillLevel, defaultSkills} from './interface/ISkillData';
import {getPhotonCorrection} from './util/MegidoUtil';
import {PhotonType, StyleType, GenealogyRank, GenealogySize} from './enum/MegidoType';
import {GenealogyType, convertToGenealogySizeName} from './enum/MegidoType';
import {Stage, convertToStageName} from './enum/MegidoType';
import {DifficultyLevel, convertToDifficultyLevelName} from './enum/MegidoType';
import {ISacredTreasure} from './interface/ISacredTreasure';

const megidoList = joinAndSortMegidoByName();
const ids = {
  megido: 'megido',
  megidoAbility: 'megidoAbility',
  megidoAbilityText: 'megidoAbilityText',
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
  sacredTreasureText4: 'sacredTreasureText4',
  genealogy: 'genealogy',
  genealogyText: 'genealogyText',
  stage: 'stage',
  enemy: 'enemy',
  difficultyLevel: 'difficultyLevel',
  hp: 'hp',
  dph: 'dph'
};
let nowSkill: ISkillData = defaultSkills[0];

$(document).ready(function () {
  const megidoSelect = $(`#${ids.megido}`);
  megidoList.forEach((megido, i) => {
    megidoSelect.append(`<option value="${i}">${megido.name}</option>`);
  });
  megidoSelect.selectpicker('refresh');

  megidoSelect.on('change', function () {
    const index = megidoSelect.val();
    const megido = megidoList[Number(index)];
    $(`#${ids.offense}`).val(megido.offense);

    if (megido.ability != undefined) setupAbility(megido.ability);
    setupSkills(megido.skills);
    setupSacredTreasures(megido.styleType);
  });
  megidoSelect.trigger('change');

  const mysteriesLevels = $(`#${ids.mysteriesLevels}`);
  mysteriesLevels.on('change', () => {
    calculateMagnification();
  });

  setupStage();
});

$(document).on('change', () => {
  calculateDamage();
});

/**
 * メギドの特性をセットする関数です。
 * @param ability メギドの特性
 */
function setupAbility(ability: {name: string; text: string}) {
  const megidoAbility = $(`#${ids.megidoAbility}`);
  const megidoAbilityText = $(`#${ids.megidoAbilityText}`);
  megidoAbility.val(ability.name);
  megidoAbilityText.text(ability.text);
}

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
  skillSelect.selectpicker('render').selectpicker('refresh');

  skillSelect.off('change');
  skillSelect.on('change', () => {
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
  skillSelect.trigger('change');
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
  levelSelect.on('change', () => {
    const index = levelSelect.val();
    levelSelect.selectpicker('val', String(index));
    calculateMagnification();
  });
  levelSelect.trigger('change');
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
  const stSelect = $(`#${selectId}`);
  const stText = $(`#${textId}`);
  let beforeOffense = 0;

  let genealogyGroup: {
    [GenealogyType: string]: JQuery;
  } = {};
  Object.entries(GenealogyType).forEach(([key, value]) => {
    genealogyGroup[value] = $(`<optgroup label="系譜: ${value}"></optgroup>`);
  });

  stSelect.empty();
  sacredTreasureList.forEach((st, i) => {
    // 霊宝のスタイルとメギドのスタイルが一致してるなら追加
    if ((st.styleType & styleType) == styleType) {
      let background = '';
      switch (st.rank) {
        case GenealogyRank.Blue:
          background = 'st-blue';
          break;
        case GenealogyRank.Silver:
          background = 'st-silver';
          break;
        case GenealogyRank.Gold:
          background = 'st-gold';
          break;
      }
      genealogyGroup[st.type].append(`<option value="${i}" class="${background}">(${convertToGenealogySizeName(st.size)})${st.name}</option>`);
    }
  });
  Object.keys(genealogyGroup).forEach((key) => {
    if (genealogyGroup[key].children.length != 0) {
      stSelect.append(genealogyGroup[key]);
    }
  });
  stSelect.selectpicker('render').selectpicker('refresh');

  stSelect.off('change');
  stSelect.on('change', () => {
    const offenseInput = $(`#${ids.offense}`);
    const index = stSelect.val();
    stSelect.selectpicker('val', String(index));
    const st = sacredTreasureList[Number(index)];
    const offense = st.offense;
    const ability = st.ability != undefined ? st.ability : {value: 0, text: ''};
    stText.text(ability.text);
    const o = Number(offenseInput.val()) - beforeOffense + offense;
    beforeOffense = offense;
    offenseInput.val(o);

    calculateGenealogy();
    calculateMagnification();
  });
  stSelect.trigger('change');
}

/**
 * 系譜算出関数
 */
function calculateGenealogy() {
  const stList: ISacredTreasure[] = [];
  stList.push(getSelectedSacredTreasure(ids.sacredTreasure1));
  stList.push(getSelectedSacredTreasure(ids.sacredTreasure2));
  stList.push(getSelectedSacredTreasure(ids.sacredTreasure3));
  stList.push(getSelectedSacredTreasure(ids.sacredTreasure4));

  // 系譜なしの霊宝が2個以上なら、系譜はなし
  if (stList.filter((st) => st.type === GenealogyType.None).length >= 2) {
    setGenealogy(GenealogyType.None);
    return;
  }

  // 同種の系譜の霊宝が3個以上なら系譜取得
  let type: GenealogyType = GenealogyType.None;
  Object.entries(GenealogyType).forEach(([key, value]) => {
    if (stList.filter((st) => st.type === value).length >= 3) {
      type = value;
    }
  });

  // 同種の系譜が3個以上の系譜がなかったのなら系譜なし
  if (type == GenealogyType.None) {
    setGenealogy(GenealogyType.None);
    return;
  }

  // 系譜のポイント計算
  let point = 0;
  stList
    .filter((st) => st.type === type)
    .forEach((st) => {
      switch (st.size) {
        case GenealogySize.Big:
          point += 15;
          break;
        case GenealogySize.Medium:
          point += 10;
          break;
        case GenealogySize.Small:
          point += 5;
          break;
      }
    });

  // 30p以上なら系譜設定、未満なら系譜なし
  if (point >= 30) {
    setGenealogy(type);
  } else {
    setGenealogy(GenealogyType.None);
  }
}

/**
 * 指定selectIdの選択中の霊宝データ取得関数
 * @param selectId 霊宝SelectID
 */
function getSelectedSacredTreasure(selectId: string): ISacredTreasure {
  const stSelect = $(`#${selectId}`);
  const index = stSelect.val();
  const st = sacredTreasureList[Number(index)];

  return st;
}

/**
 * 系譜欄に表示する関数
 * @param type 系譜タイプ
 */
function setGenealogy(type: GenealogyType) {
  const genealogy = $(`#${ids.genealogy}`);
  const genealogyText = $(`#${ids.genealogyText}`);

  const g = genealogyList.find((g) => g.type === type) || genealogyList[0];
  genealogy.val(g.type);
  genealogyText.text(g.ability.text);
}

/**
 * ステージのセレクトをセットアップする関数
 */
function setupStage() {
  const stageSelect = $(`#${ids.stage}`);

  Object.entries(Stage).forEach(([key, value]) => {
    stageSelect.append(`<option value="${value}">${convertToStageName(value)}</option>`);
  });
  stageSelect.selectpicker('render').selectpicker('refresh');

  stageSelect.off('change');
  stageSelect.on('change', () => {
    const stage: Stage = stageSelect.val() as Stage;
    stageSelect.selectpicker('val', String(stage));

    setupEnemy(stage);
  });
  stageSelect.trigger('change');
}

/**
 * ステージに属する敵のセレクトをセットアップする。
 * @param stage ステージ
 */
function setupEnemy(stage: Stage) {
  const enemySelect = $(`#${ids.enemy}`);
  const enemyList = matchEnemyStage(stage);

  enemySelect.empty();
  enemyList.forEach((e, i) => {
    enemySelect.append(`<option value="${i}">${e.name}</option>`);
  });
  enemySelect.selectpicker('render').selectpicker('refresh');

  enemySelect.off('change');
  enemySelect.on('change', () => {
    const index = enemySelect.val();
    enemySelect.selectpicker('val', String(index));
    const enemy = enemyList[Number(index)];

    setupDifficultyLevel(enemy.name);
  });
  enemySelect.trigger('change');
}

/**
 * 難易度のセットアップ
 *
 * @param {String} name 敵の名前
 */
function setupDifficultyLevel(name: String) {
  const difficultSelect = $(`#${ids.difficultyLevel}`);
  const enemyList = matchEnemyName(name);
  // 最高難易度取得
  let mostDifficultyLevel: DifficultyLevel = DifficultyLevel.N;
  let mostDifficultyLevelIndex = 0;
  difficultSelect.empty();
  enemyList.forEach((e, i) => {
    if (e.difficultyLevel > mostDifficultyLevel) {
      mostDifficultyLevel = e.difficultyLevel;
      mostDifficultyLevelIndex = i;
    }
    difficultSelect.append(`<option value="${i}">${convertToDifficultyLevelName(e.difficultyLevel)}</option>`);
  });
  // 登録難易度が1つしかないなら選択不可にする。
  if (enemyList.length != 1) {
    difficultSelect.prop('disabled', false);
  } else {
    difficultSelect.prop('disabled', true);
  }
  difficultSelect.selectpicker('render').selectpicker('refresh');
  // 最高難易度を選択中にする
  difficultSelect.selectpicker('val', String(mostDifficultyLevelIndex));

  difficultSelect.off('change');
  difficultSelect.on('change', () => {
    const index = difficultSelect.val();
    difficultSelect.selectpicker('val', String(index));
    const enemy = enemyList[Number(index)];

    // TODO: HPや防御力を設定
    $(`#${ids.defense}`).val(enemy.defense || '');
    $(`#${ids.hp}`).val(enemy.hp || '');
  });
  difficultSelect.trigger('change');
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

  const hp = $(`#${ids.hp}`).val() as number;
  const dph = Math.round((totalMinDamage / hp) * 10000) / 100;
  $(`#${ids.dph}`).val(`${dph.toLocaleString()}%`);

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
