import { lyrics } from "../../constants/lyrics"
import { ILyric } from "../Lyric.interface"
import { LyricService } from "../Lyric.service"

describe('Lyric Service',()=>{

    let lyricService:ILyric
    const firstWord = "This is"

    beforeEach(()=>{
        lyricService = new LyricService(lyrics,firstWord)
    })


    test('Recite',()=>{
        expect(lyricService.recite(1)).toBe("This is the house that Jack built")
        expect(lyricService.recite(2)).toBe("This is the malt that lay in the house that Jack built")
        expect(lyricService.recite(12)).toBe("This is the horse and the hound and the horn that belonged to the farmer sowing his corn that kept the rooster that crowed in the morn that woke the priest all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built")
    })

    test('Random Recite',()=>{
        //Override random math, make it always return spesific number, only for testing purpose
        global.Math.floor = () => 1;
        expect(lyricService.randomRecite()).toBe("This is the house that Jack built")
        global.Math.floor = () => 2;
        expect(lyricService.randomRecite()).toBe("This is the malt that lay in the house that Jack built")
        global.Math.floor = () => 12;
        expect(lyricService.randomRecite()).toBe("This is the horse and the hound and the horn that belonged to the farmer sowing his corn that kept the rooster that crowed in the morn that woke the priest all shaven and shorn that married the man all tattered and torn that kissed the maiden all forlorn that milked the cow with the crumpled horn that tossed the dog that worried the cat that killed the rat that ate the malt that lay in the house that Jack built")


    })


    test('Recite Only Subject',()=>{
        expect(lyricService.reciteSubject(1)).toBe("This is the house")
        expect(lyricService.reciteSubject(2)).toBe("This is the malt and the house")
        expect(lyricService.reciteSubject(3)).toBe("This is the rat, the malt and the house")
    })

    test('Random Recite Only SUbject',()=>{
        //Override random math, make it always return spesific number, only for testing purpose
        global.Math.floor = () => 1;
        expect(lyricService.randomReciteSubject()).toBe("This is the house")
        global.Math.floor = () => 2;
        expect(lyricService.randomReciteSubject()).toBe("This is the malt and the house")
        global.Math.floor = () => 3;
        expect(lyricService.randomReciteSubject()).toBe("This is the rat, the malt and the house")


    })




})