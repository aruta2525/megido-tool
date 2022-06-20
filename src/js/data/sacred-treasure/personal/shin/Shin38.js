import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>時限加速杖',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・奥義が変化' },
        personal: {
            clockType: ClockType.Shin,
            megidoNo: 38,
            name: 'アガリアレプト',
            skills: [
                {
                    name: '【専】プリズムノヴァ＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 1,
                            magnification: 1.25,
                            hit: 2,
                            text: '敵単体に攻撃力1.25倍の2連続ダメージ。さらに5%の確率で自身にアタックフォトンを1つ追加する【使用するごとにスキルLv上昇】'
                        },
                        {
                            level: 2,
                            magnification: 1.3,
                            hit: 2,
                            text: '敵単体に攻撃力1.3倍の2連続ダメージ。さらに10%の確率で自身にアタックフォトンを1つ追加する【使用するごとにスキルLv上昇】'
                        },
                        {
                            level: 3,
                            magnification: 1.35,
                            hit: 2,
                            text: '敵単体に攻撃力1.35倍の2連続ダメージ。さらに15%の確率で自身にアタックフォトンを1つ追加する【使用するごとにスキルLv上昇】'
                        },
                        {
                            level: 4,
                            magnification: 1.4,
                            hit: 2,
                            text: '敵単体に攻撃力1.4倍の2連続ダメージ。さらに20%の確率で自身にアタックフォトンを1つ追加する【使用するごとにスキルLv上昇】'
                        },
                        {
                            level: 5,
                            magnification: 1.45,
                            hit: 2,
                            text: '敵単体に攻撃力1.45倍の2連続ダメージ。さらに25%の確率で自身にアタックフォトンを1つ追加する【使用するごとにスキルLv上昇】'
                        },
                        {
                            level: 6,
                            magnification: 1.5,
                            hit: 2,
                            text: '敵単体に攻撃力1.5倍の2連続ダメージ。さらに30%の確率で自身にアタックフォトンを1つ追加する【自身オーラ10個以上でスキルLv上昇】'
                        },
                        {
                            level: 7,
                            magnification: 2,
                            hit: 2,
                            text: '自身のオーラを5個消費し、敵単体に攻撃力2倍の2連続ダメージ'
                        }
                    ]
                },
                {
                    name: '【専】タキオンステップ＋',
                    type: SkillType.Mysteries,
                    text: '3ターンの間、自身のダメージを15%軽減し、励起状態にする。さらに自身をクロノ状態にし種族に【物体】か【不定形】を持つオーブを装備時、自身に連撃のオーラを5個付与する',
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ],
                    increment: 0
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Shin38.js.map