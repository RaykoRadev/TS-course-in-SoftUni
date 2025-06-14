import { Language } from "./contracts/language";
import { TypeDna } from "./types";

export class DNACodeLanguage implements Language {
    private _charset: Set<TypeDna> = new Set(["A", "C", "G", "T"]);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(sample: string): boolean {
        let allChars = sample.split("");
        let charsetArr: string[] = Array.from(this.charset);
        let isCompatible = allChars.every((x) => charsetArr.includes(x));
        return isCompatible;
    }
}
