import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 11,
        id: 1,
        name: 'コルソン',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8949,
        offense: 788,
        defense: 416,
        speed: 563,
        ability: { name: '魂無き軍団の王', text: '束縛状態の敵1人につき、自身の攻撃力が10%上昇する' },
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
                name: 'ヒミツのおまじない＋',
                type: SkillType.Skill,
                text: '2ターンの間、敵単体を束縛状態にし、対象が束縛状態の場合、80%の確率で呪い状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【ぬいぐるみ巨大化】みんなで突撃～＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.85倍のダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 1.85,
                        hit: 0
                    }
                ]
            },
            {
                name: '一緒にあそぼっ！＋',
                type: SkillType.AwakeningSkill,
                text: `敵単体に攻撃力2.5倍のダメージ さらに覚醒ゲージを全て消費し、ぬいぐるみ巨大化<br>
              [最大HP35%分のダメージ無効/スキル変化]`,
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '【ぬいぐるみ巨大化】コーちゃん怒った！＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力4倍のダメージ。ただし、反動で自身が最大HPの10%ダメージを受ける。敵が束縛状態の場合ダメージが1.5倍になる',
                levels: [
                    {
                        level: 1,
                        magnification: 4,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ストレイシープ＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1倍の4連続ダメージ。さらに80%の確率で2ターンの間、敵を混乱状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 4
                    }
                ],
                increment: 0.0125
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 11,
        id: 2,
        name: 'コルソン',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7104,
        offense: 986,
        defense: 480,
        speed: 502,
        ability: { name: '思いっきりいくよ！', text: 'おかえし状態中、点穴上限が+100される' },
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
                name: 'ヒミツのおまじない＋',
                type: SkillType.Skill,
                text: '自身の点穴を+15する。さらに3ターンの間、おねだり状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【おかえし状態時】やっつけちゃえ！＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の覚醒ゲージを+1する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.85,
                        hit: 0
                    }
                ]
            },
            {
                name: '元気になったよ！＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '満足度30未満',
                        magnification: 0,
                        hit: 0,
                        text: '1回行動できるおかえし状態になる。さらに自身の点穴を+20する'
                    },
                    {
                        level: 2,
                        label: '満足度30以上',
                        magnification: 0,
                        hit: 0,
                        text: '2回行動できるおかえし状態になる。さらに自身の点穴を+60する'
                    },
                    {
                        level: 3,
                        label: '満足度60以上',
                        magnification: 0,
                        hit: 0,
                        text: '3回行動できるおかえし状態になる。さらに自身の点穴を+100する'
                    }
                ]
            },
            {
                name: '【おかえし状態時】肉球ナックル＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 4,
                        hit: 1,
                        text: '敵横一列に攻撃力1.5倍のダメージ。さらに積まれているフォトンを1つ破壊する。自身の覚醒ゲージを+1する【使用するごとに効果が変化する】'
                    },
                    {
                        level: 2,
                        magnification: 4,
                        hit: 1,
                        text: '敵横一列に攻撃力1.5倍のダメージ。さらに2ターンの間、めまい状態にする。自身の覚醒ゲージを+1する'
                    }
                ]
            },
            {
                name: '最恐のぬいぐるみ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '満足度30未満',
                        magnification: 3,
                        hit: 1,
                        text: '敵単体に攻撃力3倍のダメージ'
                    },
                    {
                        level: 2,
                        label: '満足度30以上',
                        magnification: 3.5,
                        hit: 1,
                        text: '敵単体に攻撃力3.5倍のダメージ'
                    },
                    {
                        level: 3,
                        label: '満足度60以上',
                        magnification: 4,
                        hit: 1,
                        text: '敵単体に攻撃力4倍のダメージ'
                    }
                ],
                increment: 0.05
            },
            {
                name: '【おかえし状態時】最恐のぬいぐるみ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '満足度30未満',
                        magnification: 3,
                        hit: 1,
                        text: '敵単体に無敵と回数バリアの効果を無視する攻撃力3倍のダメージ'
                    },
                    {
                        level: 2,
                        label: '満足度30以上',
                        magnification: 3.5,
                        hit: 1,
                        text: '敵単体に無敵と回数バリアの効果を無視する攻撃力3.5倍のダメージ'
                    },
                    {
                        level: 3,
                        label: '満足度60以上',
                        magnification: 4,
                        hit: 1,
                        text: '敵単体に無敵と回数バリアの効果を無視する攻撃力4倍のダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin11.js.map