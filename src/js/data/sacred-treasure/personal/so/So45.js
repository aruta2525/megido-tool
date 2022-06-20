import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>洗礼の服',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキルが変化' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 45,
            name: 'ヴィネ',
            skills: [
                {
                    name: '【専】聖女の祈り＋',
                    type: SkillType.Skill,
                    text: '味方横一列のHPを20%回復させる。さらにHPが60%以上の味方に対して、2ターンの間、アタックフォトンからのダメージを30%軽減する',
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
//# sourceMappingURL=So45.js.map