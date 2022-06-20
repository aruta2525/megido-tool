import { StyleType, SkillType } from '../../../../enum/Megido';
import { SacredTreasureRank as Rank } from '../../../../enum/SacredTreasure';
import { SacredTreasureSize as Size } from '../../../../enum/SacredTreasure';
import { GenealogyType as Type } from '../../../../enum/SacredTreasure';
import { ClockType } from '../../../../enum/Megido';
const sacredTreasureList = [
    {
        name: '＜剛＞暴牛の特攻盾',
        styleType: StyleType.Burst,
        rank: Rank.Gold,
        size: Size.Small,
        hp: 0,
        offense: 0,
        defense: 0,
        speed: 0,
        type: Type.None,
        ability: { name: '', text: 'スキル、奥義が変化する' },
        personal: {
            clockType: ClockType.Shin,
            megidoNo: 27,
            name: 'マルチネ',
            skills: [
                {
                    name: '【専】バーニアダンス＋',
                    type: SkillType.Skill,
                    levels: [
                        {
                            level: 0,
                            label: 'Ch0',
                            magnification: 1.5,
                            hit: 1,
                            text: '敵単体に攻撃力1.5倍のダメージ。チェイン数に応じて倍率と効果が変化'
                        },
                        {
                            level: 1,
                            label: 'Ch1',
                            magnification: 2.5,
                            hit: 1,
                            text: '敵単体に攻撃力2.5倍のダメージ。さらに90%の確率で積まれているフォトンを1つ破壊する。自身にチェイン'
                        },
                        {
                            level: 2,
                            label: 'Ch2',
                            magnification: 3.5,
                            hit: 1,
                            text: '	敵単体に攻撃力3.5倍のダメージ。さらに90%の確率で積まれているフォトンを1つ破壊する'
                        }
                    ]
                },
                {
                    name: '【専】祖弐苦武羽霧＋',
                    type: SkillType.Mysteries,
                    levels: [
                        {
                            level: 0,
                            label: 'Ch0',
                            magnification: 2,
                            hit: 1,
                            text: '敵横一列攻撃力2倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。自身にチェイン。チェイン数に応じて倍率変化'
                        },
                        {
                            level: 1,
                            label: 'Ch1',
                            magnification: 2.25,
                            hit: 1,
                            text: '敵横一列攻撃力2.25倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。自身にチェイン。チェイン数に応じて倍率変化'
                        },
                        {
                            level: 2,
                            label: 'Ch2',
                            magnification: 2.75,
                            hit: 1,
                            text: '敵横一列攻撃力2倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。自身にチェイン。チェイン数に応じて倍率変化'
                        },
                        {
                            level: 3,
                            label: 'Ch3',
                            magnification: 3.25,
                            hit: 1,
                            text: '敵横一列攻撃力3.25倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。自身にチェイン。チェイン数に応じて倍率変化'
                        },
                        {
                            level: 4,
                            label: 'Ch4',
                            magnification: 4,
                            hit: 1,
                            text: '敵横一列攻撃力4倍ダメージ。2ターンの間突風地形効果で0.75倍継続ダメージを与え火に弱くする。自身にチェイン'
                        }
                    ],
                    increment: 0.05
                }
            ]
        }
    }
];
export default sacredTreasureList;
//# sourceMappingURL=Shin27.js.map