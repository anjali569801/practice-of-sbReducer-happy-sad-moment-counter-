export const HAPPY_BUTTON_CLICKED = (count:number,when:Date)=>{
    return{
    type:"happy button clicked",
    payload:{count,when} ,
    
}};

export const SAD_BUTTON_CLICKED =(count:number,when:Date)=>({
    type:"sad button clicked",
    payload:{count,when} 
});