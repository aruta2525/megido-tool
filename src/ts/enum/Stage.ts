export const DifficultyLevel = {
  Ex: '4',
  VH: '3',
  H: '2',
  N: '1'
} as const;
export type DifficultyLevel = typeof DifficultyLevel[keyof typeof DifficultyLevel];
export function convertToDifficultyLevelName(size: DifficultyLevel): string {
  switch (size) {
    case DifficultyLevel.N:
      return 'N';
    case DifficultyLevel.H:
      return 'H';
    case DifficultyLevel.VH:
      return 'VH';
    case DifficultyLevel.Ex:
      return 'Ex';
    default:
      return 'N';
  }
}

export const Stage = {
  Chap1: '1',
  Chap2: '2',
  Chap3: '3',
  Chap4: '4',
  Chap5: '5',
  Chap6: '6',
  Chap7: '7',
  Chap8: '8',
  Kiniki: '100',
  Shinshinken: '200'
} as const;
export type Stage = typeof Stage[keyof typeof Stage];
export function convertToStageName(size: Stage): string {
  switch (size) {
    case Stage.Chap1:
      return '1章';
    case Stage.Chap2:
      return '2章';
    case Stage.Chap3:
      return '3章';
    case Stage.Chap4:
      return '4章';
    case Stage.Chap5:
      return '5章';
    case Stage.Chap6:
      return '6章';
    case Stage.Chap7:
      return '7章';
    case Stage.Chap8:
      return '8章';
    case Stage.Kiniki:
      return '星間の禁域';
    case Stage.Shinshinken:
      return '心深圏';
    default:
      return 'なし';
  }
}
