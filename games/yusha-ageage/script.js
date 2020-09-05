console.log("script.js has been loaded.")

var questions = [];
var basic_questions = [
    "勇敢な闘士",
    "向こう見ずな拳闘士",
    "恐れ知らずの剣闘士",
    "華麗なる剣士",
    "老獪なる剣聖",
    "仁義ある侍",
    "風変わりな浪人",
    "モブ兵士",
    "新人歩兵",
    "身軽な軽装歩兵",
    "鈍重な重装歩兵",
    "忠義深き近衛兵",
    "誇り高き騎士",
    "戦場をかける軽騎士",
    "屈強な重騎士",
    "闇を知る暗黒騎士",
    "空を駆ける竜騎士",
    "天誅を下す聖騎士",
    "人望厚い騎士団長",
    "明朗な戦士",
    "百戦錬磨の女戦士",
    "殺したがりの狂戦士",
    "意外と素早い重戦士",
    "未開の地域の蛮族",
    "無敗の武道家",
    "裏切りそうな傭兵",
    "フットワークの軽い槍使い",
    "エルフの弓使い",
    "魔弾の射手",
    "必中の狙撃手",
    "異民族の弓騎兵",
    "深き森の狩人",
    "名家の魔法戦士",
    "百の顔をもつ暗殺者",
    "妨げられない盗賊",
    "洞窟ぐらしの山賊",
    "挑戦状を送る怪盗",
    "街のごろつき",
    "二重スパイ",
    "隠れ里の忍者",
    "術の使い手くノ一",
    "信心深き寺僧",
    "敬虔なる聖職者",
    "究極魔法使いの教皇",
    "意地悪な枢機卿",
    "信頼される司教",
    "メガネの神父",
    "村の牧師",
    "治療の僧侶",
    "自然と調和する呪術師",
    "神に見初められし巫女",
    "終末の預言者",
    "お姉さんの魔女",
    "お爺さんの魔法使い",
    "片眼鏡の黒魔術師",
    "プロの祓魔師",
    "現代に生きる陰陽師",
    "偏屈者の占い師",
    "泣かない道化師",
    "新米召喚士",
    "半裸のシャーマン",
    "山小屋に住むネクロマンサー",
    "こだわりの強い人形遣い",
    "自然と心通わせるビーストテイマー",
    "嫌味な貴族",
    "公正なる領主",
    "世間知らずの王女",
    "200歳になる王",
    "最も美しい女王",
    "統一を果たした将軍",
    "太った商人",
    "艶やかな踊り子",
    "弱虫の吟遊詩人",
    "理を知る錬金術師",
    "街の薬師",
    "伝説の刀鍛冶",
    "平和に暮らす農民",
    "世界一のシェフ",
    "古代の生き残りの賢者",
    "選ばれし勇者",
    "恐ろしき魔王",
    "秘境に挑む冒険者",
    "悪くないスライム",
    "残虐なハーピィ",
    "鉱山都市のドワーフ",
    "高貴なる吸血鬼",
    "はじまりの街",
    "商業都市",
    "大陸一の港",
    "年中雪の降る村",
    "火山の麓の工業都市",
    "空に浮かぶ古代都市",
    "月の未来都市",
    "ジャングル奥地の村",
    "悲劇に襲われた街",
    "若者に溢れた科学都市",
    "王都",
    "裏山の洞窟",
    "呪われた神殿",
    "蒼水晶の洞窟",
    "ギルドの集まる中心地",
    "世界の果てに佇む塔",
    "夢の通り道",
    "火の基本魔法",
    "奔流する水の魔法",
    "かまいたちの風の魔法",
    "神の雷",
    "突き上げる石の魔法",
    "封印された重力魔法",
    "時を加速する魔法",
    "味方全体回復魔法",
    "確率蘇生魔法",
    "伝説級の封印魔法",
    "封印されし聖剣",
    "闇の宝玉",
    "世界中の富裕層が求める宝物",
    "宇宙のアイドル",
    "人間を信用していない爬虫類族"
];
var toho_questions = ["えいえんのみこ",
"はくれいじんじゃのみこさん",
"らくえんのすてきなみこ",
"らくえんのみこ",
"かいせいのみこ",
"そらをとぶふしぎなみこ",
"ごよくのみこ",
"やおよろずのだいべんしゃ",
"そらとぶふしぎなみこ",
"いじげんのきんゆうかんわ",
"しんぴけっかいのみこ",
"かいきをおえいへんをおわらせるみこ",
"はるのひにのんきなみこ",
"じゆうほんぽうでむけいかくなみこ",
"はくれいじんじゃみこ",
"じゆうほんぽうなにんげん",
"さよしぐれのみこ",
"らくえんのみこたんてい",
"おみきのしゅごしゃ",
"とうようのせいようまじゅつし",
"きみょうなまほうつかい",
"ふつうのくろまじゅつしょうじょ",
"ふつうのくろまじゅつし",
"ふつうのまほうつかい",
"きりさめのまほうつかい",
"ふつうのまほうつかいさん",
"とおりすがりのまほうつかい",
"ごうよくのまほうつかい",
"にんげんだいひょうのまほうつかい",
"にんげんらしいまほうつかい",
"きょうふがっこうのまほうつかい",
"ごっかんにふるえるまほうつかい",
"こうかりょくでほしずきなまほうつかい",
"だいたんしょうしんなにんげん",
"きわめてふつうのまじしゃん",
"しごくふつうのまほうつかい",
"もりのまほうたんてい",
"まほうのもりのみつぞうしゅ",
"しきのふらわーますたー",
"なないろのにんぎょうつかい",
"みためだけにぎやかなようかい",
"ひょうのにんぎょうつかい",
"よいやみのようかい",
"くらやみにひそむようかい",
"こじょうのひょうせい",
"こおりのようかい",
"こおりのちいさなようせい",
"ふしぜんなれいき",
"こおりのようせい",
"みずうみのひょうせい",
"とけないえんてんかのひょうせい",
"ほあれんしゃおにゃん",
"いろあざやかににじいろなもんばん",
"こうまかんのばんにん",
"ちしきとひかげのしょうじょ",
"うごかないだいとしょかん",
"えたいのしれないまほうのもと",
"はなぐもりのまじょ",
"うごけないだいとしょかんのまじょ",
"こうまかんのめいど",
"かんぜんでしょうしゃなじゅうしゃ",
"かんぜんでしょうしゃなめいど",
"きけんなてじなし",
"さよあらしのめいど",
"あかいあくまのめいど",
"あくまのめいど",
"でんこうせっかのめいど",
"きゅうけつきのめいど",
"こうまかんのきっちんどりんかー",
"えいえんのあかいおさなきつき",
"えいえんにあかいおさなきつき",
"あかいあくま",
"あかいろのせかい",
"のうむのきゅうけつき",
"あかいろののくたーなるでびる",
"こうまかんのきゅうけつき",
"あくまのいもうと",
"おそろしいはどう",
"きゅうけつきのはめつてきないもうと",
"ふゆのわすれもの",
"きょくしょてきなだいかんぱ",
"ふゆのようかい",
"きょうちょうのくろねこ",
"すきまようかいのしきのしき",
"めにもとまらないばけねこ",
"はるをはこぶようせい",
"そうれいヴぁいおりすと",
"そうれいとらんぺったー",
"そうれいきーぼでぃすと",
"ゆうじんのにわし",
"はんぶんまぼろしのにわし",
"せいめいのにとうりゅう",
"はんじんはんれい",
"はんじんはんれいのはんにんまえ",
"きりすてごめん",
"そうてんのにわし",
"しによくのはんれい",
"はんじんはんれいのにわし",
"はんじんはんれいのにとうけんし",
"ゆうめいろうかくのぼうれいしょうじょ",
"てんいむほうのぼうれい",
"かしょのぼうれい",
"ゆうがなしんれいしゃしん",
"ぼうれいのひめぎみ",
"ゆきのぼうれい",
"さまよわないぼうれい",
"めいかいのぼうれい",
"すきまようかいのしき",
"めずらしいどうぶつ",
"さくしのきゅうび",
"かみかくしのしゅはん",
"わりとこまったちゃん",
"げんそうのきょうかい",
"さかいめにひそむようかい",
"きょうかいのようかい",
"きみのわるいほほえみ",
"げんそうのきつねのよめいり",
"しんしゅつきぼつでうらおもてのあるようかい",
"しんしゅつきぼつのようかい",
"げんそうきょうのげーときーぱー",
"あつまるゆめまぼろしそしてひゃっきやこう",
"たいこのじだい",
"ちいさなひゃっきやこう",
"そうのひゃっきやこう",
"ふきほんぽうのこごう",
"ふきほんぽうのおに",
"ひょうたんまくらのしゅてんどうじ",
"やみにうごめくひかりのむし",
"ひかるむしのたいぐん",
"よすずめのかい",
"よすずめのようかい",
"うたうよすずめ",
"ちしきとれきしのはんじゅう",
"れきしぐい",
"かたくるしいれきしか",
"れきしぐいのはんじゅう",
"はんじゅうのれきしか",
"ちじょうのうさぎ",
"こううんのしろうさぎ",
"とびはねるうさぎのたいぐん",
"こうげんれいしょくのしろうさぎ",
"きょうきのつきのうさぎ",
"しかいをゆさぶるようかいうさぎ",
"きょうきのあかいひとみ",
"せいらんのせきがん",
"ちじょうのげっと",
"きんしきょうきのくねくねうさぎ",
"げつめんしこうではちょうのあわないようかいうさぎ",
"きょうきのせきがん",
"ちじょうのむーんらびっと",
"つきのずのう",
"まちのくすりやさん",
"ほうらいのくすりやさん",
"えいえんとしゅゆのざいにん",
"おうびょうよやくのつきのたみ",
"ちじょうにかくれすむつきのひめ",
"にんげんらしくないおひめさま",
"えいえんのおひめさま",
"ほうらいのひとのかたち",
"しょうししないにんげん",
"げきねつにんげんいんふぇるの",
"じぼうじきでふじみのにんげん",
"くれないのじけいたい",
"でんとうのげんそうぶんや",
"さとにもっともちかいてんぐ",
"ふううのからす",
"ねつぞうしんぶんきしゃ",
"もみじをちらすてんぐ",
"からすてんぐのじゃーなりすと",
"がでんいんすいのてんぐ",
"ちいさなすいーとぽいずん",
"からだにやさしくないにんぎょう",
"さんずのみずさきあんないにん",
"えどっこかたぎなしにがみ",
"かわぎりのみずさきあんないにん",
"たくらくしつろのしにがみ",
"らくえんのさいこうさいばんちょう",
"じごくのさいこうさいばんちょう",
"くちうるさいありがたいおはなし",
"さびしさとしゅうえんのしょうちょう",
"せつなくなるあかいあめ",
"ゆたかさとみのりのしょうちょう",
"あまいにおいのするかみさま",
"ひめがみながしびな",
"えんがちょますたー",
"ちょうようかいだんとう",
"すいせいのぎし",
"かわのべんりやさん",
"たいこさんじょうきのかっぱ",
"すいへいしこうのかっぱ",
"みずのなかのえんじにあ",
"しょうばいじょうずでしゅぜんどのかっぱ",
"したっぱしょうかいてんぐ",
"やまのてれぐのしす",
"まつられるかぜのにんげん",
"やまのしんじんかみさま",
"げんだいっこのあらひとがみ",
"がよくのみこ",
"やまにすむきせきのあらひとがみ",
"ひそうせんぱくなにんげん",
"かぜとみずうみのてうるぎすと",
"やまさかとみずうみのごんげ",
"さかずきのかみさま",
"どくりつふとうのかみさま",
"どちゃくしんのちょうてん",
"りょうせいるいのかみさま",
"めいそんじつぼうのかみさま",
"うつくしきひのころも",
"そらとぶれああいてむ",
"ひそうひひそうてんのむすめ",
"うちょうてんのおじょうさん",
"ひそうてきでうきよばなれしたてんにん",
"だんいほうしょくのてんにん",
"おそるべきいどのかい",
"あきのひのひとぐい",
"くらいどうくつのあかるいあみ",
"しのびよるきょうふのき",
"ちかくのしたのしっとしん",
"みどりいろのめをしたかいぶつ",
"かたられるかいりょくらんしん",
"はめつてきなこんごうりき",
"おんりょうもおそれひるむしょうじょ",
"みんなのこころのやみ",
"こえいしょうぜんのようかい",
"ちのそこのあんらくいすたんてい",
"じごくのりんか",
"したいつあーこんだくたー",
"はいしんきぎのしびょう",
"きゅうきょくたんていのじょしゅねこ",
"あつかいなやむかみのひ",
"ちていのたいよう",
"とじたこいのひとみ",
"なにもかんがえていないもの",
"くうそうじょうのじんかくほじしゃ",
"ほんこわあなたのうしろにいるよ",
"いとせずにこころをとざしたさとり",
"だうざーのちいさなたいしょう",
"ひきんなだうざー",
"ゆかいなわすれがさ",
"ふびんなふほうとうきぶつ",
"おこまりのわすれもの",
"きょうてんどうちのからかさおばけ",
"まもりまもられしたいりん",
"おおぞらにさくはなとおやじ",
"あっとうするようかいぎょうじゃ",
"きょうがくちょうしんのにゅうどうつかい",
"がんこできょたいかいりょくなにゅうどうつかい",
"いちれんたくしょうのようかいそうりょ",
"たいざんめいどうのだいにゅうどう",
"すいなんじこのねんばくれい",
"さんたんたるおおうなばら",
"びしゃもんてんのでし",
"ようじゅうのなりあがり",
"ふういんされただいまほうつかい",
"がんがんいくそうりょ",
"れいちょうるいをこえたあじゃり",
"ごくそくらいだーそうりょ",
"ちょうじんてきでさとりをひらくだいあじゃり",
"ようかいでらのますたーぷりーすと",
"ねんぶつまんざいのだいあじゃり",
"ようかいでらのまじゅうしょく",
"みかくにんげんそうひこうしょうじょ",
"とらだったりとりだったりするやつ",
"いにしえのようかいそのいち",
"しょうたいふめいのしょうたい",
"しょうたいふめいのあんのうんえっくす",
"いまどきのねんしゃきしゃ",
"ういういしいすぽいらーきしゃ",
"いたずらずきなひのひかり",
"かがやけるひのひかり",
"ひのひかり",
"しずかなるつきのひかり",
"つきのひかり",
"ふりそそぐほしのひかり",
"ほしのひかり",
"どっきょうするやまびこ",
"へいぼんちんぷなやまびこ",
"ちゅうじつなしたい",
"かべぬけのじゃせん",
"むりひどうなせんにん",
"かみのまつえいのぼうれい",
"こだいにほんのしかいせん",
"りゅうみゃくをつかさどるふうすいし",
"ばんちょうさらをわるしかいせん",
"ふうすいでおさらをわるしかいせん",
"しょうとくどうし",
"うちゅうをつかさどるぜんのうどうし",
"てんしえいまいのせんにん",
"かいきにしょくまんとまじん",
"ぜんのうでひとのためにうごくどうし",
"ばけだぬきじゅうへんげ",
"いつもおどろきをていきょうするばけだぬき",
"しんりゃくせようちゅうようかいだぬき",
"へんげんじざいでくえないばけだぬき",
"きんゆうぜつむのがいらいようかい",
"とらぬたぬきのでぃすがいざー",
"さどのふたついわ",
"ひょうじょうゆたかなぽーかーふぇいす",
"せんりつせよあくむののうめんおんな",
"のうめんでかんじょうてきなめんれいき",
"たんすいにすむにんぎょ",
"ろくろくびのかいき",
"ちくりんのるーがるー",
"ふるびたびわのつくもがみ",
"ふるびたことのつくもがみ",
"ぎゃくしゅうのあまのじゃく",
"こびとのまつえい",
"まゆつばみどりいろをしたこびと",
"おとぎばなしてきでおわんにのるこびと",
"かがやくはりのりりぱっと",
"むげんのぱーかっしょにすと",
"きょういねがいをきくせんにん",
"しよくせよねがいをかなえるせんにん",
"しんせんしそうでどうぶつずきなせんにん",
"かたうでゆうかくのせんにん",
"しんぴをあばけひふうくらぶしょだいかいちょう",
"しんぴしゅぎであつかいにこまるじょがくせい",
"しゃしぶんじゃくなじょしこうせい",
"あさぎいろのいーぐるらヴぃ",
"たちばないろのいーぐるらヴぃ",
"ゆめのしはいしゃ",
"ゆめをみせるようかい",
"ぜっかをもたらすめがみ",
"じごくのようせい",
"じごくのめがみ",
"きょうきなるじごくのようせい",
"かみにちかづくちょうのようせい",
"まなつのあげはちょうのようせい",
"うきよのせきをこえるやまんば",
"しんぶつにしんすいするしゅごしんじゅう",
"しんしょくじじゃくのこまいぬ",
"もりですいじゃくしたまほうじぞう",
"きけんすぎるばっくだんさーず",
"きゅうきょくのぜったいひしん",
"いふうどうどうたるしんぴ",
"さいきょうさいあくのふたごのいもうと",
"さいきょうさいあくのふたごのあね",
"そいそしょくのびんぼうがみ",
"うみとやまをつなぐつきのひめ",
"しんれいのよりつくつきのひめ",
"うごかないふるどうぐや",
"ちそくふじょくのふるどうぐや",
"ふるどうぐやのきゅりおすふぇろー",
"こうりんどうてんしゅ",
"ふるどうぐやてんしゅ",
"げんそうきょうのきおく",
"きゅうだいめのさヴぁん",
"はんどくがんのびぶろふぃりあ",
"かわらのあいどるみずこ",
"こだいぎょのこづればんにん",
"じごくせきしょのばんとうしん",
"きけつぐみくみちょう",
"はにわへいちょう",
"こりつむえんがあつらえたぞうけいしん",
"けいがぐみくみちょう",
"むげんさかばげいどんていのかんばんむすめ"
];
var letter = [];
var basic_letter = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
]
var all_letter = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
    "ガ","ギ","グ","ゲ","ゴ",
    "ダ","ヂ","ヅ","デ","ド",
    "バ","ビ","ブ","ベ","ボ",
    "パ","ピ","プ","ペ","ポ",
    "キャ","キュ","キョ",
    "シャ","シュ","ショ",
    "チャ","チュ","チョ",
    "ニャ","ニュ","ニョ",
    "ヒャ","ヒュ","ヒョ",
    "ミャ","ミュ","ミョ",
    "リャ","リュ","リョ",
    "ギャ","ギュ","ギョ",
    "ヂャ","ヂュ","ヂョ",
    "ビャ","ビュ","ビョ",
    "ピャ","ピュ","ピョ"
];
var littletsu = false;
var nobashibo = false;
var cards = [];
var questionOptionMax = 4;
var cardOptionMax = 5;

function questionInputButton(){
    var selectedQuestionIndex = document.getElementById("question-input-textarea").value.split(",").map(Number);
    var selectedQuestion = [];
    for(var i = 0; i < questionOptionMax; i ++){
        selectedQuestion.push(questions[selectedQuestionIndex[i]]);
    }
    var target = document.getElementById("question-option-list");
    target.innerHTML = "";
    for(var i = 0; i < questionOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedQuestion[i];
        li.id = "option" + i;
        li.style.color = "black";
        target.appendChild(li);
    }
}

function questionRandomButton(){
    var selectedQuestion = selectQuestionAtRandom(questions, questionOptionMax);
    var target = document.getElementById("question-option-list");
    target.innerHTML = "";
    for(var i = 0; i < questionOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedQuestion[i];
        li.id = "option" + i;
        li.style.color = "black";
        target.appendChild(li);
    }
    var selectedQuestionIndex = [];
    for(var i = 0; i < questionOptionMax; i++){
        selectedQuestionIndex.push(questions.indexOf(selectedQuestion[i]));
    }
    document.getElementById("question-input-textarea").value = selectedQuestionIndex;
}

function cardInputButton(){
    var selectedCardIndex = document.getElementById("card-input-textarea").value.split(",").map(Number);
    var selectedCard = [];
    for(var i = 0; i < cardOptionMax; i ++){
        selectedCard.push(cards[selectedCardIndex[i]]);
    }
    var target = document.getElementById("card-option-list");
    target.innerHTML = "";
    for(var i = 0; i < cardOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedCard[i];
        target.appendChild(li);
    }
}

function cardRandomButton(){
    var selectedCard = selectCardAtRandom(cards, cardOptionMax);
    var target = document.getElementById("card-option-list");
    target.innerHTML = "";
    for(var i = 0; i < cardOptionMax; i++){
        var li = document.createElement("li");
        li.innerText = selectedCard[i];
        target.appendChild(li);
    }
    var selectedCardIndex = [];
    for(var i = 0; i < cardOptionMax; i++){
        selectedCardIndex.push(cards.indexOf(selectedCard[i]));
    }
    document.getElementById("card-input-textarea").value = selectedCardIndex;
}

function selectQuestionAtRandom(questions, ammount){
    return chooseAtRandom(questions, ammount)
}

function selectCardAtRandom(cards, ammount){
    return chooseAtRandom(cards, ammount)
}

function chooseAtRandom(array, count) {
    // countが設定されていない場合は1にする
    var count = count || 1;
    var arrayData = Array.from(array);
    var result = [];
    for (var i = 0; i < count; i++) {
        var arrayIndex = Math.floor(Math.random() * arrayData.length);
        result[i] = arrayData[arrayIndex];
        // 1回選択された値は削除して再度選ばれないようにする
        arrayData.splice(arrayIndex, 1);
    }
    return result;
}

function createCards(letters){
    cards = [];
    for(var i = 0; i < letters.length; i ++){
        for(var j = 0; j < letters.length; j ++){
            cards.push(letters[i] + "" + letters[j]);
        }
    }
    if(littletsu){
        for(var i = 0; i < letters.length; i ++){
            for(var j = 0; j < letters.length; j ++){
                cards.push(letters[i] + "ッ" + letters[j]);
            }
        }
    }
    if(nobashibo){
        for(var i = 0; i < letters.length; i ++){
            for(var j = 0; j < letters.length; j ++){
                cards.push(letters[i] + "ー" + letters[j]);
            }
        }
    }
}

function questionMaxSettingButton(){
    questionOptionMax = Number(document.getElementById("question-max-setting-textarea").value)
    questionRandomButton();
}

function cardMaxSettingButton(){
    cardOptionMax = Number(document.getElementById("card-max-setting-textarea").value)
    cardRandomButton();
}

function includeLittletsuSettingCheckbox(){
    littletsu = document.getElementById("include-littletsu-setting").checked
    createCards(letter);
    cardRandomButton();
}

function includeNobashiboSettingCheckbox(){
    nobashibo = document.getElementById("include-nobashibo-setting").checked
    createCards(letter);
    cardRandomButton();
}

function extendCardSettingCheckbox(){
    if(document.getElementById("extend-card-setting").checked){
        letter = all_letter;
    }else{
        letter = basic_letter;
    }
    createCards(letter);
    cardRandomButton();
}

function tohoSettingCheckbox(){
    if(document.getElementById("toho-setting").checked){
        questions = toho_questions;
    }else{
        questions = basic_questions;
    }
    questionRandomButton();
}

function makeThis(){
    var correct = Math.floor(Math.random() * questionOptionMax);
    for(var i = 0; i < questionOptionMax; i ++){
        var target = "option" + i;
        document.getElementById(target).style.color = "black";
    }
    var target = "option" + correct;
    document.getElementById(target).style.color = "red";
}

questions = basic_questions;
letter = basic_letter;
createCards(letter);
questionRandomButton();
cardRandomButton();