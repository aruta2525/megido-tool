import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞軽薄なナイフ',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル、覚醒スキル、奥義が変化する。攻撃時、敵を虚弱状態にする（3ターン） 自身状態異常付与時、覚醒ゲージ+1' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 51,
            name: 'バラム',
            skills: [
                {
                    name: '【専】バインドダガー＋',
                    type: SkillType.Skill,
                    text: '敵単体に攻撃力0.75倍の2連続ダメージ。対象が状態異常の場合それぞれ80%の確率で、2ターンの間感電、防御力を30%低下させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 0.75,
                            hit: 2
                        }
                    ]
                },
                {
                    name: '【専】非戦の調停＋',
                    type: SkillType.AwakeningSkill,
                    text: '敵全体を束縛状態と虚弱状態にする。【束縛:2ターン/虚弱:3ターン】対象が状態異常の場合それぞれ80%の確率で、2ターンの間めまい、攻撃力を30%低下させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                },
                {
                    name: '【専】ディザスターボム＋',
                    type: SkillType.Mysteries,
                    text: '敵横一列に攻撃力3倍のダメージ。さらに80%の確率で、2ターンの間、敵の素早さを60%低下させ、対象が状態異常の場合攻撃力、防御力を60%低下させる',
                    levels: [
                        {
                            level: 1,
                            magnification: 3,
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
//# sourceMappingURL=So51.js.map