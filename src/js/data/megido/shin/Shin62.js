import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 62,
        id: 1,
        name: 'インプ',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 6148,
        offense: 818,
        defense: 643,
        speed: 616,
        ability: { name: 'イタズラ大成功！', text: '自身の行動で、敵が1体以上感電した場合、自身の覚醒ゲージが+1される' },
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
                name: 'サンダードドンパー＋',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力0.75倍の3連続雷ダメージ。さらに2ターンの間、敵を感電状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 3
                    }
                ]
            },
            {
                name: 'アースボールラブ＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、味方単体の最大HPの15%以下のダメージを無効化し、攻撃力を25%上昇させるがゾンビ状態にする	',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '全力マジマゲドン！＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                text: '敵全体に攻撃力2倍の雷ダメージ。さらに90%の確率で、2ターンの間、敵を感電状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 62,
        id: 2,
        name: 'インプ',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 6298,
        offense: 1114,
        defense: 438,
        speed: 535,
        ability: { name: 'ビリっと驚け！', text: '自身の行動で、敵または味方が1体以上感電した場合、2ターンの間、自身の攻撃力を40%上昇させる	' },
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
                name: 'バリバリドドンパー+',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力0.8倍の3連続雷ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 3
                    }
                ]
            },
            {
                name: 'アースボールノック+',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、自身の攻撃力を50%上昇させる。さらに自身以外の味方単体を感電状態にし、対象の攻撃力を50%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ティアオブデッド+',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                text: '敵横一列に攻撃力1.25倍の2連続雷ダメージ。さらに80%の確率で、2ターンの間、敵を感電状態にする	',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 2
                    }
                ],
                increment: 0.025
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin62.js.map