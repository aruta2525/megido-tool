import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So39 = [
    {
        clockType: ClockType.So,
        no: 39,
        id: 1,
        name: 'マルファス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7461,
        offense: 981,
        defense: 504,
        speed: 499,
        ability: { name: '天駆ける者', text: '自身の攻撃力が15％上昇する' },
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
                name: 'キャプチャー+',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに45％の確率で、積まれているフォトンを1つ奪う',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'レナスリング+',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.75倍のダメージ。さらに80％の確率で、2ターンの間、防御力を60％低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: 'コロッサスレイ+',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.5倍の2連続ダメージ。さらに味方全体への攻撃を1回無効化する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 2
                    }
                ],
                increment: 0.025
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 39,
        id: 2,
        name: 'マルファス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7010,
        offense: 1154,
        defense: 419,
        speed: 527,
        ability: { name: '知識の力', text: 'チェイン中に行動する度、自身のHPを10%回復する' },
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
                name: 'ゼノノードゥス＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 2,
                        text: '味方横一列の覚醒ゲージを+1し、2ターンの間、受けるダメージを15%軽減する【2回使用するとスキルLv低下】',
                        magnification: 0,
                        hit: 0
                    },
                    {
                        level: 1,
                        text: 'ターゲットに関係なく最も攻撃力の高い味方の覚醒ゲージを+1し、2ターンの間、攻撃力を10%上昇させる。チェイン中、味方単体にチェイン',
                        magnification: 0,
                        hit: 0
                    },
                ]
            },
            {
                name: 'ゲオーメトリア＋',
                type: SkillType.AwakeningSkill,
                text: `2ターンの間、味方全体の攻撃力を30%上昇させる。さらに1ターン後、遅延行動を行う<br>
        【遅延行動時の効果】遅延行動時、自身に回数チェイン1回を付与し、自身が覚醒状態であればアタックフォトン、覚醒状態でなければスキルフォトンを1つ自身に追加する	`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'アルカヌムレイ＋',
                type: SkillType.Mysteries,
                text: '敵単体に掛かっている強化を解除し、攻撃力3倍のダメージ。さらに自身のスキルLvを2にする。味方単体にチェイン',
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
//# sourceMappingURL=So39.js.map