import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";

export class LanguageMessageEncoder<
    T extends Language,
    V extends Cipher<T>
> extends PartialMessageEncoder {
    symbolsTotalEncoded = 0;
    symbolsTotalDecoded = 0;

    protected override stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
        return message;
    }

    public encodeMessage(secretMessage: unknown) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        const newMessage = this.stripForbiddenSymbols(secretMessage);

        if (!this.language.isCompatibleToCharset(newMessage)) {
            return "Message not compatible.";
        }
        this.symbolsTotalEncoded += newMessage.length;
        return this.cipher.encipher(newMessage);
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }
        this.symbolsTotalDecoded += secretMessage.length;
        return this.cipher.decipher(secretMessage);
    }

    public totalProcessedCharacters(
        type: "Encoded" | "Decoded" | "Both"
    ): string {
        let totalProcessedCharacters = 0;

        if (type === "Encoded") {
            totalProcessedCharacters = this.symbolsTotalEncoded;
        } else if (type === "Decoded") {
            totalProcessedCharacters = this.symbolsTotalDecoded;
        } else if (type === "Both") {
            totalProcessedCharacters =
                this.symbolsTotalDecoded + this.symbolsTotalEncoded;
        }

        return `Total processed characters count: ${totalProcessedCharacters}`;
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
            (x) => x === "A" || x === "C" || x === "T" || x === "G"
        );
        return isCompatible;
    }
}
