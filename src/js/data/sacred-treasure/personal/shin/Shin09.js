import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞邪視の掌',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '奥義が変化する。戦闘開始時、2ターンの間両隣の女性を魅了状態にする' },
        personal: {
            clockType: ClockType.Shin,
            megidoNo: 9,
            name: 'インキュバス',
            skills: [
                {
                    name: '【専】ドゥルケソムニウム＋',
                    type: SkillType.Mysteries,
                    text: '敵横一列に攻撃力2.25倍のダメージ。敵味方の女性1体につき倍率が0.35上昇、対象の敵女性を2ターンの間、悪夢状態にし、自身の両隣の女性を魅了状態にする',
                    levels: [
                        {
                            level: 0,
                            label: '女性0体',
                            magnification: 2.25,
                            hit: 1
                        },
                        {
                            level: 1,
                            label: '女性1体',
                            magnification: 2.6,
                            hit: 1
                        },
                        {
                            level: 2,
                            label: '女性2体',
                            magnification: 2.95,
                            hit: 1
                        },
                        {
                            level: 3,
                            label: '女性3体',
                            magnification: 3.3,
                            hit: 1
                        },
                        {
                            level: 4,
                            label: '女性4体',
                            magnification: 3.65,
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
//# sourceMappingURL=Shin09.js.map