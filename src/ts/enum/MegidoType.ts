export const PhotonType = {
  Normal: '通常',
  Strengthening: '強化',
  Deterioration: '劣化'
} as const;
export type PhotonType = typeof PhotonType[keyof typeof PhotonType];

export const SkillType = {
  Atack: 'アタック',
  Skill: 'スキル',
  AwakeningSkill: '覚醒スキル',
  Mysteries: '奥義',
  SecretMysteries: '秘奥義'
} as const;
export type SkillType = typeof SkillType[keyof typeof SkillType];

export const Attribute = {
  None: '無',
  Fire: '火',
  Thunder: '雷',
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

export const GenealogyType = {
  None: '無し',
  Mougeki: '猛撃',
  Isshin: '一心',
  Gouken: '剛堅',
  Gourai: '轟雷',
  Kaiten: '廻天',
  Rekka: '烈火',
  Rensa: '連鎖',
  Suishin: '水心'
} as const;
export type GenealogyType = typeof GenealogyType[keyof typeof GenealogyType];

export const GenealogyRank = {
  Gold: '金',
  Silver: '銀',
  Blue: '青'
} as const;
export type GenealogyRank = typeof GenealogyRank[keyof typeof GenealogyRank];

export const GenealogySize = {
  Big: '2',
  Medium: '1',
  Small: '0'
} as const;
export type GenealogySize = typeof GenealogySize[keyof typeof GenealogySize];

export function convertToGenealogySizeName(size: GenealogySize): string {
  switch (size) {
    case GenealogySize.Big:
      return '大';
    case GenealogySize.Medium:
      return '中';
    case GenealogySize.Small:
      return '小';
    default:
      return '無';
  }
}
