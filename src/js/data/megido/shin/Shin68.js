import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 68,
        id: 1,
        name: 'ネルガル',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 8302,
        offense: 1359,
        defense: 491,
        speed: 279,
        ability: { name: 'オートパイロット', text: '戦闘不能時、一度だけ最大HPの50%で蘇生し自身の特性によって蘇生した場合、自動操縦モードにシフトする' },
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
                name: 'アイアンドーム＋/危険対象物除去＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、自身の攻撃力を30%上昇させ、さらに攻撃を受けたとき、反撃する	'
                    },
                    {
                        level: 1,
                        label: '自動操縦',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ。さらに自身のHPが50%以下のとき、威力が2倍になる'
                    }
                ]
            },
            {
                name: 'ハンマーフィスト＋/緊急回避行動＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.5,
                        hit: 4,
                        text: '敵単体に攻撃力0.5倍の防御無視4連続ダメージ'
                    },
                    {
                        level: 1,
                        label: '自動操縦',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ。さらにスキルを追加する'
                    }
                ]
            },
            {
                name: 'グランドコンバイン＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3倍のダメージ。さらに2ターンの間、自身の攻撃力を50%上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin68.js.map