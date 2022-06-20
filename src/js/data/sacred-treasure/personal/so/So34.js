import { StyleType, SkillType, Attribute } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>冥府の魔針',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・奥義が変化。睡眠中でもチャージフォトン使用可能に' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 34,
            name: 'フルフル',
            skills: [
                {
                    name: '【専】うたた寝＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            text: `3ターンの間、自身が睡眠状態になり、ターン終了時にHPが20%回復する【睡眠状態中、効果が変化】`,
                            magnification: 0,
                            hit: 0
                        },
                        {
                            level: 2,
                            label: '睡眠',
                            text: `自身の覚醒ゲージを+2し、HPを15%回復する【睡眠状態でのみ使用可能】`,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                },
                {
                    name: '【専】カオティックレイ＋',
                    type: SkillType.Mysteries,
                    attribute: Attribute.Thunder,
                    text: '敵全体に攻撃力3.75倍の雷ダメージ【睡眠状態でのみ使用可能】',
                    levels: [
                        {
                            level: 1,
                            magnification: 3.75,
                            hit: 1
                        }
                    ],
                    increment: 0.05
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So34.js.map