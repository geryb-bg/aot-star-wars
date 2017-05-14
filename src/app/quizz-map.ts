export class Question {
    id: number;
    question: string;
    yesAnswerValue?: string;
    noAnswerValue?: string;
    yesAnswerId?: number;
    noAnswerId?: number;
    yesImageId?: number;
    noImageId?: number;
}

export class Image {
    id: number;
    url: string;
    name: string;
}