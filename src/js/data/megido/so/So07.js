import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So07 = [
    {
        clockType: ClockType.So,
        no: 7,
        id: 1,
        name: 'アモン',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 4598,
        offense: 1194,
        defense: 417,
        speed: 685,
        ability: { name: '隠密行動', text: '敵から狙われにくくなり、攻撃力が10%上昇する' },
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
                name: '巾着切り+',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージさらに45%の確率で、積まれているフォトンを1つ奪う',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ダーティレイド+',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力1.5倍の2連続ダメージ。さらに30%の確率で、敵を即死させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 2
                    }
                ]
            },
            {
                name: '世界を包む炎獄+',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力4.25倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
                attribute: Attribute.Fire,
                levels: [
                    {
                        level: 1,
                        magnification: 4.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 7,
        id: 2,
        name: 'アモン',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6039,
        offense: 1200,
        defense: 420,
        speed: 627,
        ability: { name: '間隙突き', text: '覚醒ゲージが0の対象に1.5倍のダメージ' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 0.65,
                        hit: 3
                    }
                ]
            },
            {
                name: 'クレセント＋',
                type: SkillType.Skill,
                text: '自身にアタックを追加する。さらに2ターンの間、攻撃力を30%上昇させる【使用後Lv2：アタックを2つ追加】',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'サイレンスリーパー＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力0.75倍の4連続ダメージ。さらに80%の確率で、覚醒ゲージを-2する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 4
                    }
                ]
            },
            {
                name: 'リヴィールエッジ＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力1.2倍の4連続ダメージ',
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
    }
];
//# sourceMappingURL=So07.js.map