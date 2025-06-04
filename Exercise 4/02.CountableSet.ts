interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    set: T[] = []; // could be object  but then the methods has to be modifited

    add(item: T): void {
        this.set.push(item);
    }

    remove(item: T): void {
        let index: number = this.set.indexOf(item);
        if (index !== -1) {
            this.set.splice(index, 1);
        }
    }

    contains(item: T): boolean {
        let index: number = this.set.indexOf(item);
        if (index !== -1) {
            return true;
        } else {
            return false;
        }
    }

    getNumberOfCopies(item: T): number {
        let temp = this.set.filter((el) => el == item);

        return temp.length;
    }
}

let countedSet = new CountedSet<string>();
countedSet.add("test");
countedSet.add("test");
console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));
countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");
console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));

// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
// codesCounterSet.add(404);
// codesCounterSet.add(200);
// console.log(codesCounterSet.contains(404));
// console.log(codesCounterSet.getNumberOfCopies(200));

// codesCounterSet.add(205); //TS Error
// codesCounterSet.getNumberOfCopies(350); //TS Error
