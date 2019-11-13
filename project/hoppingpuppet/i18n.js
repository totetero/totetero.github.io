
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
(function(){
	"use strict";
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------

	const i18nList = {};

	// 日本語
	i18nList["ja"] = {
		"i18n_spanId_getApp_caption":          "いますぐアプリを手に入れよう!!",
		"i18n_spanId_getApp_stop":             "アプリ版の公開は終了いたしました",
		"i18n_spanId_getWeb_caption":          "アプリで遊べない人はWeb版を遊ぼう!!",
		"i18n_spanId_getWeb_release":          "体験版は廃止してweb版も全機能解放したよ。",
		"i18n_spanId_getWeb_asterisk_sound":   "※Web版はなんとなく無音です。",
		"i18n_spanId_getWeb_asterisk_webgl":   "※ブラウザがwebGLに対応している必要があります。最新のならたぶんいける。",
		"i18n_spanId_getWeb_asterisk_reset":   "※ゲームが上手く動かない方はデータをリセットしてください。",
		"i18n_spanId_getWeb_asterisk_appData": "※アプリへのデータの引き継ぎはできません。",
		"i18n_spanId_getWeb_button_reset":     "データをリセット",
		"i18n_spanId_getWeb_button_cheat":     "すべてを解放",
		"i18n_spanId_fullsize_caption":        "画面が小さいと感じたら",
		"i18n_spanId_fullsize_button":         "フルサイズ",
		"i18n_spanId_credit_caption":          "クレジット",
		"i18n_spanId_credit_game":             "ゲーム作成",
		"i18n_spanId_credit_sound":            "音楽効果音",
		"i18n_spanId_credit_asterisk_sound":   "※音楽効果音付きのバージョンは現在公開されていません。",
		"i18n_spanId_button_back":             "戻る",
	};

	// 英語
	i18nList["en"] = {
		"i18n_spanId_getApp_caption":          "get app now!!",
		"i18n_spanId_getApp_stop":             "closed",
		"i18n_spanId_getWeb_caption":          "web version",
		"i18n_spanId_getWeb_release":          "",
		"i18n_spanId_getWeb_asterisk_sound":   "",
		"i18n_spanId_getWeb_asterisk_webgl":   "",
		"i18n_spanId_getWeb_asterisk_reset":   "",
		"i18n_spanId_getWeb_asterisk_appData": "",
		"i18n_spanId_getWeb_button_reset":     "reset",
		"i18n_spanId_getWeb_button_cheat":     "cheat",
		"i18n_spanId_fullsize_caption":        "more bigger!!",
		"i18n_spanId_fullsize_button":         "full size",
		"i18n_spanId_credit_caption":          "credit",
		"i18n_spanId_credit_game":             "game creator",
		"i18n_spanId_credit_sound":            "sound creator",
		"i18n_spanId_credit_asterisk_sound":   "",
		"i18n_spanId_button_back":             "back",
	};

	// 言語判定
	let langCode = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage);
	if(langCode == null){langCode = "en";}
	langCode = langCode.substr(0, 2);
	if(i18nList[langCode] == null){langCode = "en";}
	const i18n = i18nList[langCode];

	// cssルール作成
	const style = document.createElement('style');
	style.type = "text/css";
	document.head.appendChild(style);
	const sheet = style.sheet;
	if(langCode != "ja"){sheet.insertRule(".i18n_ja{display:none;}", sheet.cssRules.length);}
	if(langCode != "en"){sheet.insertRule(".i18n_en{display:none;}", sheet.cssRules.length);}

	window.addEventListener("DOMContentLoaded", function(){
		// span要素のid検索
		for(let key in i18n){
			if(key.substr(0, 12) == "i18n_spanId_"){
				const span = document.getElementById(key);
				if(span == null){continue;}
				span.innerHTML = i18n[key];
			}
		}
	}, false);

	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
})();
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
