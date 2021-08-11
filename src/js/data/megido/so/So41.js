import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So41 = [
    {
        clockType: ClockType.So,
        no: 41,
        id: 1,
        name: 'フォカロル',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7601,
        offense: 993,
        defense: 504,
        speed: 487,
        ability: { name: '鍛練の成果', text: '戦闘中、徐々に防御力が上昇する（最大値50%）1ターン目に20%、2・4・6ターン目に10%上昇' },
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
                name: 'ギアバースト＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を30%上昇【使用するごとにスキルLvが上昇し、アタック強化/追加ダメージ/列化が付与】'
                    },
                    {
                        level: 2,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を30%上昇、アタックを強化【使用後スキルLv+1。追加ダメージ/列化が付与】'
                    },
                    {
                        level: 3,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を30%上昇、アタックを強化、Lv×10の追加ダメージ付与【使用後スキルLv+1。列化が付与】'
                    },
                    {
                        level: 4,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を30%上昇、アタックを強化、Lv×10の追加ダメージ付与。さらに自身の効果範囲を列化させる'
                    }
                ]
            },
            {
                name: 'フェイタルブレード＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 5,
                        text: '敵単体に攻撃力1倍の5連続ダメージ。さらに自身にアタックフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: 'ゲイルウィング＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1,
                        text: '敵横一列に攻撃力3倍のダメージ。さらに2ターンの間、味方全体の素早さを110%上昇させる'
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 41,
        id: 2,
        name: 'フォカロル',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 7219,
        offense: 728,
        defense: 507,
        speed: 626,
        ability: { name: '戦場の覚悟', text: 'バレットのストック数に応じて、受けるダメージを軽減する（最大60%）' },
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
                name: 'トリガーオン＋',
                type: SkillType.Skill,
                text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
              【バレット効果】2ターンの間、防御力を30%低下＋飛行系の対象に2倍のダメージ`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'フェイタルブラスト＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.3,
                        hit: 2,
                        text: '敵単体に攻撃力1.3倍の2連続ダメージ'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.5,
                        hit: 2,
                        text: 'バレットを消費し、敵単体に攻撃力1.5倍の2連続ダメージ'
                    }
                ]
            },
            {
                name: 'クリティカルブロウ＋',
                type: SkillType.Mysteries,
                text: `バレットを2個作成する。さらに味方単体にスキルフォトンを追加し、2ターンの間、ダメージを50%軽減する<br>
              【バレット効果】Lv×40の固定追加ダメージを付与する`,
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
//# sourceMappingURL=So41.js.map