import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>人工蛭砲',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '特性・覚醒スキル・奥義が変化' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 18,
            name: 'バティン',
            ability: {
                name: 'お注射の時間です',
                text: '戦闘開始時、3ターンの間、ターン終了時に味方全体のHPが15%回復する効果を付与する'
            },
            skills: [
                {
                    name: '【専】ニューロトキシン＋',
                    type: SkillType.AwakeningSkill,
                    text: '敵単体に攻撃力3倍のダメージ。さらに2ターンの間、敵を毒状態にする。敵が毒状態の場合、ダメージが2倍になる',
                    levels: [
                        {
                            level: 1,
                            magnification: 2,
                            hit: 1
                        }
                    ]
                },
                {
                    name: '【専】ポレンヒーリング＋',
                    type: SkillType.Mysteries,
                    levels: [
                        {
                            level: 0,
                            label: '0人',
                            magnification: 0,
                            hit: 0,
                            text: '味方横一列のHPを40%回復させる【HP80%以上の味方の数に応じて効果が変化】'
                        },
                        {
                            level: 1,
                            label: '1人',
                            magnification: 0,
                            hit: 0,
                            text: '【HP80%以上1人以上】味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を20%上昇させ'
                        },
                        {
                            level: 2,
                            label: '2人',
                            magnification: 0,
                            hit: 0,
                            text: '【HP80%以上2人以上】味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を30%上昇させる'
                        },
                        {
                            level: 3,
                            label: '3人',
                            magnification: 0,
                            hit: 0,
                            text: '【HP80%以上3人以上】味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を40%上昇させる'
                        },
                        {
                            level: 4,
                            label: '4人',
                            magnification: 0,
                            hit: 0,
                            text: '【HP80%以上4人以上】味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を50%上昇させる'
                        },
                        {
                            level: 5,
                            label: '5人',
                            magnification: 0,
                            hit: 0,
                            text: '【HP80%以上5人以上】味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を60%上昇させる'
                        }
                    ],
                    increment: 0
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So18.js.map