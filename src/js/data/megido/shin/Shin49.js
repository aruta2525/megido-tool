import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 49,
        id: 1,
        name: 'サタナイル',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 8189,
        offense: 838,
        defense: 459,
        speed: 630,
        ability: { name: 'マエストロ', text: '音符が多いほど、攻撃力が上昇する（最大値50%）音符数×10%（5以上で50%）' },
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
                name: '戦いのコンチェルト＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方全体の受けるダメージを15%軽減させる。さらに味方編成を協奏状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ピウ・ブリッランテ＋',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Sound,
                text: '3ターンの間、ターン終了時、敵全体へ攻撃力1.5倍の響撃ダメージを与えるリザーブ状態になる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ラ・ヌッラロンド＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Sound,
                text: '敵横一列に攻撃力2.25倍の響撃ダメージ。さらに80%の確率で、2ターンの間、攻撃力を20%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 2.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin49.js.map