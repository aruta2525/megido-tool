import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>黎明の御杖',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '覚醒スキル・奥義が変化' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 69,
            name: 'デカラビア',
            skills: [
                {
                    name: '【専】ブリザード＋',
                    type: SkillType.AwakeningSkill,
                    text: '敵横一列に攻撃力1.5倍のダメージ。2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる。さらに60%の確率で、2ターンの間、敵を凍結状態にする',
                    levels: [
                        {
                            level: 1,
                            magnification: 1.5,
                            hit: 1
                        }
                    ]
                },
                {
                    name: '【専】トランスジャミング＋',
                    type: SkillType.Mysteries,
                    text: '敵全体の覚醒ゲージを-2し、2ターンの間、素早さを30%低下させる。さらに覚醒ゲージの増加を無効化する（1回）',
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
//# sourceMappingURL=So69.js.map