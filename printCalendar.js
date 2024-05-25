const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function Calendar(year){
    let m = 1;
    for (const month of months) {
        const date = new Date(year, m ,0);
        const day = new Date(year, m - 1 ,1).getDay();
        const number_date = date.getDate();

        const rows = () => { let roundUp = Math.ceil(number_date / 7); return day >= 5? roundUp + 1 : roundUp } 

        console.log("\n" + '\x1b[35m', month , '\x1b[0m' + year);
        console.log('\x1b[33m', 'Sun' ,'\x1b[0m' + "\t" + "Mon" + "\t" + "Tue" + "\t" + "Wed" + "\t" + "Thu" + "\t" +"Fri" + "\t" + "Sat");
       
        let number_of_day = 1;
    
        for(let i = 1; i <= rows(); i++){
            const arrayEmpty = new Array(7).fill(" ")
    
            let tile = i == 1? day : 0
      
            for(let y = tile; y < 7; y++){
                arrayEmpty[y] = y == 0? '\x1b[33m' + ` ${number_of_day++}` + '\x1b[0m' : number_of_day++;
                if(number_of_day > number_date) break;
            }
            console.log(arrayEmpty.join("\t"));
        }
        m++;
    }
}
