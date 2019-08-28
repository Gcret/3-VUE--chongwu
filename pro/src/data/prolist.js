import Mock from 'mockjs';


var Random = Mock.Random;
	Random.extend({
		pinglun:function(data){
			var pinglun=['主人要坐急救车走，四条狗狗跟着一起上了车，怎么撵都撵不下来 ！','一看就知道是亲生的','一脸嫌弃的高冷基','近日，菲律宾，一男孩的拖鞋掉到泥地。一只平时和他关系很好的鸭子挺身而出，用嘴巴叼起鞋子，试图爬上土坡将鞋子还给男孩。坡太陡，鞋子数次从它嘴里滑落，鸭子始终没有放弃，最终将鞋子叼回给男孩','如果感到快乐，你就说声“喵~”，哈哈哈哈，阔爱','就是我咬的，咋滴啦','跟你朋友说我有你喝水的视频，看看他会不会打你[允悲]','被这小背景萌的一脸血','中通小哥又带着出来送快递，还剃了毛，被迫营业还叹气','路过的小流浪狗饿得不行了，进来要吃的，但是它很有礼貌，食物在手里它不会下口','下雨唯一可以避雨的地方，唯一地面没有湿的地方','上海的吴奶奶，虽然年过八旬，还是坚持每天遛狗。人们问她为什么总是一个人照顾狗。她总笑着说，儿子去美国了，这是他的狗，我得帮他带好。可有一次，这只狗病了，平日开朗的吴奶奶，突然就哭了。这一次，老奶奶说了实情','震惊！俄罗斯监控实拍，黑熊竟在社区内充当垃圾箱管理员，每晚乖乖的把社区内人们的生活垃圾妥善处理好…再把垃圾箱推到合适位置？','主人寻猫悬赏4千多，花了一个月找到猫咪，猫咪却不认识主人了】很多狗狗猫咪没看管好离开家后，都会因此与主人分隔两地，过上流浪的生活。一位名叫Johnson的主人最近就一度失去了家里的猫咪。','被疼爱的宝宝真的连眼神都不一样了呢！！！要一直这么开心啊！大橘','喵：铲屎的，快开门啊，我给你带好吃的回来了~你怎么不开门，难道你不爱我了吗？','铲屎官：你看人家柴犬在洗脚，而你却在游泳，你丢不丢人？','别看了！这就是你家，下次看你还彻夜不归？惊不惊讶？意不意外？回家不易的喵']
			return this.pick(pinglun)
		},
		imgs:function(data){
			var imgs=['http://img.mp.itc.cn/upload/20170720/ad6d27ed1d464415b1fa9c1a2622e3d8_th.jpg','http://img.mp.itc.cn/upload/20170720/b637b7ae503443b3976189651f8841d8_th.jpg','http://img.mp.itc.cn/upload/20170720/3fccb897a93e452ab827da642a79be7a_th.jpg','http://img.mp.itc.cn/upload/20170720/5b83936fe07a48e5a29ba73c57774e01_th.jpg','http://img.mp.itc.cn/upload/20170720/cbcc09087b384bbfa22d8292ee605df0_th.jpg','http://img.mp.itc.cn/upload/20170720/1cf64b35be594ea2bec4a978b554c5c5_th.jpg','http://img.mp.itc.cn/upload/20170720/4093689ec45a42728158135061c7df68_th.jpg','http://img.mp.itc.cn/upload/20170720/be6fe30efed44d8f90ab32d33ba18273_th.jpg','http://img.mp.itc.cn/upload/20170720/2704f0f23b2c407f9f5e0156defde77e_th.jpg','http://img.mp.itc.cn/upload/20170720/2704f0f23b2c407f9f5e0156defde77e_th.jpg','http://img.goupu.com.cn/upload/201611/07/164720241.jpg','http://img.goupu.com.cn/upload/201804/17/164015781.jpg','http://img.goupu.com.cn/upload/201804/25/143721941.jpg','http://img.goupu.com.cn/upload/201803/30/152752171.jpg','http://img.goupu.com.cn/upload/201803/26/145313421.jpg','http://img.goupu.com.cn/upload/201611/07/134929181.jpg','http://img.goupu.com.cn/upload/201611/07/164929351.jpg']
			return this.pick(imgs)
		}
	})



var data = Mock.mock({
	'list|8-12':[
	{
		'imgs':'@imgs',
		'cname':'@cname()',
		'pinglun':'@pinglun'
		
	}	
	]
})

Mock.mock('http://www.baidu.com/prolist',data)

var Random = Mock.Random;
	Random.extend({
		pinglun:function(data1){
			var pinglun=['主人要坐急救车走，四条狗狗跟着一起上了车，怎么撵都撵不下来 ！','一看就知道是亲生的','一脸嫌弃的高冷基','近日，菲律宾，一男孩的拖鞋掉到泥地。一只平时和他关系很好的鸭子挺身而出，用嘴巴叼起鞋子，试图爬上土坡将鞋子还给男孩。坡太陡，鞋子数次从它嘴里滑落，鸭子始终没有放弃，最终将鞋子叼回给男孩','如果感到快乐，你就说声“喵~”，哈哈哈哈，阔爱','就是我咬的，咋滴啦','跟你朋友说我有你喝水的视频，看看他会不会打你[允悲]','被这小背景萌的一脸血','中通小哥又带着出来送快递，还剃了毛，被迫营业还叹气','路过的小流浪狗饿得不行了，进来要吃的，但是它很有礼貌，食物在手里它不会下口','下雨唯一可以避雨的地方，唯一地面没有湿的地方','上海的吴奶奶，虽然年过八旬，还是坚持每天遛狗。人们问她为什么总是一个人照顾狗。她总笑着说，儿子去美国了，这是他的狗，我得帮他带好。可有一次，这只狗病了，平日开朗的吴奶奶，突然就哭了。这一次，老奶奶说了实情','震惊！俄罗斯监控实拍，黑熊竟在社区内充当垃圾箱管理员，每晚乖乖的把社区内人们的生活垃圾妥善处理好…再把垃圾箱推到合适位置？','主人寻猫悬赏4千多，花了一个月找到猫咪，猫咪却不认识主人了】很多狗狗猫咪没看管好离开家后，都会因此与主人分隔两地，过上流浪的生活。一位名叫Johnson的主人最近就一度失去了家里的猫咪。','被疼爱的宝宝真的连眼神都不一样了呢！！！要一直这么开心啊！大橘','喵：铲屎的，快开门啊，我给你带好吃的回来了~你怎么不开门，难道你不爱我了吗？','铲屎官：你看人家柴犬在洗脚，而你却在游泳，你丢不丢人？','别看了！这就是你家，下次看你还彻夜不归？惊不惊讶？意不意外？回家不易的喵']
			return this.pick(pinglun)
		},
		imgs:function(data1){
			var imgs=['http://img.mp.itc.cn/upload/20170720/ad6d27ed1d464415b1fa9c1a2622e3d8_th.jpg','http://img.mp.itc.cn/upload/20170720/b637b7ae503443b3976189651f8841d8_th.jpg','http://img.mp.itc.cn/upload/20170720/3fccb897a93e452ab827da642a79be7a_th.jpg','http://img.mp.itc.cn/upload/20170720/5b83936fe07a48e5a29ba73c57774e01_th.jpg','http://img.mp.itc.cn/upload/20170720/cbcc09087b384bbfa22d8292ee605df0_th.jpg','http://img.mp.itc.cn/upload/20170720/1cf64b35be594ea2bec4a978b554c5c5_th.jpg','http://img.mp.itc.cn/upload/20170720/4093689ec45a42728158135061c7df68_th.jpg','http://img.mp.itc.cn/upload/20170720/be6fe30efed44d8f90ab32d33ba18273_th.jpg','http://img.mp.itc.cn/upload/20170720/2704f0f23b2c407f9f5e0156defde77e_th.jpg','http://img.mp.itc.cn/upload/20170720/2704f0f23b2c407f9f5e0156defde77e_th.jpg','http://img.goupu.com.cn/upload/201611/07/164720241.jpg','http://img.goupu.com.cn/upload/201804/17/164015781.jpg','http://img.goupu.com.cn/upload/201804/25/143721941.jpg','http://img.goupu.com.cn/upload/201803/30/152752171.jpg','http://img.goupu.com.cn/upload/201803/26/145313421.jpg','http://img.goupu.com.cn/upload/201611/07/134929181.jpg','http://img.goupu.com.cn/upload/201611/07/164929351.jpg']
			return this.pick(imgs)
		}
	})



var data1 = Mock.mock({
	'list|6-10':[
	{
		'imgs':'@imgs',
		'cname':'@cname()',
		'pinglun':'@pinglun'
		
	}	
	]
})

Mock.mock('http://www.baidu.com/prolist1',data1)

var Random = Mock.Random;
	Random.extend({
		pinglun:function(data2){
			var pinglun=['猫咪比较爱干净,其实宠物是看你喜欢什么,不是哪个比较干净','不养最干净.','这个太萌了不过有小宝宝还是不要养宠物哦,有细小病毒','.趴着睡.趴着是一种“高机动性”睡姿，能让狗狗在需要马上起来时，立刻一跃而起','侧躺着睡，是绝大多数狗狗的选择，因为这种睡姿能让狗狗全身心方松，将狗狗全身重心转移到大地上，是最能让狗狗休息好的睡姿','十分警惕的狗狗，不会将自己的肚皮露在外面，更不要说平躺着睡觉了','平时那么乖巧听话的狗狗，在某些时候却对主人超级凶，并且龇牙咧嘴，一副想要咬人的样子，这对于悉心照料养了多年狗狗的主人来说无疑是难过的。','对于狗狗来说，吃饱喝足是最重要的。当你在它吃东西的时候靠近，它会以为你要抢它的食物，就呲牙咧嘴的警告你。','狗狗将你给它准备的玩具、狗窝、磨牙棒……视为自己的私狗物品','占有欲强的狗子，会不允许别的毛孩子靠近自己的所有物，连主人也不行','当你带了新的“家庭成员”回家，而你又对新成员十分友善，忽略了它的存在。狗狗就会开始吃醋，呲牙咧嘴让你注意到它的存在。','母狗在生了宝宝之后，可能会在主人靠近的时候凶主人。狗狗对于自己的孩子有着非常强的保护欲，不允许任何人来伤害它们。主人要记得多陪狗狗玩耍，增进彼此的感情哦。','这确实是最难做到的事情，但它比其他任何事情都有效。记住，你的狗狗需要你的关注。所以，即使你在纠正它，你还是给了它想要的。摆脱因为需求而狂叫的最好方法就是忽略它。一旦你有几秒钟的安静时间了，给狗狗它想要的东西——表扬、零食、玩具、注意力等等。这会开始灌输给狗狗安静才能获得它想要的这种概念']
			return this.pick(pinglun)
		},
		imgs:function(data2){
			var imgs=['http://img.mp.itc.cn/upload/20170720/ad6d27ed1d464415b1fa9c1a2622e3d8_th.jpg','http://img.mp.itc.cn/upload/20170720/b637b7ae503443b3976189651f8841d8_th.jpg','http://img.mp.itc.cn/upload/20170720/3fccb897a93e452ab827da642a79be7a_th.jpg','http://img.mp.itc.cn/upload/20170720/5b83936fe07a48e5a29ba73c57774e01_th.jpg','http://img.mp.itc.cn/upload/20170720/cbcc09087b384bbfa22d8292ee605df0_th.jpg','http://img.mp.itc.cn/upload/20170720/1cf64b35be594ea2bec4a978b554c5c5_th.jpg','http://img.mp.itc.cn/upload/20170720/4093689ec45a42728158135061c7df68_th.jpg','http://img.mp.itc.cn/upload/20170720/be6fe30efed44d8f90ab32d33ba18273_th.jpg']
			return this.pick(imgs)
		}
	})



var data2 = Mock.mock({
	'list|5-8':[
	{
		'imgs':'@imgs',
		'cname':'@cname()',
		'pinglun':'@pinglun'
		
	}	
	]
})

Mock.mock('http://www.baidu.com/prolist2',data2)


var Random = Mock.Random;
	Random.extend({
		pinglun:function(data3){
			var pinglun=['这个太萌了不过有小宝宝还是不要养宠物哦,有细小病毒','.趴着睡.趴着是一种“高机动性”睡姿，能让狗狗在需要马上起来时，立刻一跃而起','侧躺着睡，是绝大多数狗狗的选择，因为这种睡姿能让狗狗全身心方松，将狗狗全身重心转移到大地上，是最能让狗狗休息好的睡姿','十分警惕的狗狗，不会将自己的肚皮露在外面，更不要说平躺着睡觉了','平时那么乖巧听话的狗狗，在某些时候却对主人超级凶，并且龇牙咧嘴，一副想要咬人的样子，这对于悉心照料养了多年狗狗的主人来说无疑是难过的。','对于狗狗来说，吃饱喝足是最重要的。当你在它吃东西的时候靠近，它会以为你要抢它的食物，就呲牙咧嘴的警告你。','狗狗将你给它准备的玩具、狗窝、磨牙棒……视为自己的私狗物品','占有欲强的狗子，会不允许别的毛孩子靠近自己的所有物，连主人也不行','当你带了新的“家庭成员”回家，而你又对新成员十分友善，忽略了它的存在。狗狗就会开始吃醋，呲牙咧嘴让你注意到它的存在。','母狗在生了宝宝之后，可能会在主人靠近的时候凶主人。狗狗对于自己的孩子有着非常强的保护欲，不允许任何人来伤害它们。主人要记得多陪狗狗玩耍，增进彼此的感情哦。','这确实是最难做到的事情，但它比其他任何事情都有效。记住，你的狗狗需要你的关注。所以，即使你在纠正它，你还是给了它想要的。摆脱因为需求而狂叫的最好方法就是忽略它。一旦你有几秒钟的安静时间了，给狗狗它想要的东西——表扬、零食、玩具、注意力等等。这会开始灌输给狗狗安静才能获得它想要的这种概念']
			return this.pick(pinglun)
		},
		imgs:function(data3){
			var imgs=['http://img.mp.itc.cn/upload/20170720/ad6d27ed1d464415b1fa9c1a2622e3d8_th.jpg','http://img.mp.itc.cn/upload/20170720/b637b7ae503443b3976189651f8841d8_th.jpg','http://img.mp.itc.cn/upload/20170720/3fccb897a93e452ab827da642a79be7a_th.jpg','http://img.mp.itc.cn/upload/20170720/5b83936fe07a48e5a29ba73c57774e01_th.jpg','http://img.mp.itc.cn/upload/20170720/cbcc09087b384bbfa22d8292ee605df0_th.jpg','http://img.mp.itc.cn/upload/20170720/1cf64b35be594ea2bec4a978b554c5c5_th.jpg','http://img.mp.itc.cn/upload/20170720/4093689ec45a42728158135061c7df68_th.jpg','http://img.mp.itc.cn/upload/20170720/be6fe30efed44d8f90ab32d33ba18273_th.jpg']
			return this.pick(imgs)
		}
	})



var data3 = Mock.mock({
	'list|5-8':[
	{
		'imgs':'@imgs',
		'cname':'@cname()',
		'pinglun':'@pinglun'
		
	}	
	]
})

Mock.mock('http://www.baidu.com/prolist3',data3)


var Random = Mock.Random;
	Random.extend({
		pinglun:function(data4){
			var pinglun=['猫咪看得到奇怪的东西吗?那并不是猫咪看到了什么奇怪的行为，只是猫咪的知觉过敏症侯群，它是一种精神的异常。','猫喜欢在隐蔽的地方上厕所?应该有很多铲屎官都是这样认为的，但这其实是要看猫咪的主人，有的猫就喜欢在你去清猫砂盆的时候冲进来上厕所，也有的猫有喜欢乱尿尿的行为，但是它们大多乱尿尿的地方都是很暴露的位置(例如:自己的床上，沙发上等)，对于这个说法应该并不是完全正确的','猫咪为什么跳到高的地方?猫咪每一天都会巡视领土，跳到高处，俯看，它每天游走都有它的路线，其实这是它的天性，是你无法用训练改变它们的','刚买的猫咪关笼子里直到亲人才放出来,不得不说这种方法真的非常不好。刚到一个陌生的环境，本来就非常的害怕了，然后又被关进笼子里，虽然有水有吃的，但是谁会愿意这样?','猫咪是否可以喝牛奶？其实许多猫主人知道喂猫喝牛奶是不大好的事情，却又认为只有牛奶才能给猫咪丰富的营养。但其实不然，由于猫对乳糖耐性的问题，每天早上让猫喝牛奶会让它肠胃不舒服','猫咪总是喜欢破坏东西是怎么回事呢？猫咪非常敏感，作敏感到只要作息时间或者生活方式发生微妙改变，猫咪都会改变它原本的行为，另外，主人的情绪对猫咪的影响也是非常之大的。所以这些都有可能成为它搞破坏，发泄郁闷心情的动机','猫咪发情应不应该去绝育？猫咪一直滚动、大叫、烦燥、不吃东西，这是猫咪发情时的表现，这种行为一般会持续半个月左右的时间。解决这种问题唯一的办法就是把猫咪送去绝育，有的主人可能会觉得，剥夺猫咪的生育权利十分不“猫道”。','对于家中已经有猫的家庭，在幼猫要来到家前，应注意些什么？当再来一只猫时，家里原有的那一只有时会离家出走，所以要更加疼爱原有的那一只。猫虽然不会像犬那样按强弱排序，但它们的优先权意识十分明确。所以主人一定要注意让先前的那一只有优先权，并注意不要让新来的猫继着先前的那一只','对于没有养猫的家庭，在幼猫要来到家中前，应注意些什么？习惯于定居生活的猫不喜欢因换地方而带来的环境变化，这时的幼猫会在为自己要去一个陌生的地方而感到不安。在幼猫初来的第一天，要让它四处查看，使它确信这里是可以放心生活的地方','为什么要从小开始训练幼猫？幼猫需要调练才能成长为懂得社交礼仪而又容易接近的成年猫。幼猫必须学会学会如何探索周围环境、如何与其他幼猫一起玩耍、如何要弄各种玩具，从而启发它们在进入新环境后充满自信心。']
			return this.pick(pinglun)
		},
		imgs:function(data4){
			var imgs=['http://www.ixiupet.com/uploads/allimg/150309/2-150309205212.jpg','http://www.ixiupet.com/uploads/allimg/150403/2-1504031J056.jpg','http://www.ixiupet.com/uploads/allimg/150403/2-1504031S443.jpg','http://www.ixiupet.com/uploads/allimg/150603/3-150603112932.jpg','http://www.ixiupet.com/uploads/allimg/150603/3-150603114313.jpg','http://www.ixiupet.com/uploads/allimg/150528/3-15052Q03345.jpg','http://www.ixiupet.com/uploads/allimg/150409/3-150409115553.jpg','http://www.ixiupet.com/uploads/allimg/150603/3-150603164506.jpg','http://www.ixiupet.com/uploads/allimg/150603/3-150603100213.jpg','http://www.ixiupet.com/uploads/allimg/150405/2-150405111518.jpg']
			return this.pick(imgs)
		}
	})



var data4 = Mock.mock({
	'list|5-8':[
	{
		'imgs':'@imgs',
		'cname':'@cname()',
		'pinglun':'@pinglun'
		
	}	
	]
})

Mock.mock('http://www.baidu.com/prolist4',data4)