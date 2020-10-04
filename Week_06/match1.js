// 在一个字符串中找到a

function match(string){
    let foundA = false;
    for(let c of string){
        if(c == "a")
            return true;
        else if(foundA && c == "b")
        return true;
        else 
        foundA = false;
    }
    return false;
}

match("I Am AQUa")