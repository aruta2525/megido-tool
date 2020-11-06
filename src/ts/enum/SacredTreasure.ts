export const GenealogyType = {
  None: 'なし',
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

export const SacredTreasureRank = {
  Gold: '金',
  Silver: '銀',
  Blue: '青'
} as const;
export type SacredTreasureRank = typeof SacredTreasureRank[keyof typeof SacredTreasureRank];

export const SacredTreasureSize = {
  Big: '2',
  Medium: '1',
  Small: '0'
} as const;
export type SacredTreasureSize = typeof SacredTreasureSize[keyof typeof SacredTreasureSize];

export function convertToSacredTreasureSizeName(size: SacredTreasureSize): string {
  switch (size) {
    case SacredTreasureSize.Big:
      return '大';
    case SacredTreasureSize.Medium:
      return '中';
    case SacredTreasureSize.Small:
      return '小';
    default:
      return '無';
  }
}
