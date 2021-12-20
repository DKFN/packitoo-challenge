
export interface IBriefBase {
    title: string;
    comment: string;
    productId: number;
}

export interface IBrief extends IBriefBase {
    id: number;
}
