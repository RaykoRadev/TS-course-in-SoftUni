import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

enum OperationType {
    Encoded = "Encoded",
    Decoded = "Decoded",
    Both = "Both",
}

export class LanguageMessageEncoder<T extends Language, V extends Cipher<T>>
    extends PartialMessageEncoder
    implements MessageEncoder
{
    constructor(lang: T, ciph: V) {
        super(lang, ciph);
    }

    encodedNum = 0;
    decodedNum = 0;

    public encodeMessage(secretMessage: unknown) {
        // if ((<any>secretMessage).length === 0) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }
        let prevMessage = "";
        let newMessage = this.stripForbiddenSymbols(secretMessage);
        while (newMessage !== prevMessage) {
            prevMessage = newMessage;
            newMessage = this.stripForbiddenSymbols(newMessage);
        }

        if (!this.language.isCompatibleToCharset(newMessage)) {
            return "Message not compatible.";
        }

        this.encodedNum += newMessage.length;
        return this.cipher.encipher(newMessage);
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }

        this.decodedNum += secretMessage.length;
        return this.cipher.decipher(secretMessage);
    }

    // public totalProcessedCharacters(
    //     type: "Encoded" | "Decoded" | "Both"
    // ): string {
    //     let result = 0;
    //     if (type === "Encoded") {
    //         result = this.encodedNum;
    //     } else if (type === "Decoded") {
    //         result = this.decodedNum;
    //     } else if (type === "Both") {
    //         result = this.encodedNum + this.decodedNum;
    //     }

    //     return `Total processed characters count: ${result}`;
    // }

    //*  varian with enum

    public totalProcessedCharacters(type: keyof typeof OperationType): string {
        let result = 0;
        if (type === "Encoded") {
            result = this.encodedNum;
        } else if (type === "Decoded") {
            result = this.decodedNum;
        } else if (type === "Both") {
            result = this.encodedNum + this.decodedNum;
        }

        return `Total processed characters count: ${result}`;
    }
}

export class DNACodeLanguage implements Language {
    private _charset: Set<"A" | "C" | "G" | "T"> = new Set([
        "A",
        "C",
        "G",
        "T",
    ]);

    get charset() {
        return this._charset;
    }

    isCompatibleToCharset(sample: string): boolean {
        //! for later investigation
        // let allChars = sample.split("");

        // let isCompatible = allChars.every(
        //     (x) => x !== "A" || x !== "C" || x !== "G" || x !== "T"
        // );

        let isCompatible = [...sample].every((x) =>
            this.charset.has(x as "A" | "C" | "G" | "T")
        );

        return isCompatible;
    }
}
