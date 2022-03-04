const getsum =(...c)=>{
    const r = c.map(item=>item+"a")
    console.log(c)
    return r;

}
console.log(getsum("A","B","C"))