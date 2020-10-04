// 使用状态机在一个字符串中找到abcdef


// 使用函数实现状态机
function match(string) {
// state表示当前状态
    let state = start;
    for(let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if(c === "a")
        return foundA;
    else 
        return start;
}

// end状态永远返回end 这样这个状态叫做一个trap
function end(c) {
    return end;
}

function foundA(c){
    if(c === "b")
        return foundB;
    else
// 加入start(c) 如果不是这个函数的字符，则将这个字符返回给第一条检验，从第一条重新检验
        return start(c);
}

function foundB(c){
    if(c === "c")
        return foundC;
    else
        return start(c);
}

function foundC(c){
    if(c === "d")
        return foundD;
    else
        return start(c);
}

function foundD(c){
    if(c === "e")
        return foundE;
    else
        return start(c);
}

function foundE(c){
    if(c === "f")
        return end;
    else
        return start(c);
}

console.log(match("I mabcdefgoot"));