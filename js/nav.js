// ウォッチリスト自動追加は非アクティブなタブになった場合にsettimerが24時間になったりメモリリークが起こるため新窓で開くようにした。2024/12/30
$(function(){
	var data = `
<div class="nojq" id="wpadminbar">
	<div aria-label="ツールバー" class="quicklinks" id="wp-toolbar" role="navigation">
		<ul class="ab-top-menu" id="wp-admin-bar-root-default">
			<li id="myauc">
				<a class="ab-item" href="https://auctions.yahoo.co.jp/my">マイオク</a>
			</li>
			<li>
				<a class="ab-item" href="https://support.yahoo-net.jp/form/s/dirauctionredress">いたずら入札申告</a>
			</li>
			<li>
				<a class="ab-item" href="https://auctions.yahoo.co.jp/jp/show/prefs_blacklist">ブラックリスト</a>
			</li>
			<li>
				<a class="ab-item" href="https://salesmanagement.yahoo.co.jp/list">売上金</a>
			</li>
			<li>
				<a class="ab-item" href="https://auctions.yahoo.co.jp/my/selling?s1=bids&o1=d">出品中</a>
			</li>
			<li>
				<a class="ab-item" href="https://auctions.yahoo.co.jp/my/closed?hasWinner=1">出品終了(落札者あり)</a>
			</li>
			<li>
				<a class="ab-item" href="https://auctions.yahoo.co.jp/my/closed?hasWinner=0">出品終了(落札者なし)</a>
			</li>
		</ul>
		<ul class="ab-top-secondary ab-top-menu" id="wp-admin-bar-top-secondary">
			<li class="menupop" id="myaccount">
				<span aria-haspopup="true" class="ab-item" href=""></span>
			</li>
		</ul>
</div>`;
$(function(){
	$("body").append($(data));
	$('.mhdPcUserName__link').prependTo('#myaccount .ab-item');
	$('#myaccount .ab-item .mhdPcUserName__link').addClass('ab-item');

	$("#wpadminbar").click(function () {
		var position = 0;
		var speed = 600;
		$("html,body").animate({scrollTop:position},speed);
      });
	});
});
