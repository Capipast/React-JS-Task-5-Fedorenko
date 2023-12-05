class Element{
    constructor(){
        this.element=null;
        this.counter=0;
    }
    getId(elem){
        if(elem===undefined){
            return undefined;
        }
        
        if(elem!==this.element){
            this.element=elem;
            this.counter=0;
        }
    
        return `${elem}_${++this.counter}`;
    }
}

export default Element;