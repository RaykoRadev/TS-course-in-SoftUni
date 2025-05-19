function responseUnknown(obj: unknown): string {
    if ("value" in (obj as any) && typeof (obj as any).value === "string") {
        return (obj as any).value;
    }
    return "-";
}

console.log(responseUnknown({ code: 200, text: "Ok", value: [1, 2, 3] }));
console.log(
    responseUnknown({ code: 301, text: "Moved Permanently", value: "New Url" })
);
console.log(
    responseUnknown({
        code: 201,
        text: "Created",
        value: { name: "Test", age: 20 },
    })
);
console.log(
    responseUnknown({ code: 201, text: "Created", value: "Object Created" })
);
console.log(responseUnknown({ code: 404, text: "Not found" }));
console.log(responseUnknown({ code: 500, text: "Internal Server Error" }));
