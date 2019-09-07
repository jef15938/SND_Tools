export class FeedBackInfo {
    private _feedBackType: FEEDBACKTYPE;
    private _showText: string;

    constructor(feedBackType: FEEDBACKTYPE, showText: string) {
        this._feedBackType = feedBackType;
        this._showText = showText;
    }

    public get feedBackType(): FEEDBACKTYPE {
        return this._feedBackType;
    }
    
    public get showText(): string {
        return this._showText;
    }
        
    
}

export enum FEEDBACKTYPE {
    SUCCESS = 'success',
    FAIL = 'fail'
}