import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞レイメーカー',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性、奥義が変化する。アタック時、自身にチェインする' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 35,
            name: 'マルコシアス',
            skills: [
                {
                    name: '【専】スターバースト＋',
                    type: SkillType.Mysteries,
                    levels: [
                        {
                            level: 0,
                            label: 'Ch0',
                            magnification: 5,
                            hit: 1,
                            text: '敵単体に攻撃力5倍のダメージ。チェイン数に応じて倍率が変化。自身にチェイン'
                        },
                        {
                            level: 1,
                            label: 'Ch1',
                            magnification: 5.5,
                            hit: 1,
                            text: '敵単体に攻撃力5.5倍のダメージ。チェイン数に応じて倍率が変化。自身にチェイン'
                        },
                        {
                            level: 2,
                            label: 'Ch2',
                            magnification: 6.5,
                            hit: 1,
                            text: '敵単体に攻撃力6.5倍のダメージ。チェイン数に応じて倍率が変化。自身にチェイン'
                        },
                        {
                            level: 3,
                            label: 'Ch3',
                            magnification: 8,
                            hit: 1,
                            text: '敵単体に攻撃力8倍のダメージ。チェイン数に応じて倍率が変化。自身にチェイン'
                        },
                        {
                            level: 4,
                            label: 'Ch4',
                            magnification: 12,
                            hit: 1,
                            text: '敵単体に攻撃力12倍のダメージ。チェイン数に応じて倍率が変化。自身にチェイン'
                        },
                        {
                            level: 5,
                            label: 'Ch5',
                            magnification: 15,
                            hit: 1,
                            text: '敵単体に攻撃力15倍のダメージ。自身にチェイン'
                        }
                    ],
                    increment: 0.05
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So35.js.map