declare const EmptyType: unique symbol;

class Empty {
    [EmptyType: symbol]: void
    private constructor(){}
}

function raise(message: string): Empty {
    throw message
}

//  类“Empty”的构造函数是私有的，仅可在类声明中访问。ts(2673)
// const a = new Empty()