 // KMP指 查字符串里有没有另一个字符串
 //  匹配 source 里面是否有pattern
 // 
 function kmp(source, pattern) {
     // 计算table
     let table = new Array(pattern.length).fill(0);

     {
         let i = 1,
             j = 0;
         while (i < pattern.length) {          // a a b a a a c
             if (pattern[i] === pattern[j]) { //  
                 ++j, ++i;                    //                      
                 table[i] = j;                //
             } else {
                 if (j > 0)
                     j = table[j];
                 else
                     ++i;
             }
         }
         console.log(table);

     } {
         let i = 0,
             j = 0;
         while (i < source.length) {
             if (pattern[j] === source[i]) {
                 ++i, ++j;
             } else {
                 if (j > 0)
                     j = table[j];
                 else
                     i++;
             }
             if(j === pattern.length)
             return true;
         }
         return false;
         
     }
     // abcdabce
     // aabaaac

        // 匹配
     // a c b a a a c c  a a a a a a    a a b a a a c
     // 0 0 0 0 1 2 2    0 0 1 2 3 4 5  0 0 1 0 1 2 2
    }
console.log( kmp("ccc", "aaabb"));