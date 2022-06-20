import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞翠玉の双槍',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '覚醒スキル、奥義が変化する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 12,
            name: 'シトリー',
            skills: [
                {
                    name: '【専】水落魚竜ノ夜＋',
                    type: SkillType.AwakeningSkill,
                    text: '自身の覚醒ゲージを全て消費し、敵単体に5.5倍で7ターン後に弾けるハイドロボム重を付与し、付与されているハイドロボムのダメージを40%上昇させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                },
                {
                    name: '【専】ハイドロブラスト＋',
                    type: SkillType.Mysteries,
                    text: '敵単体に攻撃力2倍のダメージ。さらに敵にHボムが付与されているとき、ダメージが3倍になる',
                    levels: [
                        {
                            level: 1,
                            magnification: 2,
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
//# sourceMappingURL=So12.js.map