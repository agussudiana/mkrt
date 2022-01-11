/**
 * Mekari test
 * This File basically contains codes that used for command-line interface, not the main feature instead.
 */
import { lyrics } from "./constants/lyrics"
import { ILyric } from "./services/Lyric.interface"
import { LyricService } from "./services/Lyric.service"
const readline = require('readline');
const color = "\x1b[32m%s\x1b[0m";
class Main {

    lyricService! : ILyric 
   
    setLyricService(service:ILyric){
            this.lyricService = service
    }
    useLyricService():ILyric{
        return this.lyricService
    }
}

const main = new Main()
main.setLyricService(new LyricService(lyrics,"This is"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputNumber = (cb:any)=>{
    rl.question("Please Input Number between 1 - "+ lyrics.length + " : ",(number:any)=>{
            try{
                cb(number)
            }catch(err){
                console.log("Invalid Number!")
                inputNumber(cb)
            }
            
    })
}

const openMenu = ()=>{
    console.log("------------------------------------------")
    console.log("1.Recite")
    console.log("2.Recite but Random")
    console.log("3.Recite only Subject")
    console.log("4.Recite only Subject but random")
    console.log("5.Exit")

    rl.question("Choose menu (1-4) : ",(number:any)=>{

        switch(number){
    
            case "1":
                    inputNumber((number:any)=>{
                        console.log(color,main.useLyricService().recite(number)) 
                        openMenu()       
                    })
                    
            break;
    
            case "2":
                    console.log(color,main.useLyricService().randomRecite())
                    openMenu()
            break
    
            case "3":
                    inputNumber((number:any)=>{
                        console.log(color,main.useLyricService().reciteSubject(number)) 
                        openMenu()       
                    })
            break
    
            case "4":
                    console.log(color,main.useLyricService().randomReciteSubject())
                    openMenu()
            break

            case "5":
                   rl.close()
            break
    
            default:
                    rl.close()
    
    
        }
    
    })

}


openMenu()
