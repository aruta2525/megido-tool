import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So26 = [
    {
        clockType: ClockType.So,
        no: 26,
        id: 1,
        name: 'ブネ',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 9049,
        offense: 949,
        defense: 497,
        speed: 414,
        ability: { name: '豪放磊落', text: '15%の確率で攻撃を無効化する' },
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
                name: '斬撃『一字ノ太刀』＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1.25倍のダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '斬撃『兜割ノ太刀』＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2倍のダメージ。さらに90%の確率で、覚醒ゲージを-2する',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ]
            },
            {
                name: '龍王天懐撃＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.5倍の2連続ダメージ。さらに敵の覚醒ゲージが多いほど威力上昇(1つにつき倍率に0.15加算)',
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
        no: 26,
        id: 2,
        name: 'ブネ',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 9000,
        offense: 1430,
        defense: 420,
        speed: 271,
        ability: { name: '轅門竜変', text: '覚醒状態中なら自身のアタックが強化される' },
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
                name: '連撃『双撃ノ太刀』＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力0.9倍の2連続ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 2
                    }
                ]
            },
            {
                name: '地這いの剛撃＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力2倍のダメージ。3ターンの間、地割れの効果で0.75倍の継続ダメージを与え、防御力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ]
            },
            {
                name: '烈震剛滅破＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力6.25倍の破断ダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する',
                attribute: Attribute.Break,
                levels: [
                    {
                        level: 1,
                        magnification: 6.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So26.js.map