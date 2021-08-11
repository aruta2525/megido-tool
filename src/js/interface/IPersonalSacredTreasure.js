/**
 * 専用霊宝か判定
 * @param arg 霊宝クラス
 * @returns 専用霊宝クラスならtrue、違うならfalse
 */
export function isIPersonalSacredTreasure(arg) {
    return arg !== null && typeof arg === 'object' && typeof arg.personal === 'object' && arg.personal !== undefined;
}
//# sourceMappingURL=IPersonalSacredTreasure.js.map