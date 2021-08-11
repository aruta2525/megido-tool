import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 18,
        id: 1,
        name: 'ブニ',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8805,
        offense: 1080,
        defense: 471,
        speed: 430,
        ability: { name: '不屈の精神', text: '15%の確率で攻撃を無効化する' },
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
                name: '女神の護り＋',
                type: SkillType.Skill,
                text: '2ターンの間、すべての単体攻撃を受け持ち最大HPの20%以下のダメージを無効化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ブリッツライド＋',
                type: SkillType.AwakeningSkill,
                text: '	敵単体に攻撃力2倍のダメージ。さらに90%の確率で、覚醒ゲージを-2する',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ]
            },
            {
                name: '閃煌轟雷襲＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2倍のダメージ。さらに敵が覚醒状態のとき、ダメージが2倍になる',
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
        no: 18,
        id: 2,
        name: 'ブニ',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 8032,
        offense: 949,
        defense: 279,
        speed: 688,
        ability: { name: '戦乙女の覚悟', text: '覚醒状態中なら自身のアタックが強化される' },
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
                name: '地鳴閃＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.8倍のダメージ。1ターンの間、地割れの効果で0.75倍の継続ダメージを与え、防御力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 1
                    }
                ]
            },
            {
                name: '扇動の防衛陣＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、敵味方全体の防御力を70%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 1
                    }
                ]
            },
            {
                name: '煌々爆砕烈撃＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Break,
                text: '敵横一列に攻撃力2.5倍の破断ダメージ。さらに2ターンの間、味方前列の攻撃力を20%上昇する',
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
    }
];
export default megido;
//# sourceMappingURL=Shin18.js.map