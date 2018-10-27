let agent = require('./agent'),
    conf = require('./conf');


(async function(){
    
    let ag;
    try{
        ag = await new agent(conf).login();
        // let area = await ag.getArea();
        // console.log(area);
        // let items = await ag.getItems();
        // console.log(items);
        // let phone = await ag.getPhone({
        //     itemId:71132,
        // });
        // console.log(phone);
        // let msg = await ag.getMessage({
        //     phone:15707139117,
        //     itemId:71132
        // });
        // console.log(msg);
        // msg = await ag.getMessage({
        //     phone:15707139117,
        //     itemId:71132
        // });
        // console.log(msg);
    
        // let rel = await ag.releasePhone('15707139117-71132;');
        // console.log(rel);
    }catch(e){
        console.error(e);
    }finally{
        let exit = await ag.exit();
        console.log(exit);
    }
    console.log('finish');
})();