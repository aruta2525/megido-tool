import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So20 = [
    {
        clockType: ClockType.So,
        no: 20,
        id: 1,
        name: 'プルソン',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 8688,
        offense: 975,
        defense: 412,
        speed: 475,
        ability: { name: '俺はまだやれる！', text: '致死ダメージを受けたとき、20%の確率で踏みとどまる' },
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
                name: 'グランドドライバー＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を暗闇状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'オーラテンペスト＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.5倍のダメージ。さらに70%の確率で、覚醒ゲージを-2する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '大地を沈めし鉄槌＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3.25倍のダメージ。さらに2ターンの間、敵をめまい状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 3.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 20,
        id: 2,
        name: 'プルソン',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7094,
        offense: 1225,
        defense: 514,
        speed: 392,
        ability: { name: '不屈の義勇', text: '致死ダメージを受けたとき、生存している味方が多いほど、高確率で踏みとどまる（最大40％）' },
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
                name: '光槍衝＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに2ターンの間、自身の素早さを15％上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '勇輝の円陣+',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、自身の攻撃力を40％上昇させ、勇輝の加護の地形にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ブレイブストライク+',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3.25倍のダメージ。さらに攻撃対象より自身の強化効果の数が多いとき、数に応じてダメージが変化する<br>【3個差：3倍　4個差：4倍　5個差：5倍】',
                levels: [
                    {
                        level: 1,
                        magnification: 3.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So20.js.map