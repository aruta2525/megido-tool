import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So66 = [
    {
        clockType: ClockType.So,
        no: 66,
        id: 1,
        name: 'キマリス',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 4270,
        offense: 1159,
        defense: 405,
        speed: 673,
        ability: { name: 'キマリスは強いのだ！', text: '死者系のモンスターに2倍のダメージ' },
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
                name: 'アマゾネスの槍＋',
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
                name: '微塵粉灰＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに自身にスキルフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '破壊衝動＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方全体のスキルを強化し、攻撃力を20%上昇させる',
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
    },
    {
        clockType: ClockType.So,
        no: 66,
        id: 2,
        name: 'キマリス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 6698,
        offense: 1111,
        defense: 419,
        speed: 627,
        ability: { name: 'キマリス・エ・ゼレ！', text: '味方が一度でも戦闘不能になっているとき、自身の攻撃力が40%上昇する' },
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
                name: '追想の槍＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1,
                        text: '敵単体に攻撃力1.5倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 2.5,
                        hit: 1,
                        text: '敵単体に攻撃力2.5倍のダメージ【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 3,
                        hit: 1,
                        text: '敵単体に攻撃力3倍のダメージ'
                    }
                ]
            },
            {
                name: '星下ろしの儀＋',
                type: SkillType.AwakeningSkill,
                text: `味方全体にデスギフトを付与し、味方編成をネクロ状態にする<br>
              【デスギフト効果】戦闘不能時、敵全体に攻撃力1倍のダメージ`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '渾然撃砕＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 4.25,
                        hit: 1,
                        text: '敵単体に攻撃力4.25倍の防御無視ダメージ'
                    },
                    {
                        level: 1,
                        label: 'ネクロ',
                        magnification: 7.25,
                        hit: 1,
                        text: 'ソウルを2つ消費し、敵単体に攻撃力7.25倍の防御無視ダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So66.js.map