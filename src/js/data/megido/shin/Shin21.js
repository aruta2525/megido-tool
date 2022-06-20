import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 21,
        id: 1,
        name: 'リヴァイアサン',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 9551,
        offense: 446,
        defense: 532,
        speed: 711,
        ability: { name: '母的本能', text: 'HPが50%以下の味方へのアーマー効果量が50%上昇する' },
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
                name: '大海の水分り+',
                type: SkillType.Skill,
                text: '敵単体に0.1倍で9ターン後に弾けるHボム錬を錬成し、1ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '溟海游宴+',
                type: SkillType.AwakeningSkill,
                text: `2ターンの間味方全体の攻撃力を30%上昇させ海魔の加護の地形にする<br>
              [ターン終了時HP30%回復/ダメージ20%軽減/火ダメージ80%軽減]`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '母なる海の揺り籠+',
                type: SkillType.Mysteries,
                text: '戦闘不能の味方を、最大HPの30%で蘇生させる。さらに、味方全体にアーマーを2000付与',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0
            },
            {
                name: 'マリヌスインビディア',
                type: SkillType.SecretMysteries,
                text: '敵全体に、5倍で1ターン後に弾けるハイドロボム錬を錬成する。さらに2ターンの間、防御力を30%低下させる',
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
//# sourceMappingURL=Shin21.js.map