import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>蛇竜の棍',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・覚醒スキルが変化' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 30,
            name: 'フォルネウス',
            skills: [
                {
                    name: '【専】偽りの加護＋',
                    type: SkillType.Skill,
                    text: `2ターンの間、味方単体へのスキルフォトンからのダメージを60%軽減する。種族に【精霊】か【飛行】を持つオーブを装備中の自身と対象に友愛のオーラを2個付与<br>
          友愛のオーラ：1個につき攻撃力3%上昇・自然回復3%付与`,
                    levels: [
                        {
                            level: 1,
                            magnification: 0,
                            hit: 0
                        }
                    ]
                },
                {
                    name: '【専】一時の虚脱＋',
                    type: SkillType.AwakeningSkill,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            magnification: 2.5,
                            hit: 1,
                            text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する'
                        },
                        {
                            level: 2,
                            label: 'オーラ',
                            magnification: 3,
                            hit: 1,
                            text: '自身のオーラを2個消費し、敵単体に攻撃力3倍のダメージ。さらに2ターンの間、味方横一列に積めるフォトンの量を+1する'
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So30.js.map