import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So51 = [
    {
        clockType: ClockType.So,
        no: 51,
        id: 1,
        name: 'バラム',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 5846,
        offense: 838,
        defense: 594,
        speed: 676,
        ability: { name: '観察者', text: '奥義使用時、50%の確率で覚醒ゲージの消費が0になる' },
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
                name: 'バインドダガー＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.75倍の2連続ダメージ。対象が束縛の場合80%の確率で、2ターンの間感電、80%の確率で防御力を30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: '【専】バインドダガー＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.75倍の2連続ダメージ。対象が状態異常の場合それぞれ80%の確率で、2ターンの間感電、防御力を30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: '非戦の調停＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体を束縛状態にする。対象が束縛の場合80%の確率で、2ターンの間めまい、80%の確率で攻撃力を30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【専】非戦の調停＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体を束縛状態と虚弱状態にする。【束縛:2ターン/虚弱:3ターン】対象が状態異常の場合それぞれ80%の確率で、2ターンの間めまい、攻撃力を30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ディザスターボム＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力3倍のダメージ。さらに80%の確率で、2ターンの間、敵の素早さを60%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ],
                increment: 0.05
            },
            {
                name: '【専】ディザスターボム＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力3倍のダメージ。さらに80%の確率で、2ターンの間、敵の素早さを60%低下させ、対象が状態異常の場合攻撃力、防御力を60%低下させる',
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
    }
];
//# sourceMappingURL=So51.js.map