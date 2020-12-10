import {SkillType, PhotonType} from '../enum/Megido';

/**
 * スキルタイプとフォトンタイプからダメージ補正を返します。
 * @param skillType
 * @param photonType
 */
export function getPhotonCorrection(skillType: SkillType, photonType: PhotonType): number {
  let value: number;
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
  return value;
}
