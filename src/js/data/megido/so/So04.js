import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So04 = [
    {
        clockType: ClockType.So,
        no: 4,
        id: 1,
        name: 'ガミジン',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8729,
        offense: 1193,
        defense: 418,
        speed: 417,
        ability: { name: '強襲ヒット', text: '遠距離攻撃を受けたとき、15%の確率で攻撃を無効化し、反撃する' },
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
                name: 'スマッシュ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.15,
                        hit: 1,
                        text: '敵単体に攻撃力1.15倍のダメージ。さらに80%の確率で、敵を毒状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵単体に攻撃力1.35倍のダメージ。さらに80%の確率で、敵を毒状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 1.55,
                        hit: 1,
                        text: '敵単体に攻撃力1.55倍のダメージ。さらに80%の確率で、敵を毒状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1,
                        text: '敵単体に攻撃力1.75倍のダメージ。さらに80%の確率で、敵を毒状態にする'
                    }
                ]
            },
            {
                name: 'フルスイング＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力3倍の防御無視ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ブラッドネメシス＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.15倍の4連続ダメージ。さらに80%の確率で、2ターンの間、敵の攻撃力を25%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.15,
                        hit: 4
                    }
                ],
                increment: 0.0125
            }
        ]
    }
];
//# sourceMappingURL=So04.js.map