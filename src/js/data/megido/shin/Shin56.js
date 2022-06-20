import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 56,
        id: 1,
        name: 'バロール',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7283,
        offense: 1400,
        defense: 285,
        speed: 495,
        ability: {
            name: '	悪の流儀	',
            text: 'コロッセオ状態中、攻撃をうけたとき、攻撃力1.25倍で反撃する'
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
                name: '八寒の銀+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.6,
                        hit: 2,
                        text: '敵横一列に攻撃力0.6倍の2連続ダメージ'
                    },
                    {
                        level: 1,
                        label: 'コロッセオ',
                        magnification: 0.6,
                        hit: 2,
                        text: '敵横一列に攻撃力0.6倍の2連続ダメージ。さらに、敵に掛っている強化を解除する'
                    }
                ]
            },
            {
                name: '	無道四散+',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.65,
                        hit: 4,
                        text: `敵単体に攻撃力0.65倍の4連続ダメージ。さらに自身を特殊ブレイク待機状態にする`
                    },
                    {
                        level: 1,
                        label: 'ブレイク',
                        magnification: 0.75,
                        hit: 4,
                        text: `【特殊ブレイク：フォトンによる敵に対して効果を与える行動】敵単体に攻撃力0.75倍の4連続ダメージ。さらに積まれているフォトンを1つ奪取する`
                    }
                ]
            },
            {
                name: '仁刀修羅一斬+',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 3.25,
                        hit: 1,
                        text: '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）。さらに、敵単体に攻撃力3.25倍のダメージ【コロッセオ中、優勢なら効果が変化'
                    },
                    {
                        level: 1,
                        label: 'コロッセオ中かつ優勢',
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍のダメージさらに敵が覚醒状態のとき、ダメージが2倍になる'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin56.js.map