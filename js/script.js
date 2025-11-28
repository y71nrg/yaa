// 20251119-
// 出品中
if(document.URL.match("https://auctions.yahoo.co.jp/my/selling")) {
	$('#itm').css('visibility','hidden');
	$('.gv-l-wrapper--responsive--qFnoPnxFTHSdyYj4nn_U .gv-l-sub--narrow--HpEw7z8HsI5wwgIlZCKm').hide();
	setTimeout(function(){
		$('#itm').css('visibility','visible');
		$("a.gv-Button--yimO_UuGzSZbwqISHVu4:contains(注目させる)").addClass("hide");
		$('#itm .bXJfEG .gv-u-fontSize12--s5WnvVgDScOXPWU7Mgqd').each(function(){
			var txt = $(this).html();
			$(this).html(
				txt.replace(/商品ID：/g,"")
			);
		});
	},500);
}
// /出品中

// 出品終了分
if(document.URL.match("hasWinner=")) {
	$('.gv-l-wrapper--responsive--qFnoPnxFTHSdyYj4nn_U .gv-l-sub--narrow--HpEw7z8HsI5wwgIlZCKm').hide();
	$('#itm').css('visibility','hidden');
	$('#at').hide();
	$(function(){

		setTimeout(function(){
			$('#itm').css('visibility','visible');
			$('.gv-u-fontSize14--POG6xd1dZ1EIvaGPlqub').unwrap();
			$('.gv-u-marginB1--MZ6vKrTtOZQ1QLeB0Yg_').css('display','none');
			$(".gv-Button--yimO_UuGzSZbwqISHVu4:contains(評価)").css('display','none');
			$('.kvHBCK').css('width','130px');
			$('.gv-Stack--vSpace6--xdyPQKHCEpawm49ykMjA>:not(style)+:not(style)').css({'cssText': 'margin-top: 0 !important;'});
			$(".gv-Button--yimO_UuGzSZbwqISHVu4:contains(再出品)").css('margin-left','5px');
			$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY').each(function(){
				var txt = $(this).html();
				$(this).html(
					txt.replace(/発送をしてください/g,"要発送")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/発送完了しました/g,"発送完了")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/落札者からの入金待ちです/g,"未入金")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/受取連絡がされました/g,"受取連絡済")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/送料を連絡してください/g,"送料連絡")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/落札者からの連絡待ちです/g,"───")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/取引メッセージがあります/g,"取メ要警戒")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/商品ID：/g,"")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/別の商品でまとめて取引依頼が来ました/g,"要ま拒否")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/この商品でまとめて取引依頼が来ました/g,"要ま拒否")
				);
				var txt = $(this).html();
				$(this).html(
					txt.replace(/まとめて取引依頼が来ました/g,"要ま拒否")
				);
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY:contains(要ま拒否)').css('background','#f9d1d8');
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY:contains(要発送)').css('background','#fce7eb');
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY:contains(送料連絡)').css('background','#fce7eb');
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY:contains(発送完了)').css('background','#eaf1ea');
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY:contains(受取連絡済)').css('background','#eaf1ea');
				$('#itm .gv-u-fontSize12--s5WnvVgDScOXPWU7Mgqd:contains(要ま拒否)').css('width','50px');
				$('#itm .gv-Stack--u0Jmo3VPNKDclxaV81yY .gv-u-fontSize12--s5WnvVgDScOXPWU7Mgqd:contains(取メ要警戒)').css({'width' : '100%', 'text-align' : 'center', 'color' : '#fff', 'background' : '#2f2c2b', 'border-radius' : '5px', 'margin-left' : '-4px'});
				// $('.gQIkms:contains(取引メッセージがあります)').hide();
			});
		},500);
	});
}
// /出品終了分

// ウォッチリスト
if(document.URL.match("https://auctions.yahoo.co.jp/my/watchlist")) {
	$('#itm').css('visibility','hidden');
	$('.gv-l-wrapper--responsive--qFnoPnxFTHSdyYj4nn_U .gv-l-sub--narrow--HpEw7z8HsI5wwgIlZCKm').hide();
	setTimeout(function(){
		$('#itm').css('visibility','visible');
		$("#itm .yhDYa").css('min-width','120px');
		$('#itm .cuPpgL .gv-u-fontSize12--s5WnvVgDScOXPWU7Mgqd').each(function(){
			var txt = $(this).html();
			$(this).html(
				txt.replace(/商品ID：/g,"")
			);
		});
	},500);
}
// /ウォッチリスト

if(document.URL.match("https://auctions.yahoo.co.jp/my/watchlist")) {
	$('.gv-l-wrapper--responsive--qFnoPnxFTHSdyYj4nn_U .gv-l-sub--narrow--HpEw7z8HsI5wwgIlZCKm').hide();
}
// /20251119-
