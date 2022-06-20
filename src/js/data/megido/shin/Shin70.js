import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 70,
        id: 1,
        name: 'アスラフィル',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 8137,
        offense: 908,
        defense: 639,
        speed: 421,
        ability: { name: 'ジーニアス', text: '戦闘開始時、覚醒ゲージが最大になる' },
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
                name: 'ウルトラリミックス＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ。さらに2ターンの間、自身の攻撃力を15%上昇させる'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1.25,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵単体に攻撃力1.25倍の響撃ダメージ。さらに2ターンの間、自身の攻撃力を20%上昇させる	'
                    }
                ]
            },
            {
                name: '♯青の組曲＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンライブ、音符1個で防御力4%上昇。攻撃時、覚醒0の対象にダメージ1.2倍/2ターン攻防早7%低下/ダメージ7%吸収を付与可能'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 0,
                        hit: 0,
                        text: '3ターンライブ、音符1個で防御力4%上昇。攻撃時、覚醒0の対象にダメージ1.5倍/2ターン攻防早10%低下/ダメージ9%吸収を付与可能'
                    }
                ]
            },
            {
                name: 'グルーヴィサウンド＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の効果範囲を列化する。さらにアタックフォトンからのダメージを45%軽減し、味方編成を協奏状態にする'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の効果範囲を全体化する。さらにアタックフォトンからのダメージを55%軽減する'
                    }
                ],
                increment: 0
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin70.js.map