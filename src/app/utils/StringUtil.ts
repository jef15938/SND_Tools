export class StringUtil {

    static readonly _englishCharReg = new RegExp('[a-z|A-Z]','g');
    static readonly _numberCharReg = new RegExp('[0-9]','g');

    static isLegalPropertyName(propertyName: string): boolean {
       let firstCharIsEnglish = this.hasEnglishChar(propertyName[0]);
       if(!firstCharIsEnglish) return;

       let englishMatch = propertyName.match(this._englishCharReg);
       let numberMatch = propertyName.match(this._numberCharReg);
       let engliashCharCount = englishMatch ? 0 : englishMatch.length;
       let numberMatchCount = numberMatch ? 0 : numberMatch.length;

       return (engliashCharCount + numberMatchCount) === propertyName.length;
    }

    static isAllEnglishChar(str: string): boolean {
        // return str.split('').reduce((total, each) => total && this.hasEnglishChar(each), true);
        let result = str.match(this._englishCharReg);
        return result!==null && result.length === str.length;
    }

    static hasEnglishChar(str: string): boolean {
        return str.match(this._englishCharReg)!==null;
    }

    static isAllNumberChar(str: string): boolean {
        // return str.split('').reduce((total, each) => total && this.hasEnglishChar(each), true);
        let result = str.match(this._numberCharReg);
        return result!==null && result.length === str.length;
    }

    static isEmpty(str: string): boolean {
        return str ==='' || str === null || str === undefined || this.isAllSpaceChar(str);
    }


    static isAllSpaceChar(str: string): boolean {
        let spaceCount = str.split('').reduce((total, each) => {
            if(each === ' ') {   
                return total + 1;
            }
            else {
                return total;
            }
        }, 0);

        return spaceCount === str.length;
    }

   
    

}