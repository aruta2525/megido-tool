import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞シルバーエペ',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性、奥義が変化する。HPが10%上昇する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 28,
            name: 'ベリト',
            ability: {
                name: '恥かかすなよ！',
                text: 'HPが50%以下のとき、攻撃力が50%上昇する'
            },
            skills: [
                {
                    name: '【専】ワールドイズマイン＋',
                    type: SkillType.Mysteries,
                    text: '敵単体に攻撃力4.75倍のダメージ。ただし反動で、自身が最大HPの50%ダメージを受ける【自身のHPが50%以下のとき防御無視ダメージに変化】',
                    levels: [
                        {
                            level: 1,
                            magnification: 4.75,
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
//# sourceMappingURL=So28.js.map