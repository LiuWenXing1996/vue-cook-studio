export default interface IFunctinMaker {
    name: string,
    label: string,
    args: any[],
    returns: any,
    body: Function
}

const getConfigValue=(path)=>{
    const a={}
    return a[path]
}