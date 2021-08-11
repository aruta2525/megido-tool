export const PhotonType = {
  Normal: '通常',
  Strengthening: '強化',
  Deterioration: '劣化'
} as const;
export type PhotonType = typeof PhotonType[keyof typeof PhotonType];

export const SkillType = {
  Attack: 'アタック',
  Skill: 'スキル',
  AwakeningSkill: '覚醒スキル',
  Mysteries: '奥義',
  SecretMysteries: '秘奥義'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType];

export const ReferralStatus = {
  Offence: '攻撃力',
  Defence: '防御力',
  Speed: '素早さ'
} as const;
export type ReferralStatus = typeof ReferralStatus[keyof typeof ReferralStatus];

export const Attribute = {
  None: '無',
  Fire: '火',
  Thunder: '雷',
  Break: '破断',
  Sound: '響撃'
} as const;
export type Attribute = typeof Attribute[keyof typeof Attribute];

export const StyleType = {
  Rush: 1,
  Counter: 2,
  Burst: 4,
  RC: 1 | 2,
  CB: 2 | 4,
  RB: 1 | 4,
  All: 1 | 2 | 4
} as const;
export type StyleType = typeof StyleType[keyof typeof StyleType];

export function convertToStyleName(styleType: StyleType) {
  switch (styleType) {
    case StyleType.Rush:
      return 'ラッシュ';
    case StyleType.Counter:
      return 'カウンター';
    case StyleType.Burst:
      return 'バースト';
    default:
      return 'なし';
  }
}

export const ClassType = {
  Fighter: 'ファイター',
  Trooper: 'トルーパー',
  Sniper: 'スナイパー'
} as const;
export type ClassType = typeof ClassType[keyof typeof ClassType];

export const ClockType = {
  So: '祖',
  Shin: '真'
} as const;
export type ClockType = typeof ClockType[keyof typeof ClockType];

export const RangeType = {
  One: '単体',
  Line: '列',
  All: '全体'
} as const;
export type RangeType = typeof RangeType[keyof typeof RangeType];

export const TranceType = {
  None: 'なし',
  Concert: '協奏',
  Berserk: '怒闘',
  BArts: 'Bアーツ',
  Necro: 'ネクロ',
  Colosseum: 'コロッセオ'
} as const;
export type TranceType = typeof TranceType[keyof typeof TranceType];

export const EffectTarget = {
  None: 0,
  OffenceBuff: 1,
  DefenceBuff: 2,
  SpeedilyBuff: 3,
  a: 3
} as const;
export type EffectTarget = typeof EffectTarget[keyof typeof EffectTarget];
