import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 6,
        id: 1,
        name: 'アラストール',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 9208,
        offense: 776,
        defense: 424,
        speed: 627,
        ability: { name: '胡蝶之夢', text: '毎ターン終了時、覚醒ゲージが+1される' },
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
                name: '天誅アレグロ＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、攻撃力を20%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '贖罪のシルフィード＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.75倍のダメージ。さらに80%の確率で、2ターンの間、敵をめまい状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: '極刑デッドエンド＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.5倍のダメージ。さらに2ターンの間、味方前列のスキルを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 6,
        id: 2,
        name: 'アラストール',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 8231,
        offense: 909,
        defense: 514,
        speed: 491,
        ability: { name: 'バタフライエフェクト', text: '毎ターン終了時、覚醒ゲージが+1される' },
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
                name: '死のパピリオー＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: 'Ch0',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、敵横一列を60%の確率で暗闇状態にし、90%の確率で攻撃力を10%低下させる。チェイン中、味方単体にチェイン。チェイン数に応じて効果が変化'
                    },
                    {
                        level: 2,
                        label: 'Ch1',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、敵横一列を70%の確率で暗闇状態にし、90%の確率で攻撃力を20%低下させる。チェイン中、味方単体にチェイン。チェイン数に応じて効果が変化'
                    },
                    {
                        level: 3,
                        label: 'Ch2',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、敵横一列を80%の確率で暗闇状態にし、90%の確率で攻撃力を30%低下させる。チェイン中、味方単体にチェイン'
                    }
                ]
            },
            {
                name: '甘美なる処刑＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力1倍のダメージ。さらに2ターンの間、アタックフォトンとスキルフォトンを劣化させる。チェイン中、味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '罪と罰＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: 'Ch0',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵横一列に攻撃力2.25倍のダメージ。2ターンの間対象がフォトンを使用する度、浸食の地形効果で1.75倍のダメージ。味方単体にチェイン。チェイン数に応じてターン数変化'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵横一列に攻撃力2.25倍のダメージ。3ターンの間対象がフォトンを使用する度、浸食の地形効果で1.75倍のダメージ。味方単体にチェイン。チェイン数に応じてターン数変化'
                    },
                    {
                        level: 1,
                        label: 'Ch2',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵横一列に攻撃力2.25倍のダメージ。4ターンの間対象がフォトンを使用する度、浸食の地形効果で1.75倍のダメージ。味方単体にチェイン'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin06.js.map