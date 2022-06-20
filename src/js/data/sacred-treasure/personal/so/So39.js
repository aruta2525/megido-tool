import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞風薙の朱鎌',
        styleType: StyleType.Counter,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: '奥義が変化する。素早さが40%上昇する。覚醒に必要なゲージを-1する' },
        personal: {
            clockType: ClockType.So,
            megidoNo: 39,
            name: 'マルファス',
            skills: [
                {
                    name: '【専】コロッサスレイ+',
                    type: SkillType.Mysteries,
                    text: `敵横一列に攻撃力1.5倍の2連続ダメージ。さらに味方全体への攻撃を1回無効化し、レイズギフトを付与する<br>
              【レイズギフト効果】蘇生されたとき、自身のHPを40%回復する。さらに2ターンの間、自身の最大HPの40%以下のダメージを無効化する`,
                    levels: [
                        {
                            level: 1,
                            magnification: 1.5,
                            hit: 2
                        }
                    ],
                    increment: 0.025
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=So39.js.map