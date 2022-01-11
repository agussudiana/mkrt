import { lyrics } from "../../constants/lyrics";
import { LyricHelper } from "../LyricHelper";

describe('Lyric Helper Function Test', () => {
    
    let lyricHelper: LyricHelper

    beforeEach(()=>{

        lyricHelper = new LyricHelper(lyrics)

    })
   
    test('Get Array of Recited Lyrics', () => {
        expect(lyricHelper.getRecitedLyrics(1)).toEqual(["the house that Jack built"])
        expect(lyricHelper.getRecitedLyrics(2)).toEqual(["the malt that lay in","the house that Jack built"])
        expect(lyricHelper.getRecitedLyrics(3)).toEqual(["the rat that ate","the malt that lay in","the house that Jack built"])
        expect(lyricHelper.getRecitedLyrics(lyrics.length)).toEqual(lyrics)
    });


    test('Get Array of Recited Lyrics Only Subject', () => {
        expect(lyricHelper.getOnlySubject(1)).toEqual(["the house"])
        expect(lyricHelper.getOnlySubject(2)).toEqual(["the malt","the house"])
        expect(lyricHelper.getOnlySubject(3)).toEqual(["the rat","the malt","the house"])
    });


    test('Get Lyric String with Punctuation', () => {
        expect(lyricHelper.getLyricWithPunctuation(["the house"])).toEqual("the house")
        expect(lyricHelper.getLyricWithPunctuation(["the malt","the house"])).toEqual("the malt and the house")
        expect(lyricHelper.getLyricWithPunctuation(["the rat","the malt","the house"])).toEqual("the rat, the malt and the house")
    });


    test('validate Input Number', () => {
        expect(lyricHelper.validate(1)).toBe(undefined)
        expect(()=>{lyricHelper.validate(Number("as"))}).toThrow("Invalid Number")
        expect(()=>{lyricHelper.validate(13)}).toThrow("Number should be lower than lyrics length")
    });
   
  });