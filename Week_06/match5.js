// 使用状态机在一个字符串中找到abababx
function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state = end;
}

function start(c) {
    if (c === "a")
        return foundA
    else
        return start(c);
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === "b")
        return foundB
    else
        return start(c);
}

function foundB(c) {
    if (c === "a")
        return foundA2
    else
        return start(c);
}

function foundA2(c) {
    if (c === "b")
        return foundB2
    else
        return start(c);
}

function foundB2(c) {
    if (c === "a")
        return foundA3
    else
        return start(c);
}

function foundA3(c) {
    if (c === "b")
        return foundX
    else
        return start(c);
}

function foundX(c) {
    if (c === "x")
        return end;
    else
        return start(c);
}

console.log(match("hhabababc"));
// abababx