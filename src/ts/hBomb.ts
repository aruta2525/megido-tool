import $ from 'jquery';
import 'bootstrap';
import 'bootstrap-select';

const ids = {
  hp: 'hp',
  defense: 'defense',
  defensiveDebuff: 'defensiveDebuff',
  lv: 'lv',
  lvRange: 'lvRange',
  quantity: 'quantity',
  quantityRange: 'quantityRange',
  magnification: 'magnification',
  magnificationRange: 'magnificationRange',
  synchro: 'synchro',
  synchroRange: 'synchroRange',
  revisionDamage: 'revisionDamage',
  revisionDamageRange: 'revisionDamageRange',
  damage: 'damage',
  lvCheckbox: 'lvCheckbox',
  quantityCheckbox: 'quantityCheckbox',
  magnificationCheckbox: 'magnificationCheckbox',
  synchroCheckbox: 'synchroCheckbox',
  revisionDamageCheckbox: 'revisionDamageCheckbox',
  reverse: 'reverse'
};

const step = {
  lv: 1,
  quantity: 2,
  magnification: 3.1,
  synchro: 0.1,
  revisionDamage: 40
};

$(document).ready(function () {
  setupSynchronizeInputWithRange(ids.lv, ids.lvRange);
  setupSynchronizeInputWithRange(ids.quantity, ids.quantityRange);
  setupSynchronizeInputWithRange(ids.magnification, ids.magnificationRange);
  setupSynchronizeInputWithRange(ids.synchro, ids.synchroRange);
  setupSynchronizeInputWithRange(ids.revisionDamage, ids.revisionDamageRange);

  setupDefault();

  $(`#${ids.reverse}`).on('click', () => {
    reverseLookup();
  });
});

$(document).on('change', () => {
  setupDamage();
});

$(document).on('input', () => {
  setupDamage();
});

function setupDefault() {
  $(`#${ids.lv}`).val(70);
  $(`#${ids.lv}`).trigger('change');
  $(`#${ids.quantity}`).val(1);
  $(`#${ids.quantity}`).trigger('change');
  $(`#${ids.magnification}`).val(0.1);
  $(`#${ids.magnification}`).trigger('change');
  $(`#${ids.synchro}`).val(1.1);
  $(`#${ids.synchro}`).trigger('change');
  $(`#${ids.revisionDamage}`).val(0);
  $(`#${ids.revisionDamage}`).trigger('change');
}

function setupSynchronizeInputWithRange(inputId: string, rangeId: string) {
  const input = $(`#${inputId}`);
  const range = $(`#${rangeId}`);
  range.on('input', (ev) => {
    const target = ev.target as HTMLInputElement;
    input.val(target.value);
  });
  input.on('change', (ev) => {
    const target = ev.target as HTMLInputElement;
    range.val(target.value);
  });
}

/**
 * ダメージ計算する関数です。
 * {(100 + Lv * 15 + 素材としたボム数 * Lv * 2.5) * Hボム倍率 - 敵防御力} * 同時爆破補正 * ダメージ補正
 */
function calculateDamage() {
  const lv = Number($(`#${ids.lv}`).val());
  const quantity = Number($(`#${ids.quantity}`).val());
  const magnification = Number($(`#${ids.magnification}`).val());
  const synchro = Number($(`#${ids.synchro}`).val());
  const revisionDamage = 1 + Number($(`#${ids.revisionDamage}`).val()) / 100;
  const defense = Number($(`#${ids.defense}`).val());
  const defensiveDebuff = 1 - Number($(`#${ids.defensiveDebuff}`).val()) / 100;

  const damage = ((100 + (15 + quantity * 2.5) * lv) * magnification - defense * defensiveDebuff) * synchro * revisionDamage;

  if (1 < damage) {
    return damage;
  } else {
    return 1;
  }

  // $(`#${ids.damagePerHit}`).val(`${minDamage.toLocaleString()} ～ ${maxDamage.toLocaleString()}`);
  // $(`#${ids.totalDamage}`).val(`${totalMinDamage.toLocaleString()} ～ ${totalMaxDamage.toLocaleString()}`);
}

function setupDamage() {
  const damage = calculateDamage();
  $(`#${ids.damage}`).val(`${Math.round(damage).toLocaleString()}`);
}

function reverseLookup(beforeDamage?: number) {
  const hp = Number($(`#${ids.hp}`).val());
  const damage = calculateDamage();

  if (beforeDamage == damage) {
    setupDamage();
    alert('指定条件では敵HPを上回ることが出来ませんでした');
    return;
  }

  if (damage < hp) {
    if (!$(`#${ids.lvCheckbox}`).prop('checked')) {
      setNextValue(ids.lvRange, step.lv);
    }
    if (!$(`#${ids.quantityCheckbox}`).prop('checked')) {
      setNextValue(ids.quantityRange, step.quantity);
    }
    if (!$(`#${ids.magnificationCheckbox}`).prop('checked')) {
      setNextValue(ids.magnificationRange, step.magnification);
    }
    if (!$(`#${ids.synchroCheckbox}`).prop('checked')) {
      setNextValue(ids.synchroRange, step.synchro);
    }
    if (!$(`#${ids.revisionDamageCheckbox}`).prop('checked')) {
      setNextValue(ids.revisionDamageRange, step.revisionDamage);
    }

    reverseLookup(damage);
  } else {
    setupDamage();
  }
}

function setNextValue(rangeId: string, step: number) {
  const range = $(`#${rangeId}`);
  const max = Number(range.prop('max'));
  const value = Number(range.val()) + step;
  if (max < value) {
    range.val(max);
  } else {
    range.val(value);
  }

  range.trigger('input');
}

function syncronizeRange(ev: Event) {
  const target = ev.target;
}
