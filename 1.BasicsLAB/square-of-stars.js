//Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. 
//If there is no parameter specified, the rectangle should always be of size 5

function square(size){
    if(typeof size === 'number'){

        for(let i = 0; i < size; i++){            
            let result = '';

            for(let j = 0; j < size; j++){
                
                if(j == size - 1){
                    result += '*';
                }else{
                    
                    result += '* ';
                }
            }
            
            console.log(result);            
        }

    } else{
        let size = 5;

        for(let i = 0; i < size; i++){
            
            let result = '';
            for(let j = 0; j < size; j++){
                
                if(j == size - 1){
                    result += '*';
                }else{
                    
                    result += '* ';
                }
            }
            
            console.log(result);
        }
    }
}

square(3);
square(null);