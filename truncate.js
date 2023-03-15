export function truncate(p) {
    //function truncates any json object entry that has array or string charachters more than 500
    for (const [key, value] of Object.entries(p)) {
             
             if(value !==null && value.constructor === Array){
             
                 let value_join = value.join();
                 let value_join_size = value_join.length;
 
                 if (value_join_size>{500}) {
                     let x = value_join.slice(0,500)+',...truncated';
                     let y = x.split(',');
                     p[key] = y;
                 }
             }
             
             else if(value !==null && value.constructor === String){
                 let value_size = value.length;
                 
                 if (value_size>500) {
                     let x = value.slice(0,500)+',...truncated';
                     p[key] = x;
                     
                 }
             }
             
     } 
 
 }
 
 