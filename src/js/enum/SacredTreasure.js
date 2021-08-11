export const GenealogyType = {
    None: 'なし',
    Mougeki: '猛撃',
    Isshin: '一心',
    Metsugan: '滅丸',
    Gouken: '剛堅',
    Gourai: '轟雷',
    Kaiten: '廻天',
    Kyoyu: '狂勇',
    Rekka: '烈火',
    Rensa: '連鎖',
    Suishin: '水心'
};
export const SacredTreasureRank = {
    Gold: '金',
    Silver: '銀',
    Blue: '青'
};
export const SacredTreasureSize = {
    Big: '2',
    Medium: '1',
    Small: '0'
};
export function convertToSacredTreasureSizeName(size) {
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
//# sourceMappingURL=SacredTreasure.js.map