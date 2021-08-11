import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 3,
        id: 1,
        name: 'サキュバス',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 7530,
        offense: 952,
        defense: 429,
        speed: 631,
        ability: { name: 'カワイさの証明', text: '最初の2ターンの間、毎ターン終了時、自身の覚醒ゲージが+2される' },
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
                name: 'クセになりそう☆＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.1,
                        hit: 1,
                        text: '敵単体に攻撃力1.1倍のダメージ。さらに45%の確率で積まれているフォトンを1つ奪い、自身への攻撃を1回無効化する'
                    }
                ]
            },
            {
                name: '難易度高過ぎィ！＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: 'リーダーと、ターゲットしたキャラクターの相性を占い、能力を強化する【結果によって効果が変化】'
                    }
                ]
            },
            {
                name: 'チャームウィップ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 3,
                        text: '敵横一列に攻撃力0.9倍の3連続ダメージ。さらに2ターンの間、前列に引き寄せ、ステータス強化状態を解除する'
                    }
                ],
                increment: 0.015
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 3,
        id: 2,
        name: 'サキュバス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 8637,
        offense: 707,
        defense: 495,
        speed: 534,
        ability: { name: 'アゲていくよ！', text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される' },
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
                name: '可愛さ弾けるぅ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: 'Ch0',
                        magnification: 0,
                        hit: 0,
                        text: '味方横一列のHPを10%回復させ、2ターンの間状態異常と弱体を無効化する状態になる。チェイン数に応じてHP回復量変化'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 0,
                        hit: 0,
                        text: '味方横一列のHPを15%回復させ、2ターンの間状態異常と弱体を無効化する状態になる。チェイン数に応じてHP回復量変化'
                    },
                    {
                        level: 1,
                        label: 'Ch2',
                        magnification: 0,
                        hit: 0,
                        text: '味方横一列のHPを25%回復させ、2ターンの間状態異常と弱体を無効化する状態になる。チェイン数に応じてHP回復量変化'
                    },
                    {
                        level: 1,
                        label: 'Ch3',
                        magnification: 0,
                        hit: 0,
                        text: '味方横一列のHPを40%回復させ、2ターンの間状態異常と弱体を無効化する状態になる。チェイン数に応じてHP回復量変化'
                    },
                    {
                        level: 1,
                        label: 'Ch4',
                        magnification: 0,
                        hit: 0,
                        text: '味方横一列のHPを60%回復させ、2ターンの間状態異常と弱体を無効化する状態になる。'
                    }
                ]
            },
            {
                name: '春色オーディション＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '自身と、ターゲットしたキャラクターの相性を占い、能力を強化する【結果によって効果が変化】'
                    }
                ]
            },
            {
                name: '宛先のない恋心＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '味方全体の状態異常を治癒する。さらにHPを25%回復させる。味方単体にチェイン'
                    }
                ],
                increment: 0
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin03.js.map