import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 44,
        id: 1,
        name: 'タムス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7970,
        offense: 1141,
        defense: 415,
        speed: 493,
        ability: {
            name: '機械整備',
            text: '連結武器中、毎ターン終了時、HPを20%回復する'
        },
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
                name: '赤熱レンチ！＋/ブラストフレイム＋',
                type: SkillType.Skill,
                attribute: Attribute.Fire,
                levels: [
                    {
                        level: 1,
                        label: '分離武器',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える'
                    },
                    {
                        level: 1,
                        label: '連結武器',
                        magnification: 0.9,
                        hit: 2,
                        text: '敵単体に攻撃力0.9倍の2連続火ダメージ。さらに、自身の覚醒ゲージを+2する	'
                    }
                ]
            },
            {
                name: '熱狂フューエル！＋/フルブラストフレイム＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '分離武器',
                        magnification: 0,
                        hit: 0,
                        text: '自身の覚醒ゲージを全て消費し、敵全体の炎上地形を狂炎地形にする。さらに、自身にアーマーを3000付与する'
                    },
                    {
                        level: 1,
                        label: '連結武器',
                        magnification: 0.8,
                        hit: 8,
                        attribute: Attribute.Fire,
                        text: '敵全体に攻撃力0.8倍の8連続火ダメージ。さらに、味方全体への攻撃を1回無効化する。分離武器にシフトし、スキル、覚醒スキル、奥義の効果が変化する'
                    }
                ]
            },
            {
                name: '焦熱リーサルフレア＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Fire,
                levels: [
                    {
                        level: 1,
                        label: '分離武器',
                        magnification: 2,
                        hit: 1,
                        text: '敵全体に攻撃力2倍の火ダメージ。2ターンの間、炎上の地形効果で1.5倍の継続ダメージ。さらに連結武器にシフトし、スキル、覚醒スキル、奥義の効果が変化する'
                    },
                    {
                        level: 1,
                        label: '連結武器',
                        magnification: 2,
                        hit: 1,
                        text: '敵全体に攻撃力2倍の火ダメージ。2ターンの間、炎上の地形効果で1.5倍の継続ダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin44.js.map