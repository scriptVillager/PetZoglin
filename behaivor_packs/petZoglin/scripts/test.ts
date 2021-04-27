import * as GameTest from "GameTest";
import { BlockLocation,  Commands } from "Minecraft";
import Zoglin from "scripts/zoglin.js";
        
function test(test : GameTest.Helper) {
    let zoglinEntityType = "zoglin";
    let skeletonEntityType = "skeleton";
    
    test.spawn(zoglinEntityType, new BlockLocation(2, 2, 3));
    test.spawn(skeletonEntityType, new BlockLocation(5, 2, 3));
    
    // let zog = Zoglin.create(test, new BlockLocation(2,1,1));

    // zog.tame();

    Commands.run("say hello typescript!");

    test.succeedWhen( ()=> {
            test.assertEntityNotPresentInArea(skeletonEntityType);
        }
    );
}
        
GameTest.register("petZoglin", "test", test).structureName("gametests:basic");  


GameTest.register("petZoglin", "test1", (test) => {


});


GameTest.register("petZoglin", "test1", (test : GameTest.Helper) => {


});
