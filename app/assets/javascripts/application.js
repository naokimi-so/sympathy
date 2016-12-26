//= require jquery
//= require jquery_ujs
//= require_tree .

var milkcocoa = MilkCocoa.connectWithApiKey('eggix5vdqzf.mlkcca.com', 'API_Key', 'API_Secret');
var milkcocoa = new MilkCocoa('eggix5vdqzf.mlkcca.com');

// 'messages'というデータストア名のデータストアを作成（取得）
var ds = milkcocoa.dataStore('messages');

// titleが'hoge'、contentが'huga'というデータを送信（保存はされない）
ds.send({title : 'hoge', content : 'huga'});
// titleが'hoge'、contentが'huga'というデータを送信＆保存
ds.push({title : 'hoge', content : 'huga'});

ds.on('send', function() {
  console.log('sendされました！');
});

ds.on('send', function(sended) {
  console.log('sendされました！titleは'+sended.value.title+'contentは'+sended.value.content+'です！');
});
