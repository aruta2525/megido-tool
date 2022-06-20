import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>冥府の箒',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル、奥義が変化。チャージフォトン使用時、味方編成をネクロ状態にする' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 59,
            name: 'オリアス',
            skills: [
                {
                    name: '【専】変化の魔法＋',
                    type: SkillType.Skill,
                    text: '2ターンの間、敵単体を60%の確率で、ねずみ化する。さらに80%の確率で、スキルフォトンを劣化させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                },
                {
                    name: '【専】ヘイルキャノン＋',
                    type: SkillType.Mysteries,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            magnification: 4.25,
                            hit: 1,
                            text: '敵単体に攻撃力4.25倍のダメージ。さらに2ターンの間、敵を凍結状態にする'
                        },
                        {
                            level: 1,
                            label: 'ネクロ',
                            magnification: 4.25,
                            hit: 1,
                            text: 'ソウルを4つ消費し、敵単体に攻撃力4.25倍のダメージ。2ターンの間、敵を凍結状態にする。さらに味方全体を戦闘不能時にHP25%で蘇生する状態にする'
                        }
                    ],
                    increment: 0.05
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So59.js.map