import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 30,
        id: 1,
        name: 'バラキエル',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 6568,
        offense: 739,
        defense: 643,
        speed: 531,
        ability: {
            name: '自称最強メギド',
            text: '毎ターン終了時、自身の覚醒ゲージが0のとき、覚醒ゲージが+2される'
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
                name: 'エイドクリスタル＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方全体の防御力を15%上昇させ、ターン終了時にHPが15%回復する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ワンダーヘルメット＋',
                type: SkillType.AwakeningSkill,
                text: '味方横一列への攻撃を1回無効化し、2ターンの間、防御力を25%上昇させる。さらに種族に【物体】を持つオーブを装備している対象に勇猛のオーラを2個付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'エヴァーフローズン＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 4,
                        hit: 1,
                        text: '敵単体に攻撃力4倍のダメージ。さらに2ターンの間、敵を凍結状態にする'
                    },
                    {
                        level: 1,
                        label: 'オーラ',
                        magnification: 6,
                        hit: 1,
                        text: '自身のオーラを2個消費し、敵単体に攻撃力6倍のダメージ。2ターンの間、敵を凍結状態にする。さらに自身以外の味方にアタックを1つ追加'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin30.js.map