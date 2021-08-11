import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 15,
        id: 1,
        name: 'サタナキア',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 8818,
        offense: 624,
        defense: 646,
        speed: 505,
        ability: { name: '功利的策略', text: '戦闘不能時、ラッシュの味方全体の点穴を＋15する' },
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
                name: '禁断の晩餐＋',
                type: SkillType.Skill,
                text: 'ラッシュの味方単体の点穴を+15する。さらに2ターンの間、味方単体の攻撃力を5%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '禁忌の実験譚＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2倍のダメージ。さらに、自身にスキルを追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ]
            },
            {
                name: 'トキシックガスト＋',
                text: 'ラッシュの味方全体の点穴を+15する。さらに2ターンの間、味方全体の攻撃力を5%上昇させる',
                type: SkillType.Mysteries,
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
    },
    {
        clockType: ClockType.Shin,
        no: 15,
        id: 2,
        name: 'サタナキア',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 8986,
        offense: 815,
        defense: 475,
        speed: 537,
        ability: { name: '疑似生命の培養', text: '毎ターン終了時、25%の確率で自身以外の覚醒ゲージを+1する' },
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
                name: 'プロテクトセル＋',
                type: SkillType.Skill,
                text: '味方前列への攻撃を1回無効化する。さらに2ターンの間、ターン終了時にHPを5%回復する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ミュータントパワー＋',
                type: SkillType.AwakeningSkill,
                text: '味方前列のチャージフォトンをスキルに変化させ、さらに2ターンの間、攻撃力を40%上昇させる。味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '勝利の最適解＋',
                type: SkillType.Mysteries,
                text: `2ターンの間、味方全体を攻撃力昇華状態にする。さらに敵全体の防御力を30%低下させる。チェイン中、味方単体にチェイン<br>
              攻撃力上昇量【Chなし】10%上昇 【Ch1】40%上昇 【Ch2】70%上昇 【Ch3】100%上昇 【Ch4】130%上昇`,
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
export default megido;
//# sourceMappingURL=Shin15.js.map