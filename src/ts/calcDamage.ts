import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';

import {joinAndSortMegidoByName} from './data/megido/Megido';
import {matchEnemyStage, matchEnemyName} from './data/enemy/Enemy';
import {SacredTreasureList} from './data/sacred-treasure/SacredTreasure';
import {getPersonalSacredTreasureList} from './data/sacred-treasure/PersonalSacredTreasure';
import {genealogyList} from './data/sacred-treasure/Genealogy';
import {ISkillData, ISkillLevel, defaultSkills} from './interface/ISkillData';
import {getPhotonCorrection} from './util/MegidoUtil';
import {PhotonType, StyleType, ReferralStatus, Attribute} from './enum/Megido';
import {SacredTreasureRank, SacredTreasureSize} from './enum/SacredTreasure';
import {GenealogyType, convertToSacredTreasureSizeName} from './enum/SacredTreasure';
import {Stage, convertToStageName} from './enum/Stage';
import {DifficultyLevel, convertToDifficultyLevelName} from './enum/Stage';
import {ISacredTreasure} from './interface/ISacredTreasure';
import {IMegido} from './interface/IMegido';
import {IPersonalSacredTreasure, isIPersonalSacredTreasure} from './interface/IPersonalSacredTreasure';

const megidoList = joinAndSortMegidoByName();
const ids = {
  megido: 'megido',
  megidoAbility: 'megidoAbility',
  megidoAbilityText: 'megidoAbilityText',
  offense: 'offense',
  offensiveBuff: 'offensiveBuff',
  defense: 'defense',
  defensiveBuff: 'defensiveBuff',
  defensiveDebuff: 'defensiveDebuff',
  speed: 'speed',
  speedilyBuff: 'speedilyBuff',
  speedilyDebuff: 'speedilyDebuff',
  skill: 'skill',
  skillLevels: 'skillLevels',
  mysteriesLevels: 'mysteriesLevels',
  magnification: 'magnification',
  hit: 'hit',
  referralStatus: 'referralStatus',
  attribute: 'attribute',
  skillText: 'skillText',
  photon: 'photon',
  classCorrection: 'classCorrection',
  freeze: 'freeze',
  zombie: 'zombie',
  enemyDefense: 'enemyDefense',
  ignoreEnemyDefense: 'ignoreEnemyDefense',
  enemyDefensiveDebuff: 'enemyDefensiveDebuff',
  attributeBuff: 'attributeBuff',
  species: 'species',
  statusAbnormality: 'statusAbnormality',
  supplementaryDamage: 'supplementaryDamage',
  specialEfficacy1: 'specialEfficacy1',
  specialEfficacy2: 'specialEfficacy2',
  enemyDamageReduction: 'enemyDamageReduction',
  additionalDamage: 'additionalDamage',
  damagePerHit: 'damagePerHit',
  offensiveDebuff: 'offensiveDebuff',
  enemyDefensiveBuff: 'enemyDefensiveBuff',
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
  personalSacredTreasure: 'personalSacredTreasure',
  personalSacredTreasureText: 'personalSacredTreasureText',
  genealogyText: 'genealogyText',
  stage: 'stage',
  enemy: 'enemy',
  difficultyLevel: 'difficultyLevel',
  hp: 'hp',
  dph: 'dph'
};
let nowSkill: ISkillData = defaultSkills[0];

$(document).ready(function () {
  setupReferralStatusSelect();
  setupAttributeSelect();

  const megidoSelect = $(`#${ids.megido}`);
  megidoList.forEach((megido, i) => {
    megidoSelect.append(`<option value="${i}">${megido.name}</option>`);
  });
  megidoSelect.selectpicker('refresh');

  megidoSelect.on('change', function () {
    const index = megidoSelect.val();
    changeMegido(Number(index));
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
 * selectのメギド変更時呼び出し関数です。
 *
 * @param index listのインデックス
 */
function changeMegido(index: number) {
  const megido = megidoList[index];
  $(`#${ids.offense}`).val(megido.offense);
  $(`#${ids.defense}`).val(megido.defense);
  $(`#${ids.speed}`).val(megido.speed);

  if (megido.ability) setupAbility(megido.ability);
  setupSkills(megido.skills);
  setupSacredTreasures(megido);
}

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
    let name;
    if (skill.name.charAt(0) === '【') {
      name = `【${skill.type.charAt(0)}・${skill.name.slice(1)}`;
    } else {
      name = `【${skill.type.charAt(0)}】${skill.name}`;
    }
    skillSelect.append(`<option value="${i}">${name}</option>`);
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

    // 参照ステ
    const referralStatusSelect = $(`#${ids.referralStatus}`);
    referralStatusSelect.selectpicker('val', skill.referralStatus || ReferralStatus.Offence);
    // 属性
    const attributeSelect = $(`#${ids.attribute}`);
    attributeSelect.selectpicker('val', skill.attribute || Attribute.None);
    // スキル説明
    const skillText = $(`#${ids.skillText}`);
    skillText.html(skill.levels[0].text || skill.text || '');
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
    levelSelect.append(`<option value="${i}">${level.label || level.level}</option>`);
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

    const skillText = $(`#${ids.skillText}`);
    skillText.html(levels[Number(index)].text || '');

    calculateMagnification();
  });
  levelSelect.trigger('change');
}

/**
 * 参照ステータスSelectをセットアップする関数です。
 */
function setupReferralStatusSelect() {
  const referralStatus = $(`#${ids.referralStatus}`);

  referralStatus.empty();
  Object.entries(ReferralStatus).forEach((value, i, array) => {
    referralStatus.append(`<option value="${array[i][1]}">${array[i][1]}</option>`);
  });
  referralStatus.selectpicker('render').selectpicker('refresh');
}

/**
 * 属性Selectをセットアップする関数です。
 */
function setupAttributeSelect() {
  const attribute = $(`#${ids.attribute}`);

  attribute.empty();
  Object.entries(Attribute).forEach((value, i, array) => {
    attribute.append(`<option value="${array[i][1]}">${array[i][1]}</option>`);
  });
  attribute.selectpicker('render').selectpicker('refresh');
}

/**
 * 全霊宝selectの設定
 * @param megido 表示する
 */
function setupSacredTreasures(megido: IMegido) {
  const html1 = generateSacredTreasureOptionsHTMLString(megido.styleType);
  setupSacredTreasure(ids.sacredTreasure1, ids.sacredTreasureText1, html1, SacredTreasureList);
  setupSacredTreasure(ids.sacredTreasure2, ids.sacredTreasureText2, html1, SacredTreasureList);
  setupSacredTreasure(ids.sacredTreasure3, ids.sacredTreasureText3, html1, SacredTreasureList);
  setupSacredTreasure(ids.sacredTreasure4, ids.sacredTreasureText4, html1, SacredTreasureList);

  // 専用霊宝欄
  const personalSacredTreasureList = getPersonalSacredTreasureList(megido.clockType, megido.no, megido.styleType);
  const html2 = generatePersonalSacredTreasureOptionsHTMLString(megido);
  setupSacredTreasure(ids.personalSacredTreasure, ids.personalSacredTreasureText, html2, personalSacredTreasureList, megido);
}

/**
 * 指定スタイルの霊宝のoption文字列を作成する関数です
 *
 * @param styleType 表示する霊宝のスタイル
 * @return
 */
function generateSacredTreasureOptionsHTMLString(styleType: StyleType): string {
  const selectDummy = $('<select></select>');
  // 系譜option group作成と初期化
  let genealogyGroup: {
    [GenealogyType: string]: JQuery;
  } = {};
  Object.entries(GenealogyType).forEach(([key, value]) => {
    genealogyGroup[value] = $(`<optgroup label="系譜: ${value}"></optgroup>`);
  });
  SacredTreasureList.forEach((st, i) => {
    // 霊宝のスタイルとメギドのスタイルが一致してるなら追加
    if ((st.styleType & styleType) == styleType) {
      let background = '';
      switch (st.rank) {
        case SacredTreasureRank.Blue:
          background = 'st-blue';
          break;
        case SacredTreasureRank.Silver:
          background = 'st-silver';
          break;
        case SacredTreasureRank.Gold:
          background = 'st-gold';
          break;
      }
      genealogyGroup[st.type].append(`<option value="${i}" class="${background}">(${convertToSacredTreasureSizeName(st.size)})${st.name}</option>`);
    }
  });
  // option groupに中身があるならselectに追加
  Object.keys(genealogyGroup).forEach((key) => {
    if (genealogyGroup[key].children.length != 0) {
      selectDummy.append(genealogyGroup[key]);
    }
  });
  return selectDummy.html();
}

/**
 * 指定メギドの専用霊宝のoption文字列を作成する関数です
 *
 * @param megido 霊宝を表示するメギド
 * @return
 */
function generatePersonalSacredTreasureOptionsHTMLString(megido: IMegido): string {
  const selectDummy = $('<select></select>');
  // 専用霊宝配列を取得
  const personalSacredTreasureList = getPersonalSacredTreasureList(megido.clockType, megido.no, megido.styleType);
  personalSacredTreasureList.forEach((st, i) => {
    let background = '';
    switch (st.rank) {
      case SacredTreasureRank.Blue:
        background = 'st-blue';
        break;
      case SacredTreasureRank.Silver:
        background = 'st-silver';
        break;
      case SacredTreasureRank.Gold:
        background = 'st-gold';
        break;
    }
    selectDummy.append(`<option value="${i}" class="${background}">(${convertToSacredTreasureSizeName(st.size)})${st.name}</option>`);
  });

  return selectDummy.html();
}

/**
 * 霊宝selectの設定
 *
 * @param selectId selectのID
 * @param textId divのID
 * @param styleType 表示する霊宝のスタイル
 */
function setupSacredTreasure(
  selectId: string,
  textId: string,
  html: string,
  sacredTreasureList: ISacredTreasure[] | IPersonalSacredTreasure[],
  megido?: IMegido
) {
  const stSelect = $(`#${selectId}`);
  const stText = $(`#${textId}`);
  let beforeOffense = 0;
  let beforeDefense = 0;
  let beforeSpeed = 0;

  stSelect.empty();
  stSelect.html(html);
  stSelect.selectpicker('render').selectpicker('refresh');

  stSelect.off('change');
  stSelect.on('change', (ev) => {
    const index = stSelect.val();
    stSelect.selectpicker('val', String(index));
    const st: ISacredTreasure | IPersonalSacredTreasure = sacredTreasureList[Number(index)];
    const ability = st.ability != undefined ? st.ability : {value: 0, text: ''};
    stText.text(ability.text);
    // 攻撃
    const offenseInput = $(`#${ids.offense}`);
    const offense = st.offense;
    const afterOffense = Number(offenseInput.val()) - beforeOffense + offense;
    beforeOffense = offense;
    offenseInput.val(afterOffense);
    // 防御
    const defenseInput = $(`#${ids.defense}`);
    const defense = st.defense;
    const afterDefense = Number(defenseInput.val()) - beforeDefense + defense;
    beforeDefense = defense;
    defenseInput.val(afterDefense);
    // 素早さ
    const speedInput = $(`#${ids.speed}`);
    const speed = st.speed;
    const afterSpeed = Number(speedInput.val()) - beforeSpeed + speed;
    beforeSpeed = speed;
    speedInput.val(afterSpeed);

    // 専用霊宝時処理
    if (ev.target.id === ids.personalSacredTreasure && megido) {
      if (isIPersonalSacredTreasure(st) && st.personal.megidoNo !== 0) {
        const personal = st.personal;
        // 特性置き換え
        if (personal.ability) {
          $(`#${ids.megidoAbility}`).val(`【専】${personal.ability.name}`);
          $(`#${ids.megidoAbilityText}`).text(personal.ability.text);
        }
        // 専用霊宝スキルに置き換え
        if (personal.skills.length > 0) {
          let newSkills: ISkillData[] = [];

          megido.skills.forEach((ms) => {
            const ps = personal.skills.find((ps) => ms.type === ps.type);
            newSkills.push(ps || ms);
          });

          setupSkills(newSkills);
        }
      } else {
        const ability = !megido.ability ? {name: '', text: ''} : megido.ability;

        $(`#${ids.megidoAbility}`).val(ability.name);
        $(`#${ids.megidoAbilityText}`).text(ability.text);
      }
    }

    calculateGenealogy();
    calculateMagnification();
  });

  // 専用霊宝を初期選択状態に
  if (selectId === ids.personalSacredTreasure) {
    const selectCount = stSelect.children('option').length;
    stSelect.val(selectCount - 1);
  }

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
        case SacredTreasureSize.Big:
          point += 15;
          break;
        case SacredTreasureSize.Medium:
          point += 10;
          break;
        case SacredTreasureSize.Small:
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
  const st = SacredTreasureList[Number(index)];

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

    // HPや防御力を設定
    $(`#${ids.enemyDefense}`).val(enemy.defense || '');
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
  const referralStatus = $(`#${ids.referralStatus}`).val();

  const magnification = Number($(`#${ids.magnification}`).val());
  const photonType = getPhotonType(Number($(`#${ids.photon}`).val()));
  const photonCorrection = getPhotonCorrection(nowSkill.type, photonType);
  const classCorrection = Number($(`#${ids.classCorrection}`).val());
  const freeze = $(`#${ids.freeze}`).prop('checked') ? 2 : 1;
  const isZombie = $(`#${ids.zombie}`).prop('checked');
  const zombieBuff = isZombie ? 1.25 : 1;
  const zombieDebuff = isZombie ? 0 : 1;
  const enemyDefense = Number($(`#${ids.enemyDefense}`).val());
  const ignoreEnemyDefense = 1 - Number($(`#${ids.ignoreEnemyDefense}`).val()) / 100;
  const enemyDefensiveDebuff = 1 - Number($(`#${ids.enemyDefensiveDebuff}`).val()) / 100;
  const attributeBuff = Number($(`#${ids.attributeBuff}`).val()) / 100 + 1;
  const species = Number($(`#${ids.species}`).val()) / 100 + 1;
  const statusAbnormality = Number($(`#${ids.statusAbnormality}`).val()) / 100 + 1;
  const supplementaryDamage = Number($(`#${ids.supplementaryDamage}`).val()) / 100 + 1;
  const specialEfficacy1 = Number($(`#${ids.specialEfficacy1}`).val()) / 100 + 1;
  const specialEfficacy2 = Number($(`#${ids.specialEfficacy2}`).val()) / 100 + 1;
  const enemyDamageReduction = 1 - Number($(`#${ids.enemyDamageReduction}`).val()) / 100;
  const additionalDamage = Number($(`#${ids.additionalDamage}`).val());
  const enemyDefensiveBuff = Number($(`#${ids.enemyDefensiveBuff}`).val()) / 100 + 1;
  const hit = Number($(`#${ids.hit}`).val());

  // 参照ステによる基礎ダメージ計算
  let baseDamage = 0;
  switch (referralStatus) {
    case ReferralStatus.Defence:
      const defense = Number($(`#${ids.defense}`).val());
      const defensiveBuff = Number($(`#${ids.defensiveBuff}`).val()) / 100 + 1;
      const defensiveDebuff = 1 - Number($(`#${ids.defensiveDebuff}`).val()) / 100;
      baseDamage = defense * zombieDebuff * defensiveBuff * defensiveDebuff * magnification;
      break;

    case ReferralStatus.Speed:
      const speed = Number($(`#${ids.speed}`).val());
      const speedilyBuff = Number($(`#${ids.speedilyBuff}`).val()) / 100 + 1;
      const speedilyDebuff = 1 - Number($(`#${ids.speedilyDebuff}`).val()) / 100;
      baseDamage = speed * zombieDebuff * speedilyBuff * speedilyDebuff * magnification;
      break;

    default:
      const offense = Number($(`#${ids.offense}`).val());
      const offensiveBuff = Number($(`#${ids.offensiveBuff}`).val()) / 100 + 1;
      const offensiveDebuff = 1 - Number($(`#${ids.offensiveDebuff}`).val()) / 100;
      baseDamage = offense * zombieBuff * offensiveBuff * offensiveDebuff * magnification;
      break;
  }

  let damage =
    (baseDamage - enemyDefense * enemyDefensiveBuff * enemyDefensiveDebuff * ignoreEnemyDefense) *
    photonCorrection *
    classCorrection *
    attributeBuff *
    species *
    statusAbnormality *
    freeze *
    supplementaryDamage *
    specialEfficacy1 *
    specialEfficacy2 *
    enemyDamageReduction;

  damage = damage < 1 ? 1 : damage;

  const minDamage = Math.round(damage * 0.95) + additionalDamage;
  const maxDamage = Math.round(damage * 1.05) + additionalDamage;
  const totalMinDamage = minDamage * hit;
  const totalMaxDamage = maxDamage * hit;

  const hp = $(`#${ids.hp}`).val() as number;
  const dph = Math.round((totalMinDamage / hp) * 10000) / 100;
  $(`#${ids.dph}`).val(`${dph.toLocaleString()} %`);

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
