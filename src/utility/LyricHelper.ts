import { isValidNumber } from "../validator/numberValidation"

export class LyricHelper {


    lyrics!: string[];

    constructor(lyrics:string[]){
        this.lyrics = lyrics
    }

    getRecitedLyrics(number:number):string[]{
        this.validate(number)
        let indexStart:number = this.lyrics.length - number
        let recitedLyrics:string[] = []
        while(indexStart !== this.lyrics.length){
            recitedLyrics.push(`${this.lyrics[indexStart]}`)
            indexStart++
        }
        return recitedLyrics
    }

    getOnlySubject(number:number):string[]{
        let recitedLyric:string[] = this.getRecitedLyrics(number)
        let recitedLyricOnlySubject = recitedLyric.map((lyric:string)=>{
           lyric = lyric.split(" ").slice(0,2).join(" ")
           return lyric
        })

        return recitedLyricOnlySubject
    }

    getLyricWithPunctuation(recitedLyricOnlySubject:string[]):string{

        return recitedLyricOnlySubject.join(", ").replace(/,(?=[^,]*$)/, " and")
    }


    validate(number:number){
        if (!isValidNumber(number)) throw new Error("Invalid Number")
        if(this.lyrics.length < number) throw new Error("Number should be lower than lyrics length")
    }
}