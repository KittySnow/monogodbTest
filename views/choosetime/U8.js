function animals(...types){
    console.log(types)
}

var State = (param) => {
    switch (param){
        case 1: return [0+x,0+y,32+x,32+y,32,32];break; //一个单独的
        case 2: return [16+x,48+y,48+x,80+y,32,32];break; //四周都有的
        case 3: return [0+x,32+y,32+x,64+y,32,32];break; //四角 上左
        case 4: return [0+x,64+y,32+x,96+y,32,32];break; // 上右
        case 5: return [32+x,32+y,64+x,64+y,32,32];break;// 下左
        case 6: return [32+x,64+y,64+x,96+y,32,32];break;// 下右

        case 7: return [0+x,48+y,32+x,80+y,32,32];break;// 左条边界
        case 8: return [32+x,64+y,64+x,96+y,32,32];break;// 右条边界
        case 9: return [32+x,64+y,64+x,96+y,32,32];break;// 上条边界
        case 10: return [32+x,64+y,64+x,96+y,32,32];break;// 下条边界
    }
}