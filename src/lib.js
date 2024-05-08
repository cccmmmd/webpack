// let x = 3;
// let y = 5;
// let data = x*y;
// export {x,y}
// export default data;
// export {data as default, x,y};

const lib = {
    add:function(x,y){
        return x + y;
    },
    multiply: function(x,y){
        return x * y;
    }
}
export default lib;