import { StyleType, SkillType, Attribute } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>金色の魔銃',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・覚醒スキルが変化。素早さが30%上昇' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 8,
            name: 'バルバトス',
            skills: [
                {
                    name: '【専】暴風のワルツ＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            magnification: 1.25,
                            hit: 1,
                            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身にチャージフォトンを1つ追加し、味方編成を協奏状態にする'
                        },
                        {
                            level: 1,
                            label: '大協奏',
                            magnification: 1.25,
                            hit: 1,
                            attribute: Attribute.Sound,
                            text: '敵単体に攻撃力1.25倍の響撃ダメージ。さらに自身にチャージフォトンを1つ追加する'
                        }
                    ]
                },
                {
                    name: '【専】妖精たちのダンス＋',
                    type: SkillType.AwakeningSkill,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            magnification: 0,
                            hit: 0,
                            text: '2ターンの間、味方横一列の攻撃力を25%上昇させる'
                        },
                        {
                            level: 1,
                            label: '大協奏',
                            magnification: 0,
                            hit: 0,
                            text: '2ターンの間、味方横一列の攻撃力を30%上昇させる。さらにHP60%以下の味方の人数に応じて対象のHPを回復する[1人:10%/2人:20%/3人以上:30%]'
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So08.js.map