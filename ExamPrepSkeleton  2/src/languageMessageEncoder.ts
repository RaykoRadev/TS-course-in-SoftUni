import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";

export class LanguageMessageEncoder<
    T extends Language,
    V extends Cipher<T>
> extends PartialMessageEncoder {
    encodeSymbols = 0;
    decodeSymbols = 0;

    public encodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        let strippedMessage = this.stripForbiddenSymbols(secretMessage);
        let tempMessage = "";
        while (strippedMessage !== tempMessage) {
            tempMessage = strippedMessage;
            strippedMessage = this.stripForbiddenSymbols(strippedMessage);
        }

        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }

        this.encodeSymbols += strippedMessage.length;
        return this.cipher.encipher(strippedMessage);
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }

        this.decodeSymbols += secretMessage.length;
        return this.cipher.decipher(secretMessage);
    }

    public totalProcessedCharacters(
        type: "Encoded" | "Decoded" | "Both"
    ): string {
        let totalSymbos = 0;

        if (type === "Encoded") {
            totalSymbos = this.encodeSymbols;
        } else if (type === "Decoded") {
            totalSymbos = this.decodeSymbols;
        } else if (type === "Both") {
            totalSymbos = this.encodeSymbols + this.decodeSymbols;
        }

        return `Total processed characters count: ${totalSymbos}`;
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
        let allChars = sample.split("");
        let isCompatible = allChars.every(
            (x) => x === "A" || x === "C" || x === "G" || x === "T"
        );
        return isCompatible;
    }
}
