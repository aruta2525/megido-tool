import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So48 = [
    {
        clockType: ClockType.So,
        no: 48,
        id: 1,
        name: 'ハーゲンティ',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7382,
        offense: 968,
        defense: 418,
        speed: 628,
        ability: { name: '守銭奴', text: 'クエストでの獲得ゴルドが50%上昇する' },
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
                name: 'それちょうだいよぅ＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに45%の確率で、積まれているフォトンを1つ奪う',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ハニワの奇跡＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体に攻撃力1.35倍のダメージ。さらに50%の確率で、フォトンを1つ破壊【スキル使用時に100G消費する】',
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ハートオブゴールド＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、敵全体を暗闇状態にし、攻撃力を20%低下させる',
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
        no: 48,
        id: 2,
        name: 'ハーゲンティ',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7004,
        offense: 1199,
        defense: 454,
        speed: 494,
        ability: { name: 'この世はあたいの宝島', text: 'チェイン中、与えるステータス強化とステータス弱体の持続ターンを+1する' },
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
                name: '来て！フレンズ+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 0,
                        label: 'CH0',
                        magnification: 1,
                        hit: 1,
                        text: '敵単体に攻撃力1倍のダメージ。さらに80%の確率で、覚醒ゲージを-1する。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 1,
                        label: 'CH1',
                        magnification: 1.5,
                        hit: 1,
                        text: '敵単体に攻撃力1.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-2する。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 2,
                        label: 'CH2',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ。さらに80%の確率で、覚醒ゲージを-3する。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 3,
                        label: 'CH3',
                        magnification: 2.5,
                        hit: 1,
                        text: '敵単体に攻撃力2.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-4する。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 4,
                        label: 'CH4',
                        magnification: 3,
                        hit: 1,
                        text: '敵単体に攻撃力3倍のダメージ。さらに80%の確率で、覚醒ゲージを-5する。'
                    }
                ]
            },
            {
                name: '【専】来て！フレンズ+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 0,
                        label: 'CH0',
                        magnification: 1,
                        hit: 1,
                        text: '敵単体に攻撃力1倍のダメージ。さらに80%の確率で、覚醒ゲージを-1し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 1,
                        label: 'CH1',
                        magnification: 1.5,
                        hit: 1,
                        text: '敵単体に攻撃力1.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-2し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 2,
                        label: 'CH2',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ。さらに80%の確率で、覚醒ゲージを-3し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 3,
                        label: 'CH3',
                        magnification: 2.5,
                        hit: 1,
                        text: '敵単体に攻撃力2.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-4し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
                    },
                    {
                        level: 4,
                        label: 'CH4',
                        magnification: 3,
                        hit: 1,
                        text: '敵単体に攻撃力3倍のダメージ。さらに80%の確率で、覚醒ゲージを-5し、自身に加算する。味方単体にチェイン。'
                    }
                ]
            },
            {
                name: 'でっかくなれ〜+',
                type: SkillType.AwakeningSkill,
                text: '敵全体に攻撃力1.35倍のダメージさらに1ターンの間、敵の防御力を50%低下。チェイン中、味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: '色褪せない宝物！+',
                type: SkillType.Mysteries,
                text: '1ターンの間、味方全体の攻撃力を50%上昇させる。味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0
            },
            {
                name: '【専】色褪せない宝物！+',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方全体の攻撃力を50%上昇させる。味方単体にチェイン',
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
//# sourceMappingURL=So48.js.map