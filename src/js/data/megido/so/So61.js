import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So61 = [
    {
        clockType: ClockType.So,
        no: 61,
        id: 1,
        name: 'ザガン',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8492,
        offense: 975,
        defense: 472,
        speed: 406,
        ability: { name: 'パソドブレ', text: '15%の確率で攻撃を無効化する' },
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
                name: 'ムレータ＋',
                type: SkillType.Skill,
                text: '2ターンの間、すべての単体攻撃を受け持ち最大HPの25%以下のダメージを無効化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'エスパーダ＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、すべての単体攻撃を受け持ち最大HPの25%以下のダメージを無効化し、攻撃を受けたとき、反撃する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '止むなき猛進＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 3.75,
                        hit: 1,
                        text: '敵単体に攻撃力3.75倍のダメージ。さらに2ターンの間、敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 4.75,
                        hit: 1,
                        text: '敵単体に攻撃力4.75倍のダメージ。さらに2ターンの間、敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 5.75,
                        hit: 1,
                        text: '敵単体に攻撃力5.75倍のダメージ。さらに2ターンの間、敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 6.75,
                        hit: 1,
                        text: '敵単体に攻撃力6.75倍のダメージ。さらに2ターンの間、敵をめまい状態にする'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So61.js.map