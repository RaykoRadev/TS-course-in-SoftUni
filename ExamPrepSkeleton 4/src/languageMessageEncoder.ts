import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { TypeProcessedChars } from "./types";

export class LanguageMessageEncoder<T extends Language, V extends Cipher<T>>
    extends PartialMessageEncoder
    implements MessageEncoder
{
    constructor(lang: T, ciph: V) {
        super(lang, ciph);
    }

    private encodedSymbols = 0;
    private decodedSymbols = 0;

    protected override stripForbiddenSymbols(message: string) {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
        return message;
    }

    public encodeMessage(secretMessage: unknown) {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        const strippedMessage = this.stripForbiddenSymbols(secretMessage);

        if (!this.language.isCompatibleToCharset(strippedMessage)) {
            return "Message not compatible.";
        }

        this.encodedSymbols += strippedMessage.length;
        return this.cipher.encipher(strippedMessage);
    }

    public decodeMessage(secretMessage: unknown): string {
        if (typeof secretMessage !== "string" || secretMessage.length === 0) {
            return "No message.";
        }

        if (!this.language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }

        this.decodedSymbols += secretMessage.length;
        return this.cipher.decipher(secretMessage);
    }

    public totalProcessedCharacters(type: TypeProcessedChars): string {
        let result = 0;

        switch (type) {
            case "Encoded":
                result = this.encodedSymbols;
                break;
            case "Decoded":
                result = this.decodedSymbols;
                break;
            case "Both":
                result = this.encodedSymbols + this.decodedSymbols;
                break;
        }

        return `Total processed characters count: ${result}`;
    }
}
