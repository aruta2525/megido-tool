export const PhotonType = {
    Normal: '通常',
    Strengthening: '強化',
    Deterioration: '劣化'
};
export const SkillType = {
    Counter: '反撃',
    Attack: 'アタック',
    Skill: 'スキル',
    AwakeningSkill: '覚醒スキル',
    Mysteries: '奥義',
    SecretMysteries: '秘奥義'
};
export const ReferralStatus = {
    Offence: '攻撃力',
    Defence: '防御力',
    Speed: '素早さ'
};
export const Attribute = {
    None: '無',
    Fire: '火',
    Thunder: '雷',
    Break: '破断',
    Sound: '響撃'
};
export const StyleType = {
    Rush: 1,
    Counter: 2,
    Burst: 4,
    RC: 1 | 2,
    CB: 2 | 4,
    RB: 1 | 4,
    All: 1 | 2 | 4
};
export function convertToStyleName(styleType) {
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
};
export const ClockType = {
    So: '祖',
    Shin: '真'
};
export const RangeType = {
    One: '単体',
    Line: '列',
    All: '全体'
};
export const TranceType = {
    None: 'なし',
    Concert: '協奏',
    Berserk: '怒闘',
    BArts: 'Bアーツ',
    Necro: 'ネクロ',
    Colosseum: 'コロッセオ'
};
export const EffectTarget = {
    None: 0,
    OffenceBuff: 1,
    DefenceBuff: 2,
    SpeedilyBuff: 3,
    a: 3
};
//# sourceMappingURL=Megido.js.map