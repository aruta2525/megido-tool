import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>獅子王の剣',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキルが変化。攻撃力が20%上昇する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 22,
            name: 'イポス',
            skills: [
                {
                    name: '【専】追撃態勢＋',
                    type: SkillType.Skill,
                    text: '2ターンの間、自身を遊撃状態にし、攻撃力を40%上昇させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So22.js.map