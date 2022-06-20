import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '<剛>闘争の戦斧',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル・覚醒スキルが変化。初期覚醒+2。遅延行動中、ダメージを15%軽減する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 2,
            name: 'アガレス',
            skills: [
                {
                    name: '【専】ダブルトマホーク＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 1,
                            label: '通常',
                            magnification: 0.7,
                            hit: 2,
                            text: '敵単体に攻撃力0.7倍の防御無視2連続ダメージ'
                        },
                        {
                            level: 1,
                            label: 'Bアーツ',
                            magnification: 0.7,
                            hit: 2,
                            text: 'バレットを消費し、敵単体に攻撃力0.7倍の防御無視2連続ダメージ。さらに50%の確率で自身にスキルフォトンを1つ追加する'
                        }
                    ]
                },
                {
                    name: '【専】モータルハチェット＋',
                    type: SkillType.AwakeningSkill,
                    levels: [
                        {
                            level: 1,
                            magnification: 2.15,
                            hit: 2,
                            text: `1ターンの間、すべての単体攻撃を受け持つ。1ターン後、敵単体に攻撃力2.15倍の2連続ダメージ。さらに3ターンの間、味方全体の攻撃力を30%上昇させる<br>
              ※遅延行動時、直前ターンの自身が敵から受けた攻撃回数に応じて、味方全体への攻撃力上昇量が変化する（連続ダメージは1回としてカウントする）<br>
              ※攻撃力上昇量【1回】32%上昇【2回】34%上昇/【3回】36%上昇【4回】38%上昇/【5回】40%上昇`
                        }
                    ]
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So02.js.map