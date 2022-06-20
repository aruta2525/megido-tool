import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞水霊の鉾',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキルが変化する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 42,
            name: 'ウェパル',
            skills: [
                {
                    name: '【専】ウェイブライダー＋',
                    type: SkillType.Skill,
                    text: '敵単体に攻撃力1.25倍のダメージ。さらに自身にアタックフォトンを1つ追加する',
                    levels: [
                        {
                            level: 1,
                            magnification: 1.25,
                            hit: 1
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So42.js.map