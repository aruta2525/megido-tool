import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 24,
        id: 1,
        name: 'ミノソン',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 9084,
        offense: 1077,
        defense: 482,
        speed: 404,
        ability: {
            name: 'カジノの女王',
            text: '自身に万雷の加護の地形があるとき、全ての状態異常耐性が100%上昇する'
        },
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
                name: 'ジャックポットレイ＋',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: 'ランダムな敵単体にかばう効果を無視する攻撃力0.9倍の雷ダメージ 2ターンの間、0.75倍継続ダメージの帯電地形にする。この行動を2回から5回ランダムな回数で行う',
                levels: [
                    {
                        level: 1,
                        label: '2回',
                        magnification: 0.9,
                        hit: 2
                    },
                    {
                        level: 2,
                        label: '3回',
                        magnification: 0.9,
                        hit: 3
                    },
                    {
                        level: 3,
                        label: '4回',
                        magnification: 0.9,
                        hit: 4
                    },
                    {
                        level: 4,
                        label: '5回',
                        magnification: 0.9,
                        hit: 5
                    }
                ]
            },
            {
                name: 'フィーバータイム！＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、味方全体の素早さを30%上昇。万雷の加護の地形にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ノー・モア・ベット＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力5.25倍の雷ダメージさらに味方横一列にスキルフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 5.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin24.js.map