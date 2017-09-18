var myNum: number =  5;
var myString: string = "Hello Universe";
let myArr: number[] = [1,2,3,4];
let myObj  = { name:'Bill'};
let anythingVariable: any = "Hey";
let anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true, true];
var arrayTwo: any[] = [1, 'abc', true, 2];
const myObj = {
     x: 5, y: 10
};
// object constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());


var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction() {
    console.log("Hello World");
    return;
}


function sendingErrors(message: string): never {
	throw new Error(message);
}
