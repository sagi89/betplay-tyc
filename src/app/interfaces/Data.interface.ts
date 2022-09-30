export interface ISportsData {
    id: number;
    title: string;
    img: string;
    content:string;
}

export interface IMenuData {
    title: string;
    options: any[];
    icon?: string;
}

export interface IDocumentData{
    id:number;
    title:string;
    img?:string;
    content:string;
    isComponent?:boolean;
}