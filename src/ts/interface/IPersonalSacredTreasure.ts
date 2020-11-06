import {ISacredTreasure} from './ISacredTreasure';
import {ClockType} from '../enum/Megido';

// 専用霊宝インターフェース
export interface IPersonalSacredTreasure extends ISacredTreasure {
  personal: {
    clockType: ClockType; // 時計タイプ
    megidoNo: number; // メギド番号
    name: string; //メギド名
  };
}
