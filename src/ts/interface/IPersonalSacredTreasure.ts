import {ISacredTreasure} from './ISacredTreasure';
import {ClockType} from '../enum/Megido';

// 専用霊宝インターフェース
export interface IPersonalSacredTreasure extends ISacredTreasure {
  personal: {
    clockType: ClockType; // 時計タイプ
    megidoNo: number; // メギド番号
    name: string; //メギド名
    // 変更後メギド特性
    megidoAbility?: {
      name: string;
      text: string;
    };
  };
}

/**
 * 専用霊宝か判定
 * @param arg 霊宝クラス
 * @returns 専用霊宝クラスならtrue、違うならfalse
 */
export function isIPersonalSacredTreasure(arg: any): arg is IPersonalSacredTreasure {
  return arg !== null && typeof arg === 'object' && typeof arg.personal === 'object' && arg.personal !== undefined;
}
