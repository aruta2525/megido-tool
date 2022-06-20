import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>白薔薇の宝剣',
        styleType: StyleType.Rush,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・覚醒スキルが変化。覚醒ゲージを-2する' },
        personal: {
            clockType: ClockType.Shin,
            megidoNo: 51,
            name: 'プルフラス',
            skills: [
                {
                    name: '【専】ラピエル・フルーリ＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 1,
                            magnification: 1,
                            hit: 1,
                            text: '自身の点穴を+15し、敵単体に攻撃力1倍のダメージ【使用するごとに点穴増加量が変化】'
                        },
                        {
                            level: 2,
                            magnification: 1,
                            hit: 1,
                            text: '	自身の点穴を+30し、敵単体に攻撃力1倍のダメージ【使用するごとに点穴増加量が変化】'
                        },
                        {
                            level: 3,
                            magnification: 1,
                            hit: 1,
                            text: '自身の点穴を+45し、敵単体に攻撃力1倍のダメージ【使用するごとに点穴増加量が変化】'
                        },
                        {
                            level: 4,
                            magnification: 1,
                            hit: 1,
                            text: '自身の点穴を+60し、敵単体に攻撃力1倍のダメージ'
                        }
                    ]
                },
                {
                    name: '【専】クゥ・デグラース＋',
                    type: SkillType.AwakeningSkill,
                    text: '敵単体に攻撃力2.25倍のダメージ。さらに自身の点穴を+30し、スキルフォトンを1つ追加する',
                    levels: [
                        {
                            level: 1,
                            magnification: 2.25,
                            hit: 1
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Shin51.js.map