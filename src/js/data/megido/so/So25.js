import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So25 = [
    {
        clockType: ClockType.So,
        no: 25,
        id: 1,
        name: 'グラシャラボラス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7290,
        offense: 1170,
        defense: 416,
        speed: 494,
        ability: { name: '器物破損', text: '物体系のモンスターに2倍のダメージ' },
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
                name: 'ぶん回し＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1.5倍のダメージ。ただし反動で、自身が最大HPの5%ダメージを受ける',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'グレートぶん回し＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力3.5倍の防御無視ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 3.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ピリオドの向こうへ＋',
                type: SkillType.Mysteries,
                text: '敵全体に攻撃力3倍のダメージ。ただし反動で、自身が戦闘不能になる',
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
    },
    {
        clockType: ClockType.So,
        no: 25,
        id: 2,
        name: 'グラシャラボラス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7356,
        offense: 1213,
        defense: 467,
        speed: 440,
        ability: { name: 'まだまだこっから！', text: 'HP10%以下のとき、自身の攻撃力が60%上昇する' },
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
                name: 'グレートスパーク＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1.15倍の雷ダメージ。ただし反動で、自身が最大HPの25%ダメージを受ける',
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        magnification: 1.15,
                        hit: 1
                    }
                ]
            },
            {
                name: 'バチバチ伝説＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の雷ダメージを35%上昇させる'
                    },
                    {
                        level: 2,
                        label: 'HP10%以下',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身のアタックを強化し、雷ダメージを75%上昇させる'
                    }
                ]
            },
            {
                name: 'デスダンス＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 4.25,
                        hit: 1,
                        text: '敵単体に攻撃力4.25倍の雷ダメージ。さらに積まれているフォトンを1つ破壊する'
                    },
                    {
                        level: 2,
                        label: 'HP10%以下',
                        magnification: 9.25,
                        hit: 1,
                        text: '敵単体に攻撃力9.25倍の雷ダメージ。さらに積まれているフォトンを1つ破壊する'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So25.js.map