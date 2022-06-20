import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 57,
        id: 1,
        name: 'ベヒモス',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7450,
        offense: 1350,
        defense: 273,
        speed: 499,
        ability: { name: '野生本能', text: '獣形態のとき、行動開始時、自身にアタックが追加される' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態',
                        magnification: 1,
                        hit: 1
                    },
                    {
                        level: 1,
                        label: '獣形態',
                        magnification: 0.65,
                        hit: 6
                    }
                ]
            },
            {
                name: '疾風迅雷+/七転八起+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態',
                        magnification: 0.8,
                        hit: 3,
                        text: '敵単体に攻撃力0.8倍の3連続ダメージ。さらに獣形態にシフトし、アタック、スキル、覚醒スキルの効果が変化する'
                    },
                    {
                        level: 1,
                        label: '獣形態',
                        magnification: 0.8,
                        hit: 3,
                        text: '敵単体に攻撃力0.8倍の3連続ダメージ。さらにヴィータ形態にシフトし、アタック、スキル、覚醒スキルの効果が変化する'
                    }
                ]
            },
            {
                name: '大声疾呼+/豺狼咆哮+',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を40%上昇させさらに、ターン終了時にHPが20%回復する'
                    },
                    {
                        level: 1,
                        label: '獣形態',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃にLv×10の固定追加ダメージを付与する。さらにアタックフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: '迅狼轟襲爪+',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力1.2倍の4連続ダメージ。さらに自身にスキルフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.2,
                        hit: 4
                    }
                ],
                increment: 0.0125
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 57,
        id: 2,
        name: 'ベヒモス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 8003,
        offense: 1183,
        defense: 387,
        speed: 496,
        ability: { name: '', text: '' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態',
                        magnification: 1,
                        hit: 1
                    },
                    {
                        level: 1,
                        label: '獣形態',
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: '月下変転＋/狂狼の太刀風＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態 Lv1',
                        magnification: 0,
                        hit: 0,
                        text: '	3ターンの間、自身の攻撃力を20%上昇する。さらに獣形態にシフトする【使用するごとにスキルLvが上昇】'
                    },
                    {
                        level: 2,
                        label: 'ヴィータ形態 Lv2',
                        magnification: 0,
                        hit: 0,
                        text: '	4ターンの間、自身の攻撃力を40%上昇し、フォトン容量を+1する。さらに獣形態にシフトする'
                    },
                    {
                        level: 1,
                        label: '獣形態 Lv1',
                        magnification: 1.75,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ。さらにヴィータ形態にシフトし、3ターンの間、自身の覚醒ゲージの最大値を-1する【使用するごとにスキルLvが上昇】'
                    },
                    {
                        level: 2,
                        label: '獣形態 Lv2',
                        magnification: 1.75,
                        hit: 1,
                        text: '	敵単体に攻撃力1.75倍のダメージ。さらにヴィータ形態にシフトし、4ターンの間、自身の覚醒ゲージの最大値を-2する'
                    }
                ]
            },
            {
                name: '剛破狼迅＋/爪牙狂乱＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: 'ヴィータ形態',
                        magnification: 3.25,
                        hit: 1,
                        text: '敵単体に攻撃力3.25倍のダメージ。2ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる'
                    },
                    {
                        level: 1,
                        label: '獣形態',
                        magnification: 0.75,
                        hit: 6,
                        text: '敵単体に0.75倍の6連続ダメージ	'
                    }
                ]
            },
            {
                name: '狼牙爪葬裂迅＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Break,
                levels: [
                    {
                        level: 1,
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍の破断ダメージ。さらに対象の地形を2ターン延長する'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin57.js.map