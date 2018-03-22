//数值的扩展
{
    console.log('b',0b111110111);
    console.log('b',0o767);
}

{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite(1/0));
}

{
    console.log('NaN',Number.isInteger(NaN));
    console.log('25',Number.isInteger(25));
    console.log('25',Number.isInteger('25'));
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}