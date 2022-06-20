import { SkillType, PhotonType } from '../enum/Megido';
/**
 * スキルタイプとフォトンタイプからダメージ補正を返します。
 * @param skillType
 * @param photonType
 */
export function getPhotonCorrection(skillType, photonType) {
    let value;
    switch (photonType) {
        case PhotonType.Normal:
            value = 1;
            break;
        case PhotonType.Strengthening:
            value = skillType == SkillType.Attack ? 2 : 1.5;
            break;
        case PhotonType.Deterioration:
            value = 0.5;
            break;
    }
    // 反撃なら1に修正
    switch (skillType) {
        case SkillType.Counter:
            value = 1;
            break;
    }
    return value;
}
//# sourceMappingURL=MegidoUtil.js.map