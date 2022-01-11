import { LyricHelper } from "../utility/LyricHelper";
import { randomNumberBetween } from "../utility/helper";
import { ILyric } from "./Lyric.interface";

export class LyricService implements ILyric {


    lyrics!: string[];
    firstWord!: string;
    lyricHelper:LyricHelper;

    constructor(lyrics:string[],firstWord:string){
        this.lyrics = lyrics
        this.firstWord = firstWord
        this.lyricHelper = new LyricHelper(this.lyrics)
    }


    recite(number: number): string {
        let recitedLyric:string[] =  this.lyricHelper.getRecitedLyrics(number)
        return `${this.firstWord} ${recitedLyric.join(" ")}`
    }
    randomRecite(): string {
        const randomNumber = randomNumberBetween(1,this.lyrics.length)
        return this.recite(randomNumber)
    }
    reciteSubject(number: number): string {
        let recitedLyricOnlySubject:string[] =  this.lyricHelper.getOnlySubject(number)
        return  `${this.firstWord} ${ this.lyricHelper.getLyricWithPunctuation(recitedLyricOnlySubject)}`
    }
    randomReciteSubject(): string {
        const randomNumber = randomNumberBetween(1,this.lyrics.length)
        return this.reciteSubject(randomNumber)
    }


}