import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 41,
        id: 1,
        name: 'アマイモン',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 5997,
        offense: 1354,
        defense: 429,
        speed: 503,
        ability: { name: '死を紡ぐ策王', text: '攻撃を受けたとき、10%の確率で呪い攻撃で反撃する' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '妄執ノ太刀＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに2ターンの間、敵を束縛状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '轟竜刃＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、自身と攻撃対象の攻撃力を60%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ノワールアヴェルス＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3.5倍のダメージ。さらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.5上昇する',
                levels: [
                    {
                        level: 0,
                        label: '状態異常0種',
                        magnification: 3.5,
                        hit: 1
                    },
                    {
                        level: 1,
                        label: '1種',
                        magnification: 4,
                        hit: 1
                    },
                    {
                        level: 2,
                        label: '2種',
                        magnification: 4.5,
                        hit: 1
                    },
                    {
                        level: 3,
                        label: '3種',
                        magnification: 5,
                        hit: 1
                    },
                    {
                        level: 4,
                        label: '4種',
                        magnification: 5.5,
                        hit: 1
                    },
                    {
                        level: 5,
                        label: '5種',
                        magnification: 6,
                        hit: 1
                    },
                    {
                        level: 6,
                        label: '6種',
                        magnification: 6.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 41,
        id: 2,
        name: 'アマイモン',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6733,
        offense: 890,
        defense: 538,
        speed: 515,
        ability: { name: '知将の威光', text: 'バレットアーツ中、受けるダメージを20%軽減する' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '魔剣の融合＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
                  【バレット効果】80%の確率でフォトンを1つ破壊＋束縛/呪い/攻撃力20%低下/防御力20%低下のいずれかを1つ付与(未付与のものを優先/持続2ターン)`
                    }
                ]
            },
            {
                name: '夜叉突き＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.5,
                        hit: 1,
                        text: `敵単体に攻撃力1.5倍のダメージさらに、バレットを2個作成する<br>
                  【バレット効果】弱体、状態異常が付与されている敵に対して、効果1種類につき15%のダメージ上昇`
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.75,
                        hit: 1,
                        text: `バレットを1個消費し、敵単体に攻撃力1.75倍のダメージさらに、バレットを2個作成する<br>
                  【バレット効果】弱体、状態異常が付与されている敵に対して、効果1種類につき15%のダメージ上昇`
                    }
                ]
            },
            {
                name: '軍神の咆哮＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方単体へのダメージを40%軽減し攻撃力を40%上昇させる',
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
];
export default megido;
//# sourceMappingURL=Shin41.js.map